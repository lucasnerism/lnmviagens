import { Router } from "express";
import hotelsController from "../controllers/hotels.controller.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { hotelsSchema } from "../schemas/hotels.schema.js";

const hotelsRouter = Router();

hotelsRouter.get('/hotels', hotelsController.getHotels);
hotelsRouter.get('/hotels/:id', hotelsController.getHotelById);
hotelsRouter.post('/hotels', validateSchema(hotelsSchema), hotelsController.postHotel);

export default hotelsRouter;