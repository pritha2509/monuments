let latitude = 22.7868542, longitude = 88.3646296;

mapbox.accessToken = 

var map = new mapboxgl.Map ({
    container = 'map',
    style : 
    center : [longitude, latitude],
    zoom: 4
});

map.addControl (
    new MapboxGeocoder ({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
    })
);

var img1 = document.querySelector("#amber")

var marker1 = new mapboxgl.Marker ({
    Element : img1
})
    .setLngLat([78.342785, 22.546170]
        .addTo(map)) ;
        
var img2 = document.querySelector("#gateway")
var marker2 = new mapboxgl.Marker ({
    element : img2
})
    .setLngLat([78.342785, 22.546170]
    .addTo(map));

var img3 = document.querySelector("#gate")
var marker3 = new mapboxgl.Marker ({
    element: img3
})

    .setLngLat([78.342785, 22.546170]
        .addTo(map));

var img4 = document.querySelector("#lotus")
var marker4 = new mapboxgl.Marker({
    element: img4
})
        .setLngLat([78.342785, 22.546170]
            .addTo(map));

var img5 = document.querySelector("#victoria")
var marker5 = new mapboxgl.Marker({
    element: img5
})

    .setLngLat([78.342785, 22.546170]
    .addTo(map));
