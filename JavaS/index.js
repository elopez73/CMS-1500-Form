const modal = document.querySelector(".modal");
const modalCont = document.querySelector(".modalContent");
var modalImg = document.querySelector(".modalContent img");
const EDI = document.getElementById("L");
const Content = document.getElementById("Content");
const exit = document.querySelector(".Exit img");
const Navheight = document.querySelector(".navbar").offsetHeight;

document.documentElement.style.setProperty(
	"--scroll-padding",
	Navheight + -2 + "px"
);

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("  .navbar ul li");

window.addEventListener("scroll", () => {
	let current = "";
	sections.forEach((section) => {
		const sectionTop = section.offsetTop - 50;
		const sectionHeight = section.clientHeight;
		if (scrollY >= sectionTop - sectionHeight / 5) {
			current = section.getAttribute("id");
		}
	});

	navLi.forEach((li) => {
		li.classList.remove("active");
		if (li.classList.contains(current)) {
			li.classList.add("active");
		}
	});
});

var body = document.body,
	timer;
window.addEventListener(
	"scroll",
	function () {
		clearTimeout(timer);
		const Blank = document.getElementById("Blank");
		if (!body.classList.contains("disable-hover")) {
			body.classList.add("disable-hover");
			Blank.classList.remove("active");
			box.classList.remove("active");
		}
		timer = setTimeout(function () {
			body.classList.remove("disable-hover");
		}, 50);
	},
	false
);

window.onclick = function (event) {
	const Blank = document.getElementById("Blank");
	if (event.target == Blank) {
		Blank.classList.remove("active");
	}
	const box = document.getElementById("box");
	if (event.target == box) {
		box.classList.remove("active");
	}
};

window.addEventListener("resize", onMobile);

function onMobile() {
	var height = document.body.clientHeight;
	var width = document.body.clientWidth;
	const nav1 = document.getElementById("nav1");
	const ul1 = document.getElementById("ul1");

	if (width <= "800") {
		nav1.classList.add("mobile");
		ul1.classList.add("mobile");
	}
	if (width >= "800") {
		nav1.classList.remove("mobile");
		ul1.classList.remove("mobile");
	}
}
function openBlank() {
	const blank = document.getElementById("Blank");
	if (blank == null) return;
	blank.classList.toggle("active");
}

function openBox() {
	const box = document.getElementById("box");
	if (box == null) return;
	box.classList.toggle("active");
}
