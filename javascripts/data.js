const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');
const bindEvents = require('./events');

// success function
// we will console log for now to require acceptance criteria
const whenFishesLoad = (data) => {
  console.log('data', data);
  $('#available').append(writeFishes(data.fishes)); // put into the available div. use append and not html so it doesn't overwrite
  // this is the domFunction that i'm passing fishes array to. this is printToDom
  bindEvents.bindEvents();  // this was called and required in main.js but it needs to happen here because the sequence -- domString, then...
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
