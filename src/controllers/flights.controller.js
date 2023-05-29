import flightsService from "../services/flights.service.js";

const getFlights = async (req, res) => {
  const { status, response } = await flightsService.getFlights(req.query);
  res.status(status).json(response);
};

const getFlightById = async (req, res) => {
  const { id } = req.params;
  const { status, response } = await flightsService.getFlightById(id);
  res.status(status).json(response);
};

const postFlight = async (req, res) => {
  const { status, response } = await flightsService.postFlight(req.body);
  res.status(status).json(response);
};

export default {
  getFlights,
  getFlightById,
  postFlight
};