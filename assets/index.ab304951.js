import {
	S as e,
	P as n,
	W as t,
	T as o,
	M as i,
	a,
	b as s,
	A as r,
} from "./vendor.e10acb6c.js";
var d = document.createElement("canvas");
d.getContext("2d"), (d.width = 200), (d.height = 200);
const w = new e(),
	c = new n(75, window.innerWidth / window.innerHeight, 0.1, 1e3),
	h = new t({ canvas: document.querySelector("#bg") });
h.setPixelRatio(window.devicePixelRatio),
	h.setSize(window.innerWidth, window.innerHeight),
	h.setClearColor(19776),
	c.position.setZ(30),
	c.position.setX(-3),
	h.render(w, c);
const l = new a(new o(10, 3, 200, 160), new i({ color: 26972 }));
w.add(l);
const m = new s(13695182);
m.position.set(5, 5, 5);
const g = new r(16777215);
w.add(m, g),
	(function e() {
		requestAnimationFrame(e),
			(l.rotation.x += 0.01),
			(l.rotation.y += 0.005),
			(l.rotation.z += 0.01),
			h.render(w, c);
	})();
