var map = L.map('map', { zoomControl: false }).setView([43.663578981926236, -79.40242948255697], 15);
// map.zoomControl.setPosition('bottomright');


// https://wiki.openstreetmap.org/wiki/Tiles
map.addLayer(new L.TileLayer('http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    {attribution:'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}
    ));

// Add markers
var orangeMarker = L.icon({
    iconUrl: '../images/home/marker-orange.png',
    iconSize: [43, 43], // size of the icon
});
L.marker([43.66752142844879, -79.39981081185977], {icon: orangeMarker}).addTo(map);

var blueMarker = L.icon({
    iconUrl: '../images/home/marker-blue.png',
    iconSize: [43, 43], // size of the icon
});
L.marker([43.660982850893895, -79.40498666246725], {icon: blueMarker}).addTo(map);

var redMarker = L.icon({
    iconUrl: '../images/home/marker-red.png',
    iconSize: [43, 43], // size of the icon
});
L.marker([43.67057330763631, -79.40615798644176], {icon: redMarker}).addTo(map);

