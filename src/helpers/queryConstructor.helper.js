const queryConstructor = (initialQuery, querystring) => {
  const { fromCityId, toCityId, limit, offset } = { ...querystring };
  let query = initialQuery;
  const dependencyArray = [];

  if (fromCityId) {
    dependencyArray.push(fromCityId);
    query += ` AND departure_city_id=$${dependencyArray.length}`;
  }
  if (toCityId) {
    dependencyArray.push(toCityId);
    query += ` AND arrival_city_id=$${dependencyArray.length}`;
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