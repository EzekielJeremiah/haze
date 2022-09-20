let elem = document.getElementById("element");
let code = document.getElementById("code");
let inputs = document.querySelectorAll(".sliders input");

inputs.forEach((inp) => inp.addEventListener ("input", generateShadow));

function generateShadow(){
	let hshadow = document.getElementById ("h-shadow").value;
	let vshadow = document.getElementById("v-shadow").value;
	let blurRadius = document.getElementById("blur-radius").value;
	let spreadRadius = document.getElementById("spread-radius").value;
	let shadowColor = document.getElementById("shadow-color").value;
	let shadowColorOpacity = document.getElementById("shadow-color-opacity").value;
	let shadowInset = document.getElementById("shadow-inset").checked;

	

	let boxShadow = shadowInset ? `inset ${hshadow}px ${vshadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowColorOpacity)}` : `${hshadow}px ${vshadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowColorOpacity)}`;

elem.style.boxShadow = boxShadow;
code.textContent = `box-shadow: ${boxShadow};`;
	// console.log(boxShadow);
	// console.log(hexToRgba(shadowColor, shadowColorOpacity));
}

function hexToRgba(shadowColor, shadowColorOpacity){
	let r = parseInt(shadowColor.substr(1, 2), 16);
	let g = parseInt(shadowColor.substr(3, 2), 16);
	let b = parseInt(shadowColor.substr(5, 2), 16);

	return `rgba(${r}, ${g}, ${b}, ${shadowColorOpacity})`;
}
function copyCode() {
	code.select();
	document.execCommand("copy");
	alert("code copied to clipboard");
}


window.onload = generateShadow();