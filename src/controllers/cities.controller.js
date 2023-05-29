import citiesService from "../services/cities.service.js";

const getCities = async (req, res) => {
  const { status, response } = await citiesService.getCities();
  res.status(status).json(response);
};

const postCities = async (req, res) => {
  const { status, response } = await citiesService.postCities(req.body);
  res.status(status).json(response);
};

export default {
  getCities,
  postCities
};