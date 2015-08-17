var bedroomDictionary = {};

function fetchData() {
 var rawTemplate = $('#my-bedroom-template').html();
  $.get('https://homes.firebaseio.com/bedroom.json', function(items) {
    
    for (var i =0; i< items.length; i++) {
      var currentItem = items[i];
    
    var stampedTemplate = Mustache.render(rawTemplate,currentItem);
    $('#bedrooms-container').append(stampedTemplate);

    };
    
   buildDictionary(items);
    bindEventListeners();
 });
}

function bindEventListeners(){
$('.card').click(function(e){
var targetId = e.target.children[0].innerHTML;
      
      var info = (bedroomDictionary[targetId]);
      
      var rawTemplate = $('#lightbox-bedroom-template').html();
      console.log(rawTemplate);

      var stampedTemplate = Mustache.render(rawTemplate, info);
      console.log(stampedTemplate);
      $('#lightbox-bedroom').html(stampedTemplate);
      $('#lightbox-bedroom').fadeIn();
      $('#mask1').fadeIn();

      $('#mask1').click(function(e){
        $('#lightbox-bedroom').fadeOut();
        $('#mask1').fadeOut();

      });

    });
}

      


function buildDictionary(items) {
  
  for (var i = 0; i < items.length; i++) {
    var currentItem = items[i];
    bedroomDictionary[currentItem.detail] = currentItem;
  }
 
}

fetchData();

var mq = window.matchMedia( "(max-width:480px)" );
if(mq.matches){
  $( "#main-navbar" ).hide();
  $( "#button-collaspe" ).show();
  $( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});
}
else {
  $( "#button-collapse").hide();
  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( "#main-navbar" ).show();
}






