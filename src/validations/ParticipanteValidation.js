const {body, validationResult} = require('express-validator');

const ParticipantesValidationRules = () => {
    return[
        body('email').isEmail().withMessage('Email Invalido'),
        body('senha').isLength({min: 8}).withMessage('A senha precisa ter ao menos oito caracteres')
    ]
}

module.exports = {
    ParticipantesValidationRules,
}