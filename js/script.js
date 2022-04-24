// Question 1
let getRemainder = (a,b) => a % b;



// Question 2
// Unsure if placing onLoad() in the finally statement is semantically correct
// I tried to set a short timeout on the API call, to make the loader more visible, but couldn't figure out how
// I hope that what I have done is correct, and appreciate some feedback if it isn't 

const API = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=9eed3778776540cca7194974b2ac16ae"
const resultsContainer = document.querySelector(".results")

async function getGames() {

    try{
    
    const response = await fetch (API);

    const products = await response.json()

    let facts = products.results;

    resultsContainer.innerHTML = ""

    for (let i = 0; i < facts.length; i++) {
        if (i === 8) {
            break;
        }
        resultsContainer.innerHTML += `<div class="result"> 
                                        Name: ${facts[i].name}
                                        Rating: ${facts[i].rating}
                                        Tags: ${facts[i].tags.length}
                                        </div>`
    }
    } catch (error) {
        console.log(error)
        resultsContainer.innerHTML = displayError("An error occured while calling the api")
    } finally {
        onLoad()
    }
}

getGames()