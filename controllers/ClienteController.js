//import models from '../models';
const models = require('../models');

module.exports = {
    add: async(req, res, next) => {
        try {
            const reg = await models.Clientes.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    list: async(req, res, next) => {
        try {
            const reg = await models.Clientes.findAll({
            });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    
}