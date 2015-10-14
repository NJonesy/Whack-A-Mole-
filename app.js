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
 
//Variable allowing control over whether the game is running or not.
var gamePlaying = false  
//variable getting elements with the class name "mole" (each button). Enables control over them, used for randomising. 
var holes = $(".mole");
//varable setting the maximum delay for fading the moles in an out, which can be manipulated.  
var delay = 1000;
//start setting for the score board.  
var count = 0;
//Score increasing by one, defined as a variable so that I could add it to the mole click function.
//Could have made it function scoreboard() and called it later.   
var scoreBoard = $('li').click(function() { count++;
  $("#score").html("Whack count is: "+count); })

var sound = new Audio ("pistol_gun_shot.mp3");


   //fade out buttons when play is clicked.
   $('#new_game').on("click", function(){
    $('li').each(function(i){
      $(this).fadeOut();
    }) 
  })   


  // Makes random mole visible when 'whack' is clicked. Game length set to 1 minute
  $('#play').on("click", function(){
    gamePlaying = true;
    setTimeout(function() {
      gamePlaying = false;
    }, 60000)
    fadeInRandom();
  }) 

  //when mole is clicked on it dissapears. Scoreboard function kicks in. ClickSound function called.
  $('li').on("click", function() {
    scoreBoard;  
    clickSound();
    $(this).fadeOut(10); 
  })

  //Click sound.
  function clickSound(){
    $('li').click(function(){ 
      sound.play();   
    })
  } 

  //Random mole appearance function. Mole then fades out with the delay time decreasing.   
  var fadeInRandom = function() {
    var random = Math.floor(Math.random()*(holes.length-1));
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

// $('new_game').on("click", function() { window.location.reload() })
// console.log("new game");    
// clearBoard();

// function clearBoard() {

//   $('li').each(function(i){
//     $(this).fadeOut();
//     console.log("hello")
//   })
//   } 




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
