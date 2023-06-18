const request = require('request');
const fs = require('fs');
const readline = require('readline');

// function to fetch siberian breed description
const fetchBreedDescription = () => {
  // request to fetch breed description from API
  request ( "https://api.thecatapi.com/v1/breeds/search?q=sib", (error, response, body) => {
    if (error) {
      // print error and exit if one occurred
      console.log("Breed Not Found:", error.hostname);
      process.exit();
    } else {
      if (response.statusCode === 200) {
        // log the response body
        console.log(body);
      }
    }

  });
};

fetchBreedDescription();
//const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + searchTerm;

