const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("#fetchBreedDescription", () => {
  it ("returns a string which describes a breed, via a callback", (done) => {
    fetchBreedDescription("Siberian", (error, description) => {
      // we expect no error for this scenario
      assert.equal(error, null);
      // compare returned description
      const expectedDescription = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(description.trim(), expectedDescription);
      done();
    });
  });
  it ("returns an error message if the breed is not found", (done) => {
    fetchBreedDescription("Ibex", (error, description) => {
      // we expect no error for this scenario
      assert.equal(error, "Breed Not Found: Ibex");
      // compare returned description
      assert.equal(description, null);
      done();
    });
  });
});