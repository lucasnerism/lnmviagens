import fligthsRepository from "../repositories/fligths.repository.js";

const getFlights = async (querystring) => {
  try {
    const result = await fligthsRepository.getAllFlights(querystring);
    return { status: 200, response: result.rows };
  } catch (error) {
    return { status: 500, response: { message: error.message } };
  }
};

const getFlightById = async (id) => {
  try {
    const result = await fligthsRepository.getFlightById(id);
    return { status: 200, response: result.rows[0] };
  } catch (error) {
    return { status: 500, response: { message: error.message } };
  }
};

const postFlight = async (body) => {
  try {
    await fligthsRepository.postFlight(body);
    return { status: 201, response: { message: "Vôo criado" } };
  } catch (error) {
    return { status: 500, response: { message: error.message } };
  }
};


export default {
  getFlights,
  getFlightById,
  postFlight
};