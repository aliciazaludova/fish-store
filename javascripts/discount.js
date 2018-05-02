const discount = 0.2;

const applySale = () => {
  // iterate through jQuery list of dom nodes
  // parameters-- i is expected by jQuery and fishCard is a placeholder
  // querying by class .on-sale
  $('.on-sale').each((i, fishCard) => {
    // will iterate through all fishCards

    const basePriceElem = $(fishCard).find('.price');
    // base price that comes back is html element
    // we need to get what's inside of it, will come back as text
    // need to do math on it to reduce to sale price
    const basePrice = basePriceElem.html() * 1;
    // .toFixed sets newPrice to two decimals
    const newPrice = (basePrice * (1 - discount)).toFixed(2);
    // this will be .8 now. use setter version of .html
    basePriceElem.html(newPrice);
  });
};

// need to require this in data.js because that is where success func is

module.exports = applySale;
// we want to call it after dom is printed
