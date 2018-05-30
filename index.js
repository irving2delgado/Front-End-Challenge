var card = $('#mix');
var mixList = $.makeArray(card) ;

var return_first;
function callback(response) {
  return_first = response;
  //use return_first variable here
  $("#")
  console.log(return_first);
}


$(window).on('load', function(){
	$.getJSON('http://www.mocky.io/v2/5b0ec03d3200004c00c19c23')
	.done(function(data){
		console.log(data);
		var mix = data;

		const firstEvent = data[0];
		url = mix[0].image;
		city = mix[0].city;


		$('#mix').append(city);
		$("#mixImg").css("background-image", "url(" + url + ")");

		callback(data);
	})
	.fail(function(){
  			//fail code here
  	})

});



