const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const GrupoSchema = new mongoose.Schema({
    
    nome : { 
        type : String, 
    },
    dataSorteio : Date,
    valorMinimo : Number,
    valorMaximo : Number,
    adm : {
        _id : String,
        nome : String,
        dataNascimento : Date,
        email : String
    },
    participantes : [{
        _id: String,
        nome: String,
        dataNascimento: Date,
        email: String,
        desejo: [String],
        amigoChocolate : {
            _id : String,
            nome: String,
            dataNascimento : Date,
            email: String,
            desejo : [String]
        }
    }]

});

GrupoSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Grupo', GrupoSchema);