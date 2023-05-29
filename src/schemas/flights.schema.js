import joi from "joi";

export const flightSchema = joi.object({
  airline_id: joi.number().integer().required(),
  deparature_city_id: joi.number().integer().required(),
  arrival_city_id: joi.number().integer().required(),
  departure_date: joi.date().required(),
  arrival_date: joi.date().required(),
  price: joi.number().integer().required()
});