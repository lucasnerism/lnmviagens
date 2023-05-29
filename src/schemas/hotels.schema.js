import joi from "joi";

export const hotelsSchema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  room_price: joi.number().integer().required(),
  city_id: joi.number().integer().required(),
  available_rooms: joi.number().integer().required()
});