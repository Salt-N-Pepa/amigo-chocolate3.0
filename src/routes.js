const { Router } = require('express');

const ParticipantesController = require('./Controllers/ParticipanteController');
const GrupoController = require('./Controllers/GrupoController');
const LoginController = require('./Controllers/LoginController');

const auth = require('./middleware/auth');
const {validate} = require('./middleware/validator');
const {ParticipantesValidationRules} = require('./validations/ParticipanteValidation');
const {GruposValidationRules} = require('./validations/GrupoValidation')

const routes = Router();

routes.get('/participantes', auth, ParticipantesController.index);
routes.get('/participantes/:email', auth, ParticipantesController.getParticipante);
routes.post('/participantes', auth, ParticipantesValidationRules(), validate, ParticipantesController.post);
routes.put('/participantes/:_id', auth, ParticipantesValidationRules(), validate, ParticipantesController.edit);
routes.delete('/participantes/:_id', auth, ParticipantesController.delete);

routes.get('/Grupos', auth, GrupoController.index);
routes.get('/Grupos/:_id', auth,  GrupoController.getGrupo);
routes.post('/Grupos', auth, GruposValidationRules(), validate, GrupoController.create);
routes.put('/Grupos/:_id', auth, GruposValidationRules(), validate, GrupoController.edit);
routes.delete('/Grupos/:_id', auth, GrupoController.delete);


routes.post('/login', LoginController.geraToken);

module.exports = routes;