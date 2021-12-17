//FUNCTIONS

function getRec (event) {
    event.preventDefault()
    let possibleRecs = [`Joes Real BBQ`, `Barrio Queen`, `Culinary Dropout`, `Flancer's`, `El Charro`, `Blue Adobe Grill`, `Rosa's`, `Thirsty Lion`, `Backyard Taco`]
    let rec = possibleRecs[Math.floor(Math.random()*possibleRecs.length)];
    alert(`Go eat at ${rec}!`)
}






//EVENT LISTENERS

document.querySelector(`#restuarantBtn`).addEventListener('click',getRec)