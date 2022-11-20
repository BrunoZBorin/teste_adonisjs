import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Grupo from 'App/Models/Grupo'

export default class GruposController {
    public async store({request, response}:HttpContextContract){
        const body = request.body()

        const grupo = await Grupo.create(body)

        response.status(201)

        return{
            message:"Grupo criado com sucesso",
            data:grupo
        }
    }

    public async index(){

        const grupos = await Grupo.all()

        return{
            grupos
        }
    }

    public async show({params}:HttpContextContract){

        const grupo = await Grupo.findOrFail(params.id)

        return{
            data:grupo
        }
    }

    public async destroy({params}:HttpContextContract){

        const grupo = await Grupo.findOrFail(params.id)

        await grupo.delete()
        return{
            message:"Grupo excluído com sucesso"
        }
    }

    public async update({params, request}:HttpContextContract){

        const body = request.body()

        const grupo = await Grupo.findOrFail(params.id)
        grupo.name = body.name;
        
        await grupo.save()

        return{
            message:"Grupo alterado com sucesso",
            data:grupo
        }
    }
}
