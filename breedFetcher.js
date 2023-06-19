//Created by: Nathan Wiles
//LHL Module 2: Week 5 Assignment: Cats as a service.


// import request module
const request = require("request");

// get command line arguments
const args = process.argv.slice(2);

// function to fetch a breed description from the API
const fetchBreedDescription = (breed) => {
  // URL to fetch from
  const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;

  // request to fetch breed description from API
  request(URL, (error, response, body) => {
    // check for error
    if (error) {
      // print error and return if one occurred
      console.log("URL not found:", error.hostname);
      return;
    } else {
      // if no error, check if response is 200: OK
      if (response.statusCode === 200) {
        // convert the body to raw data
        const data = JSON.parse(body);
        // check if the breed was found
        if (data.length === 0) {
          console.log("Breed Not Found");
        }// log the data
        for (const obj of data) {
          console.log(obj.description);
        }
      }
    }
  });
};

// call the function on each command line argument
for (const arg of args) {
  fetchBreedDescription(arg);
}
