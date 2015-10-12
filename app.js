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

  var gamePlaying = false;


  //fade out buttons when play is clicked.
  $('#new_game').on("click", function(){
    $('li').each(function(i){
      $(this).fadeOut();
      console.log("hello")
    }) 
  })   

  var holes = $(".mole");
  var delay = 1000;
  // var random = Math.floor((Math.random()*holes.length)+1);      

  // Make random mole visible   
  $('#play').on("click", function(){
    gamePlaying = true;
    setTimeout(function() {
      console.log("GAME ENDED");
      gamePlaying = false;
    }, 60000)
    fadeInRandom();
  }) 

  //when mole is clicked on it dissapears.
  $('li').on("click", function() {
    $(this).fadeOut(10); 
    
  })

  //mole then reappears randomly.    
  var fadeInRandom = function() {
    console.log("fadeInRandom", gamePlaying);
    var random = Math.floor(Math.random()*(holes.length-1));
    console.log(holes[random]);
    $(holes[random]).fadeIn(delay, function(){
      $(this).fadeOut(100);
      delay = delay - 5;
      console.log("see")
      if (gamePlaying === true) {
        return fadeInRandom();
      }
    });


  };
});

// var gamePlaying = true;

// function randomCall() {
//   setTimeout(function() {
//     console.log("HI THERE!");
//     if(gamePlaying) {
//       randomCall();
//     }
//   }, Math.floor(Math.random()*1000));
// }

// randomCall();

// setTimeout(function() {
//   gamePlaying = false;
// }, 10000);

// setInterval(function() {
//   delay = Math.floor(Math.random()*1000);
// }, delay);

//   function fadeOutRandom() {
//     var random = Math.floor((Math.random()*holes.length)+1);
//     $(holes[random]).fadeOut(setTimeout(function(){2000});
//     console.log(random)
//   }); 
// });
    // set timer that will fade out the cell displayed, pick the value corresponding to the current inde
//     // displayTimes[currentDisplayIndex] and set a timeout with this value, the 
//     console.log(holes[random])
//     console.log("holla!")
    
//   }

// })
