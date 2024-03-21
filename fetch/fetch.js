




console.log("about fetch");

// fetch('fetch.jpg')
// .then(response => {
//     console.log(response);
//     return response.blob();

// }).then(blob => {
//     console.log(blob);
//     document.querySelector("img").src = URL.createObjectURL(blob);
// }).catch(error => console.error(error));


//async / await

async function createObjectURL(){
  const response = await fetch('fetch.jpg');
  const blob = await response.blob();
  document.querySelector("img").src = URL.createObjectURL(blob);
}

createObjectURL().catch(error => console.error(error));;