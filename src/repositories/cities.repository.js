import { db } from "../database/connect.js";
import queryConstructor from "../helpers/queryConstructor.helper.js";

const getAllCities = (querystring) => {
  const initialQuery = `
  SELECT
    cities.id,cities.name,s.name AS "stateName",c.name AS "countryName"
  FROM cities
  JOIN states s ON s.id=cities.state_id
  JOIN countries c ON s.country_id = c.id
  `;
  const query = queryConstructor(initialQuery, querystring);
  return db.query(query);
};

const getCityById = (id) => {
  return db.query(`SELECT id,name FROM cities WHERE id=$1;`, [id]);
};

const getCityByName = (name, stateId) => {
  return db.query(`SELECT id,name FROM cities WHERE name=$1 AND state_id=$2;`, [name, stateId]);
};

const getStateByName = (name) => {
  return db.query(`SELECT id AS "stateId" FROM states WHERE name=$1`, [name]);
};

const getCountryByName = (name) => {
  return db.query(`SELECT id AS "countryId" FROM countries WHERE name=$1`, [name]);
};

const insertCity = (name, state_id) => {
  return db.query(`INSERT INTO cities (name,state_id) VALUES($1,$2) RETURNING *;`, [name, state_id]);
};

const insertState = (name, country_id) => {
  return db.query(`INSERT INTO states (name,country_id) VALUES($1,$2) RETURNING id AS "stateId";`, [name, country_id]);
};

const insertCountry = (name) => {
  return db.query(`INSERT INTO countries (name) VALUES($1) RETURNING id AS "countryId";`, [name]);
};

export default {
  getAllCities,
  getCityById,
  getCityByName,
  getStateByName,
  getCountryByName,
  insertCity,
  insertState,
  insertCountry
};