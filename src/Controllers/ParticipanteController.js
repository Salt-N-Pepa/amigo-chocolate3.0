const Participante = require('../models/Participante');

module.exports = {

    async index(request, response) {
        try{

            const {page = 1} = request.query;
            const participantes = await Participante.paginate({}, {page, limit : 2});
            
            return response.send({ participantes });
        } catch {
            return response.status(400).send({error: 'Erro'})
        }
    },

    async getParticipante(request, response){
        try{

            const participante = await Participante.findById(request.params.email);
            
            return response.send({ participante });
        } catch {
            return response.status(400).send({error: 'Erro'})
        } 
    
    },

    async post(request, response){
        try{

            const retornoParticipante = await Participante.create(request.body);

            return response.send({ retornoParticipante });

        } catch (err){

            return response.status(400).send({error: 'Erro em Criar Participante'})
        }
    },

    async edit(request, response){
        
        try{

            const retornoParticipante = await Participante.findByIdAndUpdate(request.params._id, request.body, {new: true});

            return response.send({ retornoParticipante });

        } catch (err){

            return response.status(400).send({error: 'Erro em Editar Participante'})
        }

    },

    async delete(request, response){
        
        try{

            await Participante.findByIdAndDelete(request.params._id);

            return response.send();

        } catch (err) {
            return response.status(400).send({error: 'Deu Biziu no delete'})
        }

    },
}