// let searchButton = document.querySelector("#search")

// searchButton.addEventListener("click", ()=> {
//     console.log("button clicked") 
//     sendApiRequest()
// }) 

// async function sendApiRequest(){ 
//     let API_KEY = "QIKdc7fAAoR7iEawSRI0cgGBYluASEaV4vqRW5sa"
//     let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
//     console.log(response) 
//     let data = await response.json()
//     console.log(data)
//     useApiData(data)
// } 

// function useApiData(data){ 
// document.querySelector("#content").innerHTML += data.title
// document.querySelector("#content").innerHTML += data.explanation
// document.querySelector("#content").innerHTML += `<img src="${data.url}">`
// }

window.addEventListener('load',obtenerDatos);

function obtenerDatos(){
    let API_KEY = "QIKdc7fAAoR7iEawSRI0cgGBYluASEaV4vqRW5sa"
    let ruta = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}` 
   

    fetch(ruta)
    .then(respuesta => respuesta.json())
    .then(resultado => mostrarDatos(resultado))
} 

function mostrarDatos({date,explanation,media_type,title,url}) { 
    const titulo = document.querySelector('#titulo')
    titulo.innerHTML = title;
    const fecha = document.querySelector('#fecha');
    fecha.innerHTML = date;
    const descripcion = document.querySelector('#descripcion');
    descripcion.innerHTML = explanation;

    const multimedia = document.querySelector('#c_multimedia');
    if (media_type == 'video') { 
        multimedia.innerHTML = `<iframe src="${url} "></iframe>`;
        
    } else{
        multimedia.innerHTML = `<img src="${url}" alt="${url}">`
    }

} 




