const loadFishes = require('./fishes');

// success function
// we will console log for now to require acceptance criteria
const whenFishesLoad = (data) => {
  console.log('data', data);
};

// error function
const whenFishesDontLoad = (error) => {
  console.error('error', error);
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesDontLoad);
};

// we want to call fishes from main so export
module.exports = initializer;
