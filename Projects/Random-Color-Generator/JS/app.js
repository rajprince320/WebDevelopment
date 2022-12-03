const getColor = () => {
	// Hex Code
	const randomNumber = Math.floor(Math.random() * 16777215);
	const randomeCode = "#" + randomNumber.toString(16);
	document.body.style.backgroundColor = randomeCode;
	document.getElementById("color-code").innerHTML = randomeCode;
	document.getElementById("color-code").style.color = randomeCode;

	// To Copy code to clipboard
	navigator.clipboard.writeText(randomeCode);
};
// Envent call
document.getElementById("btn").addEventListener("click", getColor);
// init call
getColor();
