const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Draw the outer circle
const outerGradient = ctx.createRadialGradient(100, 100, 0, 100, 100, 100);
outerGradient.addColorStop(0, "white");
outerGradient.addColorStop(1, "blue");
ctx.beginPath();
ctx.arc(100, 100, 70, 0, 2 * Math.PI);
ctx.fillStyle = outerGradient;
ctx.fill();

// Draw the inner circle
const innerGradient = ctx.createRadialGradient(100, 100, 50, 0, 100, 50);
innerGradient.addColorStop(0, "blue");
innerGradient.addColorStop(1, "white");
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = innerGradient;
ctx.fill();

// Draw the letter M inside the inner circle
ctx.font = "75px Arial";
ctx.fillStyle = "white";
ctx.fillText("M", 68, 126);
