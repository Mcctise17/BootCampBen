/*global module */

class Animal {

    constructor(sound) {
        this.sound = sound;
    }

    vocalize() {
        return this.sound;
    }
}

module.exports = {
    getChicken: () => {
        return new Animal("cluck");
    },

    getDog: () => {
        return new Animal("woof");
    }
};