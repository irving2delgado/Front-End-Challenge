var card = $('#mix');
var mixList = $.makeArray(card) ;

$(window).on('load', function(){
	$.getJSON('http://www.mocky.io/v2/5b0ec03d3200004c00c19c23')
	.done(function(data){
		console.log(data);
		var mix = data;

		const firstEvent = data[0];
		url = mix[0].image;
		city = mix[0].city;


		$('#mixCity').append(city);
		$("#card2").css("background-image", "url(" + url + ")");

		callback(data);
	})
	.fail(function(){
  			//fail code here
  	})

});

// $(" #toggleCard2").click(function(){
//   	$('.destinations').switchClass('destinations','hideCard');
//   	$('.').addClass('.hideCard');
//   });
function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}

var return_first;
function callback(response) {
  return_first = response;
  //use return_first variable here
  let $detail2 = $("#.detail2");
  let $card2 = $(".card2")

  // $("#toggleCard").click(function(){
  // if ($detail2.is(':hidden')){
  // 	$card2.hide();

  // }
	// $("li #toggleCard2").click(function(){
 //  	$('section > .singleEvent').removeClass('.hideCard');
 //  	$('section > .destinations').addClass('.hideCard');
 //  });
  console.log(return_first);
}




