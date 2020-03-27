const { Router } = require('express');

const ParticipantesController = require('./Controllers/ParticipanteController');
const GrupoController = require('./Controllers/GrupoController');
const LoginController = require('./Controllers/LoginController');

const auth = require('./middleware/auth');
const {validate} = require('./middleware/validator');
const {ParticipantesValidationRules} = require('./validations/ParticipanteValidation');

const routes = Router();

routes.get('/participantes', ParticipantesController.index);
routes.get('/participantes/:email', auth, ParticipantesController.getParticipante);
routes.post('/participantes', ParticipantesValidationRules(), validate, auth, ParticipantesController.post);
routes.put('/participantes/:_id', ParticipantesController.edit);
routes.delete('/participantes/:_id', ParticipantesController.delete);

routes.get('/Grupos', GrupoController.index);
routes.get('/Grupos/:_id', GrupoController.getGrupo);
routes.post('/Grupos', GrupoController.create);
routes.put('/Grupos/:_id', GrupoController.edit);
routes.delete('/Grupos/:_id', GrupoController.delete);


routes.post('/login', LoginController.geraToken);

module.exports = routes;