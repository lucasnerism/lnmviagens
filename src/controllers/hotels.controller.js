import hotelsService from "../services/hotels.service.js";

const getHotels = async (req, res) => {
  const { status, response } = await hotelsService.getHotels(req.query);
  res.status(status).json(response);
};

const getHotelById = async (req, res) => {
  const { id } = req.params;
  const { status, response } = await hotelsService.getHotelById(id);
  res.status(status).json(response);
};

const postHotel = async (req, res) => {
  const { status, response } = await hotelsService.postHotel(req.body);
  res.status(status).json(response);
};

export default {
  getHotels,
  getHotelById,
  postHotel
};