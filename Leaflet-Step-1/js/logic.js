// Earthquakes GeoJSON URL variable
var earthquakesURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson"


// Perform a GET request to the query URL
d3.json(earthquakesURL).then(function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  // createFeatures(data.features);
  console.log(data.features)
  var earthquakes = L.geoJSON(data, {
    pointToLayer: function(data, latlng) {
      return L.circle(latlng, {
        radius: magSize(data.properties.mag),
        color: circlecolor(data.properties.mag),
        fillOpacity: 1
      });
    },
    onEachFeature: onEachFeature
  });
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  });


  var baseMaps = {
    "streetmap": streetmap
};
  // Create overlay objects
var overlayMaps = {
  "Earthquakes": earthquakes
};

var myMap = L.map('mymap', {
  center: [37.773972, -122.431297],
  zoom: 4.3
  // layers: [streetmap]
});
streetmap.addTo(myMap);

L.control.layers(baseMaps, overlayMaps).addTo(myMap);

});

 // Define function to create the circle radius based on the magnitude
 function magSize(magnitude) {
    return magnitude * 20000;
  }

  // Define function to set the circle color based on the magnitude
  function circlecolor(magnitude) {
    if (magnitude < 1) {
      return "#d0ff14"
    }
    else if (magnitude < 2) {
      return "#ffff31"
    }
    else if (magnitude < 3) {
      return "#ffcc33"
    }
    else if (magnitude < 4) {
      return "#ff9933"
    }
    else if (magnitude < 5) {
      return "#ff4433"
    }
    else {
      return "#ff3333"
    }
  }

// Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
 // var earthquakes = L.geoJSON(data, {
   // pointToLayer: function(data, latlng) {
     // return L.circle(latlng, {
       // radius: magSize(data.properties.mag),
       // color: circlecolor(data.properties.mag),
       // fillOpacity: 1
      //});
    //},
    //onEachFeature: onEachFeature
  //});




// Create the tile layer 



// var satelliteMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.satellite",
//     accessToken: API_KEY
// });

// var outdoorsMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.outdoors",
//     accessToken: API_KEY
// });

// Define baselayer objects




// Create overlay objects
//var overlayMaps = {
 //   "Earthquakes": earthquakes,
//};

//var myMap = L.map('mymap', {
  //  center: [37.773972, -122.431297],
    //zoom: 4.3,
    //layers: [satelliteMap, lightmap, earthquakes]
//});


//L.control.layers(baseMaps, overlayMaps).addTo(myMap);







 

// createMap()
