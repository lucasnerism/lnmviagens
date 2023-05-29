import { Router } from "express";
import flightsController from "../controllers/flights.controller.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { flightSchema } from "../schemas/flights.schema.js";

const flightsRouter = Router();

flightsRouter.get('/flights', flightsController.getFlights);
flightsRouter.get('/flights/:id', flightsController.getFlightById);
flightsRouter.post('/flights', validateSchema(flightSchema), flightsController.postFlight);

export default flightsRouter;