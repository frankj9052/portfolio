import {Router} from 'express';
import { autoComplete } from '../controller/googleApiController';

const publicRoute = Router();

// Goolge API
publicRoute.get('/googleApi/autoComplete', autoComplete);

export {
    publicRoute
}