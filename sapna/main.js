function animeteInputS() {
	var elements = document.getElementById("pass");
	//console.log(1);
	anime({
		targets: elements,
		scale: 1.3,
	});
}

function animeteInputE() {
	var elements = document.getElementById("pass");
	//console.log(0);
	anime({
		targets: elements,
		scale: 1,
		complete: particalse,
	});
}

var count = 0;

function getPlaceText(value) {
	returnParsal = "";
	value.split("").forEach((item, i) => {
		if (i == count) {
			returnParsal += item.toUpperCase();
		} else {
			returnParsal += item;
		}
	});
	count++;
	if (count > value.length) {
		count = 0;
	}
	return returnParsal;
}

var passW = document.getElementById("passW");
var placeholder = "password";

let textSpeed = 200;

let doPass = true;
function checkInput() {
	setTimeout(function () {
		//console.log(1)
		passW.placeholder = getPlaceText(placeholder);

		checkInput();
	}, textSpeed);
}

requestAnimationFrame(checkInput);

const emojArray = ["👌", "🔴", "👾", "🦴", "🐵"];

let partis = [];
const particlseDiv = document.getElementById("particlse");
function particalse() {
	for (let index = 0; index < partiCount; index++) {
		partis.push("partis" + index);
	}
	partis.forEach((element) => {
		particlseDiv.innerHTML +=
			"<div class=" +
			element +
			">" +
			emojArray[Math.floor(Math.random() * emojArray.length + 0)];
		+"</div>";
		//console.log(element);
		partiFunction(partis);
	});
}

function partiFunction() {
	var elements = document.getElementById("pass");
	//console.log(0);
	anime({
		targets: elements,
		keyframes: [
			{
				scale: 20,
				opacity: 0,
			},
		],
		duration: 3000,
		//complete: hidePass,
	});
	hidePass();
}

function hidePass() {
	particlseDiv.style = "display: block";
	partiFunction2();
}

const partiCount = 30;

const scaleFactor = 2.5;

const maxScaleY = window.innerHeight / scaleFactor;
const minScaleY = -window.innerHeight / scaleFactor;

const maxScaleX = window.innerWidth / scaleFactor;
const minScaleX = -window.innerWidth / scaleFactor;

const maxSize = 5;

//particalse();
function partiFunction2() {
	partis.forEach((element) => {
		anime({
			targets: document.querySelector("#particlse > div." + element),
			keyframes: [
				{
					translateX: function () {
						return anime.random(minScaleX, maxScaleX);
					},

					translateY: function () {
						return anime.random(minScaleY, maxScaleY);
					},
					rotate: function () {
						return anime.random(-360, 360);
					},
					scale: function () {
						return anime.random(1, maxSize);
					},
					easing: "spring(1, 80, 10, 0)",
				},
				{
					translateX: function () {
						return anime.random(minScaleX, maxScaleX);
					},
					translateY: function () {
						return anime.random(minScaleY, maxScaleY);
					},
					rotate: function () {
						return anime.random(-360, 360);
					},
					scale: function () {
						return anime.random(1, maxSize);
					},
					easing: "spring(1, 80, 10, 0)",
				},
				{
					translateX: function () {
						return anime.random(minScaleX, maxScaleX);
					},
					translateY: function () {
						return anime.random(minScaleY, maxScaleY);
					},
					rotate: function () {
						return anime.random(-360, 360);
					},
					scale: function () {
						return anime.random(1, maxSize);
					},
					easing: "spring(1, 80, 10, 0)",
				},
				{
					translateX: function () {
						return anime.random(minScaleX, maxScaleX);
					},
					translateY: function () {
						return anime.random(minScaleY, maxScaleY);
					},
					rotate: function () {
						return anime.random(-360, 360);
					},
					scale: function () {
						return anime.random(1, maxSize);
					},
					easing: "spring(1, 80, 10, 0)",
				},
				{
					opacity: 0,
					scale: function () {
						return anime.random(1, 20);
					},
				},
			],
			// loop: true,
			// direction: "alternate",
			easing: "easeInOutQuad",
			duration: 5000,
		});
	});
}
