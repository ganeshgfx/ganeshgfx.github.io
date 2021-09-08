// import './style.css';
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js'

let camera, controls, scene, renderer;

//let log = document.querySelector('#log').innerHTML;
let dLog = document.querySelector("#log");

let pSphere;
let playerPos = new THREE.Vector2;
var orb = document.querySelector('#orb');
// let centerX = orb.offsetLeft + orb.offsetWidth / 2;
// let centerY = orb.offsetTop + orb.offsetHeight / 2;
let centerX = orb.getBoundingClientRect().x + orb.getBoundingClientRect().width / 2;
let centerY = orb.getBoundingClientRect().y + orb.getBoundingClientRect().height / 2;
let rad = 0;
let deg = 0;
let orbTouched = false,keypress = false;
let wasd=[false,false,false,false];//WASD,
let W=0,A=1,S=2,D=3;
//let wasd = {w=false,a=false,s=false,d=false};

var x = 0,  //initial x
    y = 0,  // initial y
    velY = 0,
    velX = 0,
    speed = 0.5, // max speed
    friction = 0.85, // friction
    key = '',
	keys = false;
fullSrc();
init();
//render(); // remove when using next line for animation loop (requestAnimationFrame)
animate();
function fullSrc(){
	var el = document.documentElement
    , rfs = // for newer Webkit and Firefox
           el.requestFullscreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
        || el.msRequestFullscreen
;
if(typeof rfs!="undefined" && rfs){
  rfs.call(el);
} else if(typeof window.ActiveXObject!="undefined"){
  // for Internet Explorer
  var wscript = new ActiveXObject("WScript.Shell");
  if (wscript!=null) {
     wscript.SendKeys("{F11}");
  }
}
}
function init() {

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xcccccc);
	scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

	renderer = new THREE.WebGLRenderer({
		antialias: false
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.set(400, 200, 0);

	// controls

	// controls = new OrbitControls( camera, renderer.domElement );
	// controls.listenToKeyEvents( window ); // optional

	//controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

	// controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
	// controls.dampingFactor = 0.05;

	// controls.screenSpacePanning = false;

	// controls.minDistance = 100;
	// controls.maxDistance = 500;

	// controls.maxPolarAngle = Math.PI / 2;

	// world

	const geometry = new THREE.CylinderGeometry(0, 10, 30, 4, 1);
	const material = new THREE.MeshPhongMaterial({
		color: 0xffffff,
		flatShading: true
	});

	for (let i = 0; i < 500; i++) {

		const mesh = new THREE.Mesh(geometry, material);
		mesh.position.x = Math.random() * 1600 - 800;
		mesh.position.y = 0;
		mesh.position.z = Math.random() * 1600 - 800;
		mesh.updateMatrix();
		mesh.matrixAutoUpdate = false;
		scene.add(mesh);

	}

	const pGeometry = new THREE.SphereGeometry(5, 32, 32);
	const pMaterial = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		flatShading: true
	});
	pSphere = new THREE.Mesh(pGeometry, pMaterial);
	scene.add(pSphere);
	pSphere.position.x = 0;
	pSphere.position.y = 0;
	pSphere.position.z = 0;

	// lights

	const dirLight1 = new THREE.DirectionalLight(0xffffff);
	dirLight1.position.set(1, 1, 1);
	scene.add(dirLight1);

	const dirLight2 = new THREE.DirectionalLight(0x002288);
	dirLight2.position.set(-1, -1, -1);
	scene.add(dirLight2);

	const ambientLight = new THREE.AmbientLight(0x222222);
	scene.add(ambientLight);

	//

	window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);

}

camera.position.x = 0;
camera.rotation.x = 4.69;
camera.position.y = 90;
camera.position.z = 0;

// camera.position.x = 0;
// camera.rotation.x = 0;
// camera.position.y = 0;
// camera.position.z = 0;


// document.querySelector('#add').addEventListener("click", function fun(){
// 	pX+=1;
// });
// document.querySelector('#sub').addEventListener("click", function fun(){
// 	pX-=1;
// });
//controls
orb.addEventListener('touchmove', function (e) {
	//console.log(e.touches[0].clientX+" - "+e.touches[0].clientY);
	let delta_x = e.touches[0].clientX - centerX
	let delta_y = e.touches[0].clientY - centerY
	rad = (Math.atan2(delta_y, delta_x));
	//deg = rad * 360 / Math.PI
	//console.log(deg);
	orbTouched = true;
}, false);

orb.addEventListener('touchend', function (e) {
	orbTouched = false;
}, false);


function animate() {


	requestAnimationFrame(animate);
	//dLog.innerHTML = velY+""+velX;

	if(wasd[W]){
		//y-=speed;
		if (velY > -speed) {
            velY--;
        }
   	}
	if (wasd[S]) {
		if (velY < speed) {
            velY++;
        }
	}
	if (wasd[D]) {
		// x+=speed;
		if (velX < speed) {
            velX++;
        }
	}
	if (wasd[A]) {
		//x-=speed;
		if (velX > -speed) {
            velX--;
        }
	}

	if (orbTouched) {
		velX += speed/3 * Math.cos(rad);
		velY += speed/3 * Math.sin(rad);

		//playerPos.x = x;
		//playerPos.y = y;
		//playerMovement(playerPos);
	}

	velY *= friction;
    y += velY;
    velX *= friction;
    x += velX;

	playerPos.x = x;
	playerPos.y = y;

	playerMovementKey(playerPos);


	// if (orbTouched) {
	// 	x += speed * Math.cos(rad);
	// 	y += speed * Math.sin(rad);

	// 	playerPos.x = x;
	// 	playerPos.y = y;
	// 	playerMovement(playerPos);
	// }

    //bounds checking
    // if (x >= 500) {
    //     x = 500;
    // } else if (x <= 5) {
    //     x = 5;
    // }

    // if (y > 500) {
    //     y = 500;
    // } else if (y <= 5) {
    //     y = 5;
    // }


	// if (keypress){
	// 	playerMovementK(playerPos);
	// }
	//playerMovementK(playerPos);
	//document.querySelector('#log').innerHTML=""+xr;

	//camera.rotation.y += 0.004;
	// camera.rotation.z += 0.002;
	//controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
	render();

}
function playerMovement(pos){
	pSphere.position.x = pos.x;
	pSphere.position.z = pos.y;
	camera.position.x = pSphere.position.x;
	camera.position.z = pSphere.position.z;
}
function playerMovementKey(pos){
	pSphere.position.x = pos.x;
	pSphere.position.z = pos.y;
	camera.position.x = pSphere.position.x;
	camera.position.z = pSphere.position.z;
}
function render() {

	renderer.render(scene, camera);

}

// key events
//setTimeout(function () {
	document.body.onkeypress = function (e) {
		keydown(e);
	};
	function keydown(e) {
		//requestAnimationFrame(keydown);
		key = e.key;
		keys = true;
		
		if(e.key=='w')
			wasd[W]=true;
		if(e.key=='a')
			wasd[A]=true;
		if(e.key=='s')
			wasd[S]=true;
		if(e.key=='d')
			wasd[D]=true;

		//console.log(wasd);
	}
	document.body.addEventListener("keyup", function (e) {
		keys = false;
		//console.log(e.key);

		if(e.key=='w')
			wasd[W]=false;
		if(e.key=='a')
			wasd[A]=false;
		if(e.key=='s')
			wasd[S]=false;
		if(e.key=='d')
			wasd[D]=false;

	});
//}, 0);

