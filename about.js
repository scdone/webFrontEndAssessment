console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Thank you, your form has been submitted!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function duckCompliment(event) {
	event.preventDefault()
	alert(`You're someone's reason to smile.`)
}

let ducky = document.querySelector('img');
	ducky.addEventListener('mouseover',duckCompliment)
