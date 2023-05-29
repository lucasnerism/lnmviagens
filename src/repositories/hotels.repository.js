import { db } from "../database/connect.js";
import queryConstructor from "../helpers/queryConstructor.helper.js";

const getHotels = (querystring) => {
  const initialQuery = `
  SELECT
        h.id, h.name, h.description, h.price,c.name AS "cityName", p1.image AS "mainImage",
        JSON_AGG(DISTINCT f.name) AS "facilities",
        JSON_AGG(p2.image) AS "images"
    FROM hotels h
    JOIN hotels_facilities hf ON hf.hotel_id = h.id
    JOIN facilities f ON hf.facility_id = f.id
    JOIN cities c ON h.city_id = c.id
    JOIN hotel_pictures p1 ON p1.id = h.main_picture
    JOIN hotel_pictures p2 ON p2.hotel_id = h.id AND p2.id <> h.main_picture
    WHERE 1=1    
  `;
  const query = queryConstructor(initialQuery, querystring, true);
  return db.query(query);
};

const getHotelById = (id) => {
  return db.query(`
  SELECT
        h.id, h.name, h.description, h.price,c.name AS "cityName", p1.image AS "mainImage",
        JSON_AGG(f.name) AS "facilities",
        JSON_AGG(p2.image) AS "images"
    FROM hotels h
    JOIN hotels_facilities hf ON hf.hotel_id = h.id
    JOIN facilities f ON hf.facility_id = f.id
    JOIN cities c ON h.city_id = c.id
    JOIN hotel_pictures p1 ON p1.id = h.main_picture
    JOIN hotel_pictures p2 ON p2.hotel_id = h.id AND p2.id <> h.main_picture
    WHERE h.id=$1
  `, [id]);
};

const postHotel = ({ name, description, price, city_id, available_rooms }) => {
  return db.query(`INSERT INTO hotels (name,description,price,city_id,available_rooms)
  VALUES($1,$2,$3,$4,$5) RETURNING id,name;
  `, [name, description, price, city_id, available_rooms]);
};

export default {
  getHotels,
  getHotelById,
  postHotel
};