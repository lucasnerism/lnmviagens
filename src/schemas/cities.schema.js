import joi from "joi";

export const citySchema = joi.object({
  name: joi.string().required(),
  state_name: joi.string().required(),
  country_name: joi.string().required()
});