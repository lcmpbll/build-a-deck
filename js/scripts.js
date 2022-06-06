$(document).ready(function() {

  const suits = ["clubs", "hearts", "spades", "diamonds"];
  const cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

  suits.forEach(function(suit){
    cards.forEach(function(card){
      $("ul#deck").append("<li>" + card + " of " + suit + "</li>");
    });
  });
});
