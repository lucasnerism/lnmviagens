import { db } from "../database/connect.js";
import queryConstructor from "../helpers/queryConstructor.helper.js";

const getAllFlights = (querystring) => {
  const initialQuery = `SELECT
  f.id, a.name,a.image,c1.name AS "fromCity",c2.name AS "toCity",f.departure_date AS "departureDate", f.arrival_date AS "arrivalDate", f.price
  FROM flights f
  JOIN airline a ON f.airline_id = a.id
  JOIN cities c1 ON f.departure_city_id = c1.id
  JOIN cities c2 ON f.arrival_city_id = c2.id
  WHERE 1=1
  `;
  const query = queryConstructor(initialQuery, querystring);
  return db.query(query);
};

const getFlightById = (querystring, id) => {
  return db.query(`SELECT
    f.id, a.name,c1.name,c2.name,f.departure_date AS "departureDate", f.arrival_date AS "arrivalDate", f.price
    FROM flights f
    JOIN airline a ON f.airline_id = a.id
    JOIN cities c1 ON f.departure_city_id = c1.id
    JOIN cities c2 ON f.arrival_city_id = c2.id
    WHERE f.id=$1
  `, [id]);
};

const getFlightByDepCity = (querystring, id) => {
  return db.query(`SELECT
    f.id, a.name,c1.name,c2.name,f.departure_date AS "departureDate", f.arrival_date AS "arrivalDate", f.price
    FROM flights f
    JOIN airline a ON f.airline_id = a.id
    JOIN cities c1 ON f.departure_city_id = c1.id
    JOIN cities c2 ON f.arrival_city_id = c2.id
    WHERE f.departure_city_id=$1
  `, [id]);
};

const getFlightByArrCity = (querystring, id) => {
  return db.query(`SELECT
    f.id, a.name,c1.name,c2.name,f.departure_date AS "departureDate", f.arrival_date AS "arrivalDate", f.price
    FROM flights f
    JOIN airline a ON f.airline_id = a.id
    JOIN cities c1 ON f.departure_city_id = c1.id
    JOIN cities c2 ON f.arrival_city_id = c2.id
    WHERE f.arrival_city_id=$1
  `, [id]);
};

const getFlightByCities = (querystring, depId, arrId) => {
  return db.query(`SELECT
    f.id, a.name,c1.name,c2.name,f.departure_date AS "departureDate", f.arrival_date AS "arrivalDate", f.price
    FROM flights f
    JOIN airline a ON f.airline_id = a.id
    JOIN cities c1 ON f.departure_city_id = c1.id
    JOIN cities c2 ON f.arrival_city_id = c2.id
    WHERE f.departure_city_id=$1
    AND f.arrival_city_id=$2
  `, [depId, arrId]);
};

export default {
  getAllFlights,
  getFlightById,
  getFlightByDepCity,
  getFlightByArrCity,
  getFlightByCities
};