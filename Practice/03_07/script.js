/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const scansBag = {
    numberOfFilms: 2,
    uniform: false,
    numOfCTScans: 1,
    numOfMRIScans: 1,
    scanDimensions: {
        length: 25,
        breadth: 35
    },
    addMRI: function(numOfScans) {
        this.numOfMRIScans += numOfScans
    },
    addCT: function(numOfScans) {
        this.numOfCTScans += numOfScans
    }
}