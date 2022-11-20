import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

import Partida from 'App/Models/Partida'

export default class PartidasController {

    public async store({request, response}:HttpContextContract){
        const body = request.body()
        console.log(body)
        // const time = await Partida.create({country:body.country, continent:body.continent, grupo_id: body.group_id })
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
        // partida.country = body.country;
        // partida.continent = body.continent;
        
        await partida.save()

        return{
            message:"Partida alterado com sucesso",
            data:partida
        }
    }

    public async buscaPartidaFaseGrupo(){

        // const partida = await Partida.select('p.id, timeA.name, timeB.name')
        //                             .from('partidas as p')
        //                             .leftOuterJoin('times as timeA', 'times.id', 'partidas.time_a')
        //                             .leftOuterJoin('times as timeB', 'times.id', 'partidas.time_b')
        //                             .where('p.tipo', 'faseGrupos')

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


