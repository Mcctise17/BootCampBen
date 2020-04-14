/*global require, describe, it */

let pow = require('../src/pow');
let assert = require('assert');

describe('pow', function() {
    describe('power of zero', () => {
        it('should return one for 123', () => {
            assert.equal(1, pow(123, 0));
        });
        it('should return one for 45', () => {
            assert.equal(1, pow(45, 0));
        });
        it('should return one for 20', () => {
            assert.equal(1, pow(20, 0));
        });
    });

    describe('power of one', () => {
        it('should return the 45 whenever num is 45 and power is 1', () => {
            assert.equal(45, pow(45, 1));
        });
        it('should return the 17 whenever num is 17 and power is 1', () => {
            assert.equal(17, pow(17, 1));
        });
    });

    describe('power greater than one', () => {
        it('should do the 1-12th power of 1-12', () => {
            for(let num=1; num < 12; num ++) {
                for (let power = 1; power < 12; power++) {
                    assert.equal(pow(num, power), Math.pow(num, power), num + "^" + power);
                }
            }
        });
    });
});