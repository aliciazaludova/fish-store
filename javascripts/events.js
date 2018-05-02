// Filter fish that are 'on sale'
// don't need to pass event into this function because every time it's clicked it will do same thing. no dom traversal. if it doesn't have class of on-sale we want to hide it. .toggle is better than .hide so you can still see not on sale fish if you click button again
// there was bug: if nonsale fish is in basket and you click the toggle button it hides so we put #available here in addition to .fish
// a space is necessary between the id and the class because they are not on the same thing. no space would mean they are on same element
const filterFish = () => {
  $('#available .fish').not('.on-sale').toggle();
};

// function to change the button text
// 1. get the button with the ID show-sale
// 2. set the text inside it with .text
// 3. pass a function into it
const changeButtonText = () => {
  // we have to pass in an index first before text
  $('#show-sale').text((i, text) => {
    let returnText = '';
    // grab text out of show-sale button
    // if the text is 'show sale fish' we want it to show all fish
    if (text === 'Show Sale Fish') {
      returnText = 'Show All';
    } else {
      returnText = 'Show Sale Fish';
    };
    return returnText;
  });
};

// Add fish to 'Basket'

// ask yourself does this function need to know about the other functions around it. on a form submit you'll always grab the value of the input.

// pass in button and need to let it know you're talking about the fish card which is more of a parent so*
const moveToCart = (e) => {
  // .closest loops over every parent so we need to tell ig ('.fish)
  const fishCard = $(e.target).closest('.fish');
  console.log('fishCard', fishCard);
  $('#snagged').append(fishCard);

  // *passing in $('btn') won't work
};

const bindEvents = () => {
  // can avoid using .on because it's on the index.html
  $('button.add').on('click', moveToCart);

  // going to write a function called filterFish so pass it through now
  $('button#show-sale').click(() => {
    changeButtonText();
    filterFish();
  });
};

module.exports = {
  bindEvents,
};
