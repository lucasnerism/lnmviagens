import { Router } from "express";
import citiesController from "../controllers/cities.controller.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { citySchema } from "../schemas/cities.schema.js";

const citiesRouter = Router();

citiesRouter.get('/cities', citiesController.getCities);
citiesRouter.post('/cities', validateSchema(citySchema), citiesController.postCities);

export default citiesRouter;