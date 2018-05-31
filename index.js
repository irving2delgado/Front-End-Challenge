//  ******************* Pages toggle button

$("#toggleBack").click(function(){
			$(".singleEvent > ul > li > h1").empty();
			$(".singleEvent > ul > li > p").empty();
	
});

function show(shown, hidden) {
  			document.getElementById(shown).style.display='block';
  			document.getElementById(hidden).style.display='none';
  			return false;
};	

// *************** Load JSON Data 

$(window).on('load', function(){
	$.getJSON('http://www.mocky.io/v2/5b10088930000010001153a2')
		.done(function(data){
			console.log(data);

		$( ".destinations li" ).each(function( i ) {			
  			console.log( i + ": " + $( this ).text() );
  			console.log(i);
  	
  			var mix = data;
			url = mix[i].image;
			city = mix[i].city;
			description = mix[i].description;
			duration = mix[i].duration;
			time = mix[i].time;
			date = mix[i].date;
			$(this).prepend(city);
			$(this).css("background-image", "url(" + url + ")");

		});

		callback(data);
		// I used this function to acces data from outside this Ajax request
		});
	
		// .fail(function(){
 		//  			//fail code here
 		//  	})

}); 

var mix;

function callback(response) {
  mix = response;
  i =0;
  
// ************************Mix Card 1 ****************************

  	$("#toggleCard1").click(function(){
  		i = 0;
  		$('.singleEvent > .grid > li > h1').append(mix[i].city);
  		$('.singleEvent > .grid > li > #description').append(mix[i].description);
  		$('.singleEvent > .grid > li > #time').append(mix[i].time);
  		$('.singleEvent > .grid > li > #duration').append(mix[i].duration + "Hrs");
  		$('#singleImg').css("background-image", "url(" + mix[i].image + ")");
  		x = mix[i].location_lng;
  		y = mix[i].location_lat;

  		var map = new ol.Map({
        	target: 'map',
        	layers: [
          	new ol.layer.Tile({
            	source: new ol.source.OSM()
          	})
        	],
       	 	view: new ol.View({
          	center: ol.proj.fromLonLat([x , y]),
          	zoom: 12
        	})
     	});
	});

	// ************************Mix Card 2 ****************************


	$("#toggleCard2").click(function(){
  		i = 1;
  		$('.singleEvent > .grid > li > h1').append(mix[i].city);
  		$('.singleEvent > .grid > li > #description').append(mix[i].description);
  		$('.singleEvent > .grid > li > #time').append(mix[i].time);
  		$('.singleEvent > .grid > li > #duration').append(mix[i].duration + "Hrs");
  		$('#singleImg').css("background-image", "url(" + mix[i].image + ")");
  		x = mix[i].location_lng;
  		y = mix[i].location_lat;

  		var map = new ol.Map({
        	target: 'map',
        	layers: [
          	new ol.layer.Tile({
            	source: new ol.source.OSM()
          	})
        	],
       	 	view: new ol.View({
          	center: ol.proj.fromLonLat([x , y]),
          	zoom: 12
        	})
     	});
	});	

	// ************************Mix Card 3 ****************************

	$("#toggleCard3").click(function(){
  		i = 2;
  		$('.singleEvent > .grid > li > h1').append(mix[i].city);
  		$('.singleEvent > .grid > li > #description').append(mix[i].description);
  		$('.singleEvent > .grid > li > #time').append(mix[i].time);
  		$('.singleEvent > .grid > li > #duration').append(mix[i].duration + "Hrs");
  		$('#singleImg').css("background-image", "url(" + mix[i].image + ")");
  		x = mix[i].location_lng;
  		y = mix[i].location_lat;

  		var map = new ol.Map({
        	target: 'map',
        	layers: [
          	new ol.layer.Tile({
            	source: new ol.source.OSM()
          	})
        	],
       	 	view: new ol.View({
          	center: ol.proj.fromLonLat([x , y]),
          	zoom: 12
        	})
     	});
	});	

	// ************************Mix Card 4 ****************************

	$("#toggleCard4").click(function(){
  		i = 3;
  		$('.singleEvent > .grid > li > h1').append(mix[i].city);
  		$('.singleEvent > .grid > li > #description').append(mix[i].description);
  		$('.singleEvent > .grid > li > #time').append(mix[i].time);
  		$('.singleEvent > .grid > li > #duration').append(mix[i].duration + "Hrs");
  		$('#singleImg').css("background-image", "url(" + mix[i].image + ")");
  		x = mix[i].location_lng;
  		y = mix[i].location_lat;

  		var map = new ol.Map({
        	target: 'map',
        	layers: [
          	new ol.layer.Tile({
            	source: new ol.source.OSM()
          	})
        	],
       	 	view: new ol.View({
          	center: ol.proj.fromLonLat([x , y]),
          	zoom: 12
        	})
     	});
	});	

	// ************************Mix Card 5 ****************************

	$("#toggleCard5").click(function(){
  		i = 4;
  		$('.singleEvent > .grid > li > h1').append(mix[i].city);
  		$('.singleEvent > .grid > li > #description').append(mix[i].description);
  		$('.singleEvent > .grid > li > #time').append(mix[i].time);
  		$('.singleEvent > .grid > li > #duration').append(mix[i].duration + "Hrs");
  		$('#singleImg').css("background-image", "url(" + mix[i].image + ")");
  		x = mix[i].location_lng;
  		y = mix[i].location_lat;

  		var map = new ol.Map({
        	target: 'map',
        	layers: [
          	new ol.layer.Tile({
            	source: new ol.source.OSM()
          	})
        	],
       	 	view: new ol.View({
          	center: ol.proj.fromLonLat([x , y]),
          	zoom: 12
        	})
     	});
	});	

	// ************************Mix Card 6 ****************************

	$("#toggleCard6").click(function(){
  		i = 5;
  		$('.singleEvent > .grid > li > h1').append(mix[i].city);
  		$('.singleEvent > .grid > li > #description').append(mix[i].description);
  		$('.singleEvent > .grid > li > #time').append(mix[i].time);
  		$('.singleEvent > .grid > li > #duration').append(mix[i].duration + "Hrs");
  		$('#singleImg').css("background-image", "url(" + mix[i].image + ")");
  		x = mix[i].location_lng;
  		y = mix[i].location_lat;

  		var map = new ol.Map({
        	target: 'map',
        	layers: [
          	new ol.layer.Tile({
            	source: new ol.source.OSM()
          	})
        	],
       	 	view: new ol.View({
          	center: ol.proj.fromLonLat([x , y]),
          	zoom: 12
        	})
     	});
	});	

	// ************************Mix Card 7 ****************************

	$("#toggleCard7").click(function(){
  		i = 6;
  		$('.singleEvent > .grid > li > h1').append(mix[i].city);
  		$('.singleEvent > .grid > li > #description').append(mix[i].description);
  		$('.singleEvent > .grid > li > #time').append(mix[i].time);
  		$('.singleEvent > .grid > li > #duration').append(mix[i].duration + "Hrs");
  		$('#singleImg').css("background-image", "url(" + mix[i].image + ")");
  		x = mix[i].location_lng;
  		y = mix[i].location_lat;

  		var map = new ol.Map({
        	target: 'map',
        	layers: [
          	new ol.layer.Tile({
            	source: new ol.source.OSM()
          	})
        	],
       	 	view: new ol.View({
          	center: ol.proj.fromLonLat([x , y]),
          	zoom: 12
        	})
     	});
	});

	// ************************Mix Card 8 ****************************

	$("#toggleCard8").click(function(){
  		i = 7;
  		$('.singleEvent > .grid > li > h1').append(mix[i].city);
  		$('.singleEvent > .grid > li > #description').append(mix[i].description);
  		$('.singleEvent > .grid > li > #time').append(mix[i].time);
  		$('.singleEvent > .grid > li > #duration').append(mix[i].duration + "Hrs");
  		$('#singleImg').css("background-image", "url(" + mix[i].image + ")");
  		x = mix[i].location_lng;
  		y = mix[i].location_lat;

  		var map = new ol.Map({
        	target: 'map',
        	layers: [
          	new ol.layer.Tile({
            	source: new ol.source.OSM()
          	})
        	],
       	 	view: new ol.View({
          	center: ol.proj.fromLonLat([x , y]),
          	zoom: 12
        	})
     	});
	});

};






