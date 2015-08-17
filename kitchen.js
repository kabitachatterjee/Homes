

var kitchenDictionary = {};

function fetchData() {
 var rawTemplate = $('#my-kitchen-template').html();
  $.get('https://homes.firebaseio.com/kitchen.json', function(items) {
    
    for (var i =0; i< items.length; i++) {
      var currentItem = items[i];
      //console.log(currentToy);
    var stampedTemplate = Mustache.render(rawTemplate,currentItem);
    //console.log(stampedTemplate);
    $('#kitchen-container').append(stampedTemplate);

    };
    
   buildDictionary(items);
   bindEventListeners();
 });
}

function bindEventListeners(){
$('.card').click(function(e){
var targetId = e.target.children[0].innerHTML;
      
      var info = (kitchenDictionary[targetId]);
      
      var rawTemplate = $('#lightbox-kitchen-template').html();
      console.log(rawTemplate);

      var stampedTemplate = Mustache.render(rawTemplate, info);
      console.log(stampedTemplate);
      $('#lightbox-kitchen').html(stampedTemplate);
      $('#lightbox-kitchen').fadeIn();
      $('#mask2').fadeIn();

      $('#mask2').click(function(e){
        $('#lightbox-kitchen').fadeOut();
        $('#mask2').fadeOut();

      });

    });
}

      


function buildDictionary(items) {
  
  for (var i = 0; i < items.length; i++) {
    var currentItem = items[i];
    kitchenDictionary[currentItem.detail] = currentItem;
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




 

