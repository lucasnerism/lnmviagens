import { Router } from "express";

const citiesRouter = Router();

citiesRouter.get('/cities');
citiesRouter.post('/cities');

export default citiesRouter;