//FUNCTIONS

function favColorBtn (event) {
    event.preventDefault();
    alert(`My favorite color is blue!`)
}

function favPlaceBtn (event) {
    event.preventDefault()
    alert(`My favorite place is La Jolla, CA!`)
}

function favRitualBtn (event) {
    event.preventDefault()
    alert(`My favorite ritual is journaling with my partner every week <3`)
}



//EVENT LISTENERS
document.querySelector(`#colorBtn`).addEventListener('click',favColorBtn)

document.querySelector(`#placeBtn`).addEventListener('click', favPlaceBtn)

document.querySelector(`#ritualBtn`).addEventListener('click',favRitualBtn)



