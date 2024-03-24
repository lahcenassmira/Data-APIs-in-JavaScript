var map = L.map('map').setView([0, 0], 1); // 51.505 => latitude , -0.09 => longitude , 13 => zoom level 
 
const title = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
} ).addTo(map);
const issIcon = L.icon({
    iconUrl: 'ISS.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
    
});

const marker =    L.marker([0, 0], {icon: issIcon}).addTo(map);
const lat = document.querySelector('.lat');
const long = document.querySelector('.long');
let firstTime = true;
const apiSsi = 'https://api.wheretheiss.at/v1/satellites/25544';
async function getData() {
    const response = await fetch(apiSsi);
    const data = await response.json();
    const { latitude, longitude } = data;
    // console.log(data);

    marker.setLatLng([latitude, longitude]);
   if(firstTime){
    map.setView([latitude, longitude], 2);
    firstTime = false;
   }
    lat.textContent = latitude;
    long.textContent = longitude;

}
setInterval(getData, 1000)
