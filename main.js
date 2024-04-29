var con = document.querySelector(".container");
var heart = document.querySelector("i");

con.addEventListener("dblclick", () => {
	heart.style.transform = "translate(-50%, -50%) scale(2)";
    heart.style.opacity = 0.8;
setTimeout(() => {
    heart.style.opacity = 0; 
}, 1000);
setTimeout(() => {
    heart.style.transform = "translate(-50%, -50%) scale(0)"; 
}, 2000);
    
});