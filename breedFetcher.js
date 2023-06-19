//Created by: Nathan Wiles
//LHL Module 2: Week 5 Assignment: Cats as a service.

// import request module
const request = require("request");


// function to fetch a breed description from the API
const fetchBreedDescription = (breedName, callback) => {
  // URL to fetch from
  const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  // request to fetch breed description from API
  request(URL, (error, response, body) => {
    // check for error
    if (error) {
      // use callback to log error
      callback("URL not found:" + error.hostname, null);
    } else {
      // if no error, check if response is 200: OK
      if (response.statusCode === 200) {
        // convert the body to raw data
        const data = JSON.parse(body);
        // check if the breed was found
        if (data.length === 0) {
          callback("Breed Not Found:" + breedName, null);
        } else {
          // call the callback function with the data
          callback(null, data[0]["description"]);
        }
      }
    }
  });
};

// export the function
module.exports = { fetchBreedDescription };
