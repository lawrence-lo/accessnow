var map = L.map('map', { zoomControl: false }).setView([43.663578981926236, -79.40242948255697], 15);
// map.zoomControl.setPosition('bottomright');


// https://wiki.openstreetmap.org/wiki/Tiles
map.addLayer(new L.TileLayer('http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    {attribution:'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}
    ));

// Add markers
var greenMarker = L.icon({
    iconUrl: './images/home/marker-green.png',
    iconSize: [39.95, 59.13], // size of the icon
    iconAnchor: [20, 59.13],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
});
L.marker([43.66752142844879, -79.39981081185977], {icon: greenMarker}).addTo(map);

var redMarker = L.icon({
    iconUrl: './images/home/marker-red.png',
    iconSize: [39.95, 59.13], // size of the icon
    iconAnchor: [20, 59.13],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
});
L.marker([43.67057330763631, -79.40615798644176], {icon: redMarker}).addTo(map);
L.marker([43.660982850893895, -79.40498666246725], {icon: greenMarker}).addTo(map);

var locationMarker = L.icon({
    iconUrl: './images/home/myLocation.png',
    iconSize: [126, 126], // size of the icon
    iconAnchor: [63, 126],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
});
L.marker([43.666850038854186, -79.40402299629693], {icon: locationMarker}).addTo(map);
