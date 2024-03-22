const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000"; //add this into the functions as the variable

function getAllNames() {
  return axios.get(`${BASE_URL}/constellations`)
    .then(response => {
      const constellations = response.data;
      const constellationNames = constellations.map(constellations => constellations.name);
      console.log(constellationNames);
      return constellationNames;
    })
    .catch(error => {
      console.error('Error fetching constellation names:', error);
      throw error;
    })
}

function getConstellationsByQuadrant(quadrant) {
  return axios.get(`${BASE_URL}/constellations`)
  .then(response => {
      const constellations = response.data;
      const filteredConstellations = constellations.filter(constellation => constellation.quadrant === quadrant);
      filteredConstellations.forEach(constellation => console.log([constellation]));
      return filteredConstellations;
  })
  .catch(error => {
      console.error('Error fetching constellations by quadrant:', error);
      throw error; // Optional: Re-throw the error for handling in higher layers
  });
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
