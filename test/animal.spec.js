/*global require, describe, it */

let animal = require('../src/animal');
let assert = require('assert');

describe('animal', function() {

    describe('chicken', function() {
        let chicken = animal.getChicken();
        it('should cluck', function() {
            let sound = chicken.vocalize();
            assert.equal("cluck", sound);
        });
    });

    describe('dog', function() {
        let dog = animal.getDog();
        it('should return -1 when the value is not present', function() {
            let sound = dog.vocalize();
            assert.equal("woof", sound);
        });
    });
});