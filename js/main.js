$(document).ready(function() {

var clicks = 1

  $('.plate').on('click', function(){
    if (clicks % 2 === 0){
      $('body').removeClass('dark').addClass('light');
      $('button').removeClass('off').addClass('on');
      $('.status').text("It's so bright in here!");
    } else {
      $('body').removeClass('light').addClass('dark');
      $('button').removeClass('on').addClass('off');
      $('.status').text('Hey, who turned off the lights?');
    }
    clicks += 1;
    console.log('clicked!');
  })

});



// The Switch
//
// Given the HTML and CSS as provided, use jQuery to hear the click of the switch and meet the following criteria:
//
// When someone hits the button in the switch, remove the current state class (on/off), and apply the opposite class (on/off)
// Swap the colors of the body's background and text by adding or removing the dark/light class
// Lastly, change the text in box to say "It's so bright in here!" when it's on, and "Hey, who turned off the lights?" when it's off
// Hints
//
// Start with small steps:
//
// Change the status text when the document is ready
// Add a click listener to the switch and incorporate the changes listed above in 'Your Assignment'
// Confirm the switch works
// How do we switch the classes back now?
// use an if statement to change the text
// use the jquery toggleClass function to change the light and dark backgrounds
// you should be able to click the switch many times and it should switch back and forth between light and dark modes
