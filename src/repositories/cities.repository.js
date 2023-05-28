import { db } from "../database/connect.js";

const getAllCities = (query) => {
  return db.query(`SELECT id,name FROM cities;`);
};

const getCityById = (id) => {
  return db.query(`SELECT id,name FROM cities WHERE id=$1;`, [id]);
};

export default {
  getAllCities,
  getCityById
};