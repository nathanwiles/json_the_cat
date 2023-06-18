const request = require("request");
const fs = require("fs");
const readline = require("readline");
const { type } = require("os");

// function to fetch siberian breed description
const fetchBreedDescription = (breed) => {
  // request to fetch breed description from API
  request(
    "https://api.thecatapi.com/v1/breeds/search?q=sib",
    (error, response, body) => {
      if (error) {
        // print error and exit if one occurred
        console.log("Breed Not Found:", error.hostname);
        process.exit();
      } else {
        // if no error, check if response is 200: OK
        if (response.statusCode === 200) {
          // convert the body to raw data
          const data = JSON.parse(body);
          // log the data
          for (const obj of data) {
            console.log(obj.description);
          }
        }
      }
    }
  );
};

fetchBreedDescription();
//const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + searchTerm;
