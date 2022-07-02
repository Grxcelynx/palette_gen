let colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

document.querySelector("#clickMe").addEventListener("click", function () {
	let hexColor = "#";
	for (let i = 0; i < 6; i++) {
		hexColor += colorArray[randomValue()];
	}
	document.body.style.backgroundColor = hexColor;
	document.querySelector("#value").innerHTML = hexColor;
	document.querySelector("#value").style.color = hexColor;
});

function randomValue() {
	return Math.floor(Math.random() * colorArray.length);
}
