const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const btn = document.getElementById('btn');

function setGradient() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = body.style.background;
}


function getRandomNumber() {
	randomNumber = Math.floor(Math.random()*hex.length);
	console.log(randomNumber);
	return randomNumber;
}

function colorPicker() {
	let hexColor = "#";
	let hexColor2 = "#";
	for (let i = 0; i <6; i++) {
		hexColor += hex[getRandomNumber()];
		hexColor2 += hex[getRandomNumber()];
	}
	body.style.background = `linear-gradient(to right, ${hexColor}, ${hexColor2})`;
	css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener('click', colorPicker);