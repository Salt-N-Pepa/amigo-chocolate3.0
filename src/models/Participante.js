const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const ParticipanteSchema = new mongoose.Schema({
    nome : {
        type: String,
    },
    //Continuar fazendo o controller
    email : {
        type: String,
    },
    senha : {
        type: String,
    },
    dataNascimento : Date,
    amigoChocolate : [{
        _id : String,
        nome : String,
        dataNascimento : Date,
        email : String
    }]
    ,
    grupo : [{
        _id: String,
        nome: String,
    }]
});

ParticipanteSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Participante', ParticipanteSchema);