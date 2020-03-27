const Grupo = require('../models/Grupo');
const Participante = require('../models/Participante');
const moongoose = require('mongoose');

module.exports = {
    async index(request, response){

        try{

            const {page = 1} = request.query;
            const grupo = await Grupo.paginate({}, {page, limit : 2});
            
            return response.send({ grupo });
        } catch {
            return response.status(400).send({error: 'Erro'})
        }

    },

    async getGrupo(request, response){
        
        try{

            const grupo = await Grupo.findById(request.params._id);
            
            return response.send({ grupo });
        } catch {
            return response.status(400).send({error: 'Erro'})
        } 

    },

    async create(request, response){
        
        try{

            const retornoGrupo = await Grupo.create(request.body);

            return response.send({ retornoGrupo });

        } catch (err){

            return response.status(400).send({error: 'Erro em Criar Grupo'})
        }
    
    },

    async edit(request, response){
        try{

            const retornoGrupo = await Participante.findByIdAndUpdate(request.params._id, request.body, {new: true});

            return response.send({ retornoGrupo });

        } catch (err){

            return response.status(400).send({error: 'Erro em Editar Grupo'})
        }

    },

    async delete(request, response){

        try{

            await Grupo.findByIdAndDelete(request.params._id);

            return response.send();

        } catch (err) {
            return response.status(400).send({error: 'Deu Biziu no delete'})
        }
       
}
}