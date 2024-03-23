
const lat = document.querySelector('.lat');
const long = document.querySelector('.long');
const apiSsi = 'https://api.wheretheiss.at/v1/satellites/25544';
async function getData() {
    const response = await fetch(apiSsi);
    const data = await response.json();
    const { latitude, longitude } = data;
    console.log(data);
    lat.textContent = latitude;
    long.textContent = longitude;

}
getData();