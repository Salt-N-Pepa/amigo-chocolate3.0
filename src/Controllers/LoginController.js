const Participante = require('../models/Participante');
const jwt = require('jsonwebtoken')
const secret = require('../../src/.env')

module.exports = {
    async geraToken(request, response){
        
        let { nome } = request.body;
        const UsuarioRetorno = await Participante.findOne({ nome: nome});
        
        const token = jwt.sign({_id: UsuarioRetorno._id}, secret.secret, { expiresIn: 1 });
        return response.send({auth : true,  token : token});

    }
}