// this is now called ajax request

const loadFishes = (successFunction, errorFunction) => {
  $.get('../db/fishes.json')  // go up through dist to get to db
    .done(successFunction)
    .fail(errorFunction); // this is actually a chain which is why semicolon only at end
};

module.exports = loadFishes;
