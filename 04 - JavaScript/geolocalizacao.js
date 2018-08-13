function positionCallback(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var geolocation = new google.maps.LatLng(latitude, longitude);

    var mapOptions = {
        zoom: 18;
        center: geolocation;
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var div = document.getElementById("mapa");
    var map = new google.maps.Map(div, mapOptions);

    var marker = new google.maps.Marker({
        position: geolocation;
        map: map;
        title: "Você está aqui!";
    });
}

window.onload = function(){
    navigator.geolocation.getCurrentPosition(positonCallback);
}