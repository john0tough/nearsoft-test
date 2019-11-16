const dogList = require('../data');

let dogs = [...dogList];
let adoptions = [];

module.exports = {
  dogs: {
    get: () => {
      return dogs;
    },

    delete: id => {
      dogs = dogs.filter(dog => dog.id !== id);
    },
  },

  adoption: {
    get: () => {
      return adoptions;
    },

    add: dog => {
      adoptions = [...adoptions, dog];
    },

    delete: id => {
      adoptions = adoptions.filter(dog => dog.id !== id);
    },
  },
};
