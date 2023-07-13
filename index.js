const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "Gi5qRK7TJODgqsVNOa57bQ==1jVySH86i16r328q";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getJoke(){
    try {
        const response = await fetch(apiURL, options);
        const data = await response.json();

        //console.log(data[0].joke);
        joke_text = data[0].joke;
        jokeEl.innerText = joke_text

    } catch (error) {
        jokeEl.innerText = "An error happened, try asgain later..."
    }
    
}

btnEl.addEventListener("click", getJoke)

