var doPassAnimation = true;

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
		//complete: particalse,
	});
}
let wrongCount = 0;
const goButton = document.getElementById("goButton");
goButton.addEventListener("click", function () {
	text = passW.value;
	if (
		stringToHash(text) == -1535301969 ||
		stringToHash(text) == -1278472325 ||
		stringToHash(text) == 1906569124 ||
		stringToHash(text) == 1585205915 ||
		stringToHash(text) == 1585205915 ||
		stringToHash(text) == 593835921
	) {
		document.getElementById("hintDiv").style = "display:none";
		var elements = document.getElementById("pass");
		//console.log(0);
		anime({
			targets: elements,
			scale: 2,
			opacity: 0,
			//complete: particalse,
		});
		anime({
			targets: goButton,
			scale: 2,
			opacity: 0,
			complete: function () {
				goButton.style = "display:none";

				particalse();
			},
		});
	} else {
		wrongCount++;
		if (wrongCount > 2) {
			document.getElementById("hintDiv").style = "display:block;";
		}
		angle = 10;
		anime({
			targets: document.getElementById("pass"),
			keyframes: [
				{
					rotate: angle,
				},
				{
					rotate: -angle,
				},
				{
					rotate: angle,
				},
				{
					rotate: -angle,
				},
				{
					rotate: angle,
				},
				{
					rotate: -angle,
				},
				{
					rotate: angle,
				},
				{
					rotate: -angle,
				},
				{
					rotate: 0,
				},
			],
			duration: 696.9,

			//complete: hidePass,
		});
	}
});

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
		if (doPassAnimation) passW.placeholder = getPlaceText(placeholder);

		checkInput();
	}, textSpeed);
}

requestAnimationFrame(checkInput);

const emojArray = ["💖", "🧡", "💛", "💚", "💙", "💜", "💝"];

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
	document.getElementById("pass").style = "display: none";
	partiFunction2();
}

const partiCount = 40;

const scaleFactor = 2.5;

const maxScaleY = window.innerHeight / scaleFactor;
const minScaleY = -window.innerHeight / scaleFactor;

const maxScaleX = window.innerWidth / scaleFactor;
const minScaleX = -window.innerWidth / scaleFactor;

const maxSize = 5;

//particalse();
function partiFunction2() {
	anime({
		targets: document.getElementById("msg"),
		keyframes: [
			{
				opacity: 0,
			},
			{
				opacity: 100,
			},
		],
		duration: 10000,

		//complete: hidePass,
	});
	partis.forEach((element) => {
		loading(false);
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
					// opacity: 0,
					translateX: function () {
						if (anime.random(0, 1) == 0) {
							0;
						} else {
							maxScaleX;
						}
					},
					translateY: function () {
						if (anime.random(0, 1) == 0) {
							0;
						} else {
							maxScaleY;
						}
					},
					scale: function () {
						return anime.random(1, 10);
					},
				},
				{
					scale: 9,
					complete: function () {
						//console.log(1);
					},
				},
				{
					opacity: 0,
					translateX: 0,
					translateY: 0,
					scale: 1,
				},
			],
			// loop: true,
			// direction: "alternate",
			easing: "easeInOutQuad",
			duration: function () {
				return anime.random(500, 1000);
			},
			complete: function () {
				//loading(true);
			},
		});
	});
	//loading(true);
}
let degri = 0;
let el = document.getElementById("loading");
let anim = anime({
	targets: el,
	keyframes: [
		{
			rotate: 360,
		},
		{
			rotate: 360,
		},
		{
			rotate: 360,
		},
		{
			rotate: 360,
		},
		{
			rotate: 360,
		},
		{
			rotate: 360,
		},
	],
	//scale: 1.5,
	duration: function () {
		return anime.random(500, 1000);
	},
	//easing: "spring(10, 20, 10, 20)",
	easing: "linear",
	//direction: "alternate",
	//loop: true,
});
//anim.pause();
function loading(show) {
	if (show) {
		el.style = "display: flex";
		anim.restart();
	} else {
		el.style = "display: none";
		anim.pause();
	}
}
loading(false);

function stringToHash(data) {
	var string = (data + "").toLocaleLowerCase();
	var hash = 0;

	if (string.length == 0) return hash;

	for (i = 0; i < string.length; i++) {
		char = string.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash = hash & hash;
	}

	return hash;
}
