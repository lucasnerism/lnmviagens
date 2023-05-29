import columnNames from "../constants/columnNames.js";

const queryConstructor = (initialQuery, querystring, groupBy) => {
  const { fromCity, toCity, limit, offset, orderBy, desc, minPrice, maxPrice, city } = { ...querystring };
  let query = initialQuery;
  const dependencyArray = [];
  console.log({ fromCity, toCity, limit, offset, orderBy, desc, minPrice, maxPrice });
  if (fromCity) {
    dependencyArray.push(fromCity);
    query += ` AND departure_city_id=$${dependencyArray.length}`;
  }
  if (toCity) {
    dependencyArray.push(toCity);
    query += ` AND arrival_city_id=$${dependencyArray.length}`;
  }
  if (city) {
    dependencyArray.push(city);
    query += ` AND city_id=$${dependencyArray.length}`;
  }
  if (minPrice && minPrice !== "null") {
    dependencyArray.push(minPrice);
    query += ` AND price>=$${dependencyArray.length}`;
  }
  if (maxPrice && maxPrice !== "0" && maxPrice !== "null") {
    dependencyArray.push(maxPrice);
    query += ` AND price<=$${dependencyArray.length}`;
  }
  if (groupBy) {
    query += ' GROUP BY h.id,c.name,p1.image,p2.id';
  }
  if (orderBy && columnNames.includes(orderBy)) {
    query += ` ORDER BY ${orderBy}`;
    if (desc) {
      query += ` DESC`;
    }
  }
  if (limit) {
    dependencyArray.push(limit);
    query += ` LIMIT $${dependencyArray.length}`;
  }
  if (offset) {
    dependencyArray.push(offset);
    query += ` OFFSET $${dependencyArray.length}`;
  }
  query += ';';
  return { text: query, values: dependencyArray };
};

export default queryConstructor;