import { Router } from 'express';
import { SignUp } from "../controller/user.controller.js";
import { LogIn } from '../controller/user.controller.js';
import { getUser } from '../controller/user.controller.js';
import { refreshAccessToke } from '../controller/user.controller.js';
import verifyHandler from '../middleware/auth.middleware.js';

const routes = new Router();

routes.post('/sign-up', SignUp);
routes.post('/sign-in', LogIn);
routes.post('/refresh-token', refreshAccessToke);
routes.get('/user',verifyHandler, getUser);

export default routes;

