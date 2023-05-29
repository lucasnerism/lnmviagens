import hotelsRepository from "../repositories/hotels.repository.js";

const getHotels = async (querystring) => {
  try {
    const result = await hotelsRepository.getHotels(querystring);
    return { status: 200, response: result.rows };
  } catch (error) {
    return { status: 500, response: { message: error.message } };
  }
};

const getHotelById = async (id) => {
  try {
    const result = await hotelsRepository.getHotelById(id);
    return { status: 200, response: result.rows[0] };
  } catch (error) {
    return { status: 500, response: { message: error.message } };
  }
};

const postHotel = async (body) => {
  try {
    const result = await hotelsRepository.postHotel(body);
    return { status: 201, response: result.rows[0] };
  } catch (error) {
    return { status: 500, response: { message: error.message } };
  }
};

export default {
  getHotels,
  getHotelById,
  postHotel
};