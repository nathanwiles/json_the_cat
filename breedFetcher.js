const request = require("request");

const args = process.argv.slice(2);
// function to fetch siberian breed description
const fetchBreedDescription = (breed) => {
  const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;
  // request to fetch breed description from API
  request(URL, (error, response, body) => {
    if (error) {
      // print error and exit if one occurred
      console.log("URL not found:", error.hostname);
      process.exit();
    } else {
      // if no error, check if response is 200: OK
      if (response.statusCode === 200) {
        // convert the body to raw data
        const data = JSON.parse(body);
        // log the data
        if (data.length === 0) {
          console.log("Breed Not Found");
        }
        for (const obj of data) {
          console.log(obj.description);
        }
      }
    }
  });
};

// call the function
for (const arg of args) {
  fetchBreedDescription(arg);
}
