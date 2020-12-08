$(document).ready(function() {

  $.getJSON('https://api.punkapi.com/v2/beers/1', function(data) {
        
        $(".product-img").attr("src", data[0].image_url);
        $(".tag-line").text(data[0].tagline);
        $(".product-detail").text(data[0].description);
        $(".volume").text(data[0].volume.value + " " + data[0].volume.unit);
        $(".by").text(data[0].contributed_by);

        for (var i = 0; i < data[0].food_pairing.length; i++) {
        	$(".pairs").append("<li>" + data[0].food_pairing[i] + "<li>");
        }


  });

});
