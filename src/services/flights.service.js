import fligthsRepository from "../repositories/fligths.repository.js";

const getFlights = async (querystring) => {
  try {
    const result = await fligthsRepository.getAllFlights(querystring);
    return { status: 200, response: result.rows };
  } catch (error) {
    return { status: 500, response: { message: error.message } };
  }
};

export default {
  getFlights
};