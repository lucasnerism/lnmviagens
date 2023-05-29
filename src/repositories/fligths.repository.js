import { db } from "../database/connect.js";
import queryConstructor from "../helpers/queryConstructor.helper.js";

const getAllFlights = (querystring) => {
  const initialQuery = `SELECT
  f.id, a.name AS "airlineName",a.image AS "airlineImage",c1.name AS "fromCity",c2.name AS "toCity",f.departure_date AS "departureDate", f.arrival_date AS "arrivalDate", f.price
  FROM flights f
  JOIN airlines a ON f.airline_id = a.id
  JOIN cities c1 ON f.departure_city_id = c1.id
  JOIN cities c2 ON f.arrival_city_id = c2.id
  WHERE 1=1
  `;
  const query = queryConstructor(initialQuery, querystring);
  return db.query(query);
};

const getFlightById = (id) => {
  return db.query(`SELECT
  f.id, a.name AS "airlineName",a.image AS "airlineImage",c1.name AS "fromCity",c2.name AS "toCity",f.departure_date AS "departureDate", f.arrival_date AS "arrivalDate", f.price
  FROM flights f
  JOIN airlines a ON f.airline_id = a.id
  JOIN cities c1 ON f.departure_city_id = c1.id
  JOIN cities c2 ON f.arrival_city_id = c2.id
    WHERE f.id=$1
  `, [id]);
};

const postFlight = ({ airline_id, departure_city_id, arrival_city_id, departure_date, arrival_date, price }) => {
  return db.query(`INSERT INTO flights (airline_id, departure_city_id, arrival_city_id, departure_date, arrival_date, price)
  VALUES ($1, $2, $3, $4, $5, $6)
  `, [airline_id, departure_city_id, arrival_city_id, departure_date, arrival_date, price]);
};

export default {
  getAllFlights,
  getFlightById,
  postFlight
};