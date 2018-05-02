// this is now called ajax request; replaces xhr request

const loadFishes = (successFunction, errorFunction) => {
  $.get('../db/fishes.json')  // go up one level to that of javascripts dir to get to db
    .done(successFunction)
    .fail(errorFunction); // this is actually a chain which is why semicolon only at end
};

module.exports = loadFishes;
