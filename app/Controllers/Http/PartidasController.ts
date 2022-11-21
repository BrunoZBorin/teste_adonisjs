import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

import Partida from 'App/Models/Partida'

export default class PartidasController {

    public async store({request, response}:HttpContextContract){
        const body = request.body()
        
        const partida = await Partida.create(body)

        response.status(201)

        return{
            message:"Partida criado com sucesso",
            data:partida
        }
    }

    public async index(){

        const partidas = await Partida.all()

        return{
            partidas
        }
    }

    public async show({params}:HttpContextContract){

        const partida = await Partida.findOrFail(params.id)

        return{
            data:partida
        }
    }

    public async destroy({params}:HttpContextContract){

        const partida = await Partida.findOrFail(params.id)

        await partida.delete()
        return{
            message:"Partida excluído com sucesso"
        }
    }

    public async update({params, request}:HttpContextContract){

        const body = request.body()

        const partida = await Partida.findOrFail(params.id)

        partida.goals_team_a = body.goals_team_a
        partida.goals_team_b = body.goals_team_b
        partida.cards_team_a = body.cards_team_a
        partida.cards_team_b = body.cards_team_b
        
        await partida.save()

        return{
            message:"Partida alterado com sucesso",
            data:partida
        }
    }

    public async buscaPartidaFaseGrupo(){

        const partida = await Database.from('partidas as p')
                                    .leftOuterJoin('times as timeA', 'p.team_a', '=','timeA.id')
                                    .leftOuterJoin('times as timeB', 'p.team_b', '=','timeB.id')
                                    .select('p.id', 'timeA.country as PaisA', 'timeB.country  as PaisB')
                                    .where('p.tipo', 'faseGrupos')
        return{
            data:partida
        }
    }

    
}


