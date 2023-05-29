import citiesRepository from "../repositories/cities.repository.js";

const getCities = async () => {
  try {
    const result = await citiesRepository.getAllCities();
    return { status: 200, response: result.rows };
  } catch (error) {
    return { status: 500, response: { message: error.message } };
  }
};

const postCities = async (body) => {
  const { name: city_name, state_name, country_name } = body;
  try {
    let country = (await citiesRepository.getCountryByName(country_name)).rows[0];
    if (!country) {
      country = (await citiesRepository.insertCountry(country_name)).rows[0];
    }
    const countryId = country.countryId;
    let state = (await citiesRepository.getStateByName(state_name)).rows[0];
    if (!state) {
      state = (await citiesRepository.insertState(state_name, countryId)).rows[0];
    }
    const stateId = state.stateId;
    const result = (await citiesRepository.getCityByName(city_name, stateId)).rows[0];
    if (result) return { status: 409, response: { message: "Essa cidade já existe" } };
  } catch (error) {
    return { status: 500, response: { message: error.message } };
  }
};

export default {
  getCities,
  postCities
};