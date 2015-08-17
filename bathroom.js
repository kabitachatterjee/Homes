var bathroomDictionary = {};

function fetchData() {
 var rawTemplate = $('#my-bathroom-template').html();
  $.get('https://homes.firebaseio.com/bathroom.json', function(items) {
    
    for (var i =0; i< items.length; i++) {
      var currentItem = items[i];
    
    var stampedTemplate = Mustache.render(rawTemplate,currentItem);
    $('#bathrooms-container').append(stampedTemplate);

    };
    
   buildDictionary(items);
    bindEventListeners();
 });
}

function bindEventListeners(){
$('.card').click(function(e){
var targetId = e.target.children[0].innerHTML;
      
      var info = (bathroomDictionary[targetId]);
      
      var rawTemplate = $('#lightbox-bathroom-template').html();
      console.log(rawTemplate);

      var stampedTemplate = Mustache.render(rawTemplate, info);
      console.log(stampedTemplate);
      $('#lightbox-bathroom').html(stampedTemplate);
      $('#lightbox-bathroom').fadeIn();
      $('#mask4').fadeIn();

      $('#mask4').click(function(e){
        $('#lightbox-bathroom').fadeOut();
        $('#mask4').fadeOut();

      });

    });
}

      


function buildDictionary(items) {
  
  for (var i = 0; i < items.length; i++) {
    var currentItem = items[i];
    bathroomDictionary[currentItem.detail] = currentItem;
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






