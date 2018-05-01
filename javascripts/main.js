// Filter fish that are "on sale"

// Add fish to "Basket"

// ask yourself does this function need to know about the other functions around it. on a form submit you'll always grab the value of the input. 

// pass in button and need to let it know you're talking about the fish card which is more of a parent so*
const moveToCart= (e) => {
  // .closest loops over every parent so we need to tell ig ('.fish)
  let fishCard = $(e.target).closest('.fish');
  console.log('fishCard', fishCard);
  $('#snagged').append(fishCard);

  // *passing in $('btn') won't work
}

// can avoid using .on because it's on the index.html
$('button.add').click(moveToCart);