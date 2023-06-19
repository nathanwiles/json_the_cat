//Created by: Nathan Wiles
//LHL Module 2: Week 5 Assignment: Cats as a service.

const { fetchBreedDescription } = require("./breedFetcher");

// get command line arguments
const breedNames = process.argv.slice(2);

// call the function on each command line argument
for (const name of breedNames) {
  fetchBreedDescription(name, (error, description) => {
    // check for error
    if (error) {
      console.log("Error details:", error);
    } else {
      console.log(description);
    }
  });
}
