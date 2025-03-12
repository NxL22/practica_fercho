import { Router } from 'express';
import { getSaludoController } from '../controllers/saludo.controller.js';

const saludoRoutes = Router();

saludoRoutes.get('/', getSaludoController);

export default saludoRoutes;
