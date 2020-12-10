import express from 'express';
import Controller from './controllers/Controller';


const routes = express.Router();
const controller = new Controller();


routes.get('/', controller.testLink);
routes.post('/oximetros', controller.updateAllOximeters);
routes.get('/oximetros', controller.indexOximeter);
routes.get('/oximetros/:name', controller.getValorOxi);
routes.post('/oximetros/:name', controller.updateOximeter);
routes.get('/pacientes', controller.getPacientes);
routes.get('/termometros', controller.getTermometros);

export default routes;
