const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const lock = document.querySelector(".body");




hamburger.addEventListener("click", () => {

	navLinks.classList.toggle("open");

	links.forEach(link =>{
		
		link.classList.toggle("fade");
		lock.classList.toggle("lock");
	}); 

});

