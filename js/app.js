const title = document.querySelector(".advice-title")
const advice = document.querySelector(".advice")
const btn = document.querySelector("button")

//API endpoint
const apiURL = "https://api.adviceslip.com/advice"

btn.addEventListener("click", () => {
    displayResult()
})

window.onload = () => {
    displayResult()
}

function displayResult() {
    fetch(apiURL)
        .then(response => {
            return response.json()
        })
        .then(object => {
            title.innerText = "advice #" + object.slip.id
            advice.innerText = object.slip.advice
        })
}