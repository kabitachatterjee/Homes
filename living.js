var livingDictionary = {};

function fetchData() {
 var rawTemplate = $('#my-template').html();
 console.log(rawTemplate);
  $.get('https://homes.firebaseio.com/living.json', function(items) {
    
    for (var i =0; i< items.length; i++) {
      var currentItem = items[i];
      console.log(currentItem);
    var stampedTemplate = Mustache.render(rawTemplate,currentItem);
    //console.log(stampedTemplate);
    $('#cards-container').append(stampedTemplate);

    };
    
   buildDictionary(items);
   bindEventListeners();
 });
}

function bindEventListeners(){
$('.card').click(function(e){
var targetId = e.target.children[0].innerHTML;
      
      var info = (livingDictionary[targetId]);
      
      var rawTemplate = $('#lightbox-living-template').html();
      //console.log(rawTemplate);

      var stampedTemplate = Mustache.render(rawTemplate, info);
      //console.log(stampedTemplate);
      $('#lightbox-living').html(stampedTemplate);
      $('#lightbox-living').fadeIn();
      $('#mask3').fadeIn();

      $('#mask3').click(function(e){
        $('#lightbox-living').fadeOut();
        $('#mask3').fadeOut();

      });

    });
}

      


function buildDictionary(items) {
  
  for (var i = 0; i < items.length; i++) {
    var currentItem = items[i];
    livingDictionary[currentItem.detail] = currentItem;
  }
 
}

fetchData();

$('.gallery > div:gt(0)').hide();

setInterval(function() { 
  $('.gallery > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.gallery');
},  3000);


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



      


