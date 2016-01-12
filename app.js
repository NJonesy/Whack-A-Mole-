
$(function(){


  var gamePlaying = false  
  var holes = $(".mole");
  var delay = 1000;
  var count = 0;
  var scoreBoard = $('li').click(function() { count++;
    $("#score").html("Whack count is: "+count); })

  var sound = new Audio ("pistol_gun_shot.mp3");

  $('#new_game').on("click", function(){
    $('li').each(function(i){
      $(this).fadeOut();
    }) 
  })   

  $('#play').on("click", function(){
    gamePlaying = true;
    setTimeout(function() {
      gamePlaying = false;
    }, 60000)
    fadeInRandom();
  }) 

  $('li').on("click", function() {
    scoreBoard;  
    clickSound();
    $(this).fadeOut(10); 
  })

  function clickSound(){
    $('li').click(function(){ 
      sound.play();   
    })
  } 
  
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

