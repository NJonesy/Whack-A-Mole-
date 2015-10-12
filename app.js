// Whack-A-Mole!!
// Game board - grid/table.
// Start Button.
// Series of mole buttons
// Hidden mole button - when user clicks start button, first mole button pops up.
// Mole is on screen for x amount of time. 
// When user clicks on mole, mole dissapears. 
// click on mole triggers timer on next mole.
// Whack counter, when mole gets clicked counter increases by one.
// Next mole button reappears after x seconds in a random place for slightly less time (bonus feature).
// This continues with the time each mole button is on the screen for decreasing (bonus feature), as 
// does the time between each button appearing.
// Game stops once mole disappears without being clicked. Alert pop up with 'play again?' option.

// Additonal features:

// Theme.
// Mole images.
// Whack sound.
// whack animation.

$(function(){
  console.log("hi");


//fade out buttons when play is clicked.
$('#new_game').on("click", function(){
  $('li').each(function(i){
    $(this).fadeOut();
    console.log("hello")
  }) 
})   
    
    var holes = $(".mole");
    var random = Math.floor((Math.random()*holes.length)+1);      

 // Make random mole visible   
$('#play').on("click", function(){
$(holes[random]).fadeIn();
  console.log("howdy")
  }) 

//when mole is clicked on it dissapears.
  $('li').on("click", function() {
    $(this).fadeOut(), fadeRandom();
  })
    
//mole then reappears randomly.    
  function fadeRandom() {
    var random = Math.floor((Math.random()*holes.length)+1);
    $(holes[random]).fadeIn();
    console.log(random)
    console.log(holes[random])
    console.log("holla!")
  
}

})
