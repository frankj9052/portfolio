import { Router } from 'express';
import { publicRoute } from './publicRoute'

const routes = Router();

routes.use('/public', publicRoute);

export { routes }
