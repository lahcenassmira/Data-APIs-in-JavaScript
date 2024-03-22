

const apiSsi = "https://api.wheretheiss.at/v1/satellites/25544";
async function getData(){
    const response = await fetch(apiSsi);
    const data = response.json();
    console.log(data);
}
getData();