const express = require("express");
const UserController = require('./controllers/UserController');
const routes = express.Router();

routes.get('/',UserController.list);
routes.post('/',UserController.create);
routes.put('/:id',UserController.update);
routes.delete('/',UserController.delete);

module.exports = routes;