import { Router } from 'express';
import { createRequest } from '../controller/request.controller.js';
import { RequestApproval } from '../controller/request.controller.js';
import { getAllRequest } from '../controller/request.controller.js';

const routes = new Router();

routes.post("/creat-request" , createRequest);
routes.post("/approve-request" , RequestApproval);
routes.post("/get-requests" , getAllRequest);

export default routes;