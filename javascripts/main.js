// this is what runs your page. everything important gets called here.

const bindEvents = require('./events');
const initializer = require('./data');

initializer(); // build the xhr -- error and load funcs
bindEvents();  // calls events
