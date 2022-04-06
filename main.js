// initialise the map box
mapboxgl.accessToken =
  "pk.eyJ1Ijoic25laGEwMDMiLCJhIjoiY2wxZGU4c3h0MGFveTNkcGJ6YTFrencyYyJ9.FB96Ubhif1VdysyrHe1jJQ";

let latitude 
let longitude 
let destination

$(document).ready(function(){
    alert("please allow the current location")
    initGeolocation()

})

$(function(){
    $("#navigate-button").click(function(){
        window.location.href=`ar_navigation.html?source=${latitude};${longitude}& destination=${destination.lat};${destination.lng}`
    })
})

function initGeolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(sucess)

    }
    else{
        alert("sorry browser is not able to fetch ")
    }
}

function sucess(position){

    latitude=position.coords.latitude
    longitude=position.coords.longitude

    //render the maps on a web page
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [latitude, longitude],
    zoom: 1,
  });
  
  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: { enableHighAccuracy: true },
      trackUserLocation: true,
    })
  );
  
  map.addControl(
    new MapboxDirections({ accessToken: mapboxgl.accessToken }),
    "top-left"
  )
  
  map.on("click",function(e){
      console.log(e)
      destination=e.lngLat
  })
  

}
