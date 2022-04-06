let coordinates={}

$(document).ready(function(){
    get_coordinates()

})

function get_coordinates(){
    let searchParams= new URLSearchParams(window.location.search)
    console.log(searchParams)
    if(searchParams.has("source")&&searchParams.has ("destination")){
        let source=searchParams.get("source")
        let destination=searchParams.get("destination")
        //coordinates.source_lat=

    }
    else{
        alert("coordinates are not selected")
        window.history.back()

    }
    
}