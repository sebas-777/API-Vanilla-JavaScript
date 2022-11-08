let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", ()=> {
    console.log("button clicked") 
    sendApiRequest()
}) 

async function sendApiRequest(){ 
    let API_KEY = "QIKdc7fAAoR7iEawSRI0cgGBYluASEaV4vqRW5sa"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response) 
    let data = await response.json()
    console.log(data)
    useApiData(data)
} 

function useApiData(data){
document.querySelector("#content").innerHTML += data.explanation
document.querySelector("#content").innerHTML += `<img src="${data.url}">`
}