 function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}


$(window).on('load', function(){
	$.getJSON('http://www.mocky.io/v2/5b0f7db53000000e001150a5')
	.done(function(data){
		console.log(data);
				$( ".destinations li" ).each(function( i ) {
			// var i = index;
  console.log( i + ": " + $( this ).text() );
  console.log(i);
  	// $('"#toggleCard' + i + '"').css("background-image", "url(" + url + ")");
  		// $('"#toggleCard' + i + '"').css("background-image", "url(" + url + ")");
  			var mix = data;
		url = mix[i].image;
		city = mix[i].city;
		description = mix[i].description;
		duration = mix[i].duration;
		time = mix[i].time;
		date = mix[i].date;
		var eventSelect = ('"#toggleCard' + i + '"');
		$(this).css("background-image", "url(" + url + ")");
});
		// var mix = data;
		// url = mix[i].image;
		// city = mix[0].city;
		// description = mix[0].description;
		// duration = mix[0].duration;
		// time = mix[0].time;
		// date = mix[0].date;
		// var eventSelect = ('"#toggleCard' + i + '"');

	



		$('#mixCity').append(city);
		// $('"#toggleCard' + i + '"').css("background-image", "url(" + url + ")");

		callback(data);
	})
		
		$(this).click(function(mix){
  	$('.singleEvent > .grid > li > h1').append(city);
  	$('.singleEvent > .grid > li > #description').append(description);
  	$('.singleEvent > .grid > li > #time').append(time);
  	$('.singleEvent > .grid > li > #duration').append(duration + "Hrs");
  	$('#singleImg').css("background-image", "url(" + url + ")");
  })
	
	 // var map = new ol.Map({
  //       target: 'map',
  //       layers: [
  //         new ol.layer.Tile({
  //           source: new ol.source.OSM()
  //         })
  //       ],
  //       view: new ol.View({
  //         center: ol.proj.fromLonLat([37.41, 8.82]),
  //         zoom: 4
  //       })
  //     });

	// .fail(function(){
 //  			//fail code here
 //  	})

});


function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}

var return_first;
function callback(response) {
  return_first = response;
  
  }
	
  console.log(return_first);





