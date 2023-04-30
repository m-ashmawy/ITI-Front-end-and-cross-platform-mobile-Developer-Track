// Get the canvas element
var canvas = document.getElementById("myCanvas");

// Get the context of the canvas
var ctx = canvas.getContext("2d");

// Create a linear gradient for the top half of the canvas
var topGradient = ctx.createLinearGradient(0, 0, 0, canvas.height / 2);
topGradient.addColorStop(0, "#03a9f4");
topGradient.addColorStop(1, "#ffffff");

// Create a linear gradient for the bottom half of the canvas
var bottomGradient = ctx.createLinearGradient(
  0,
  canvas.height / 2,
  0,
  canvas.height
);
bottomGradient.addColorStop(0, "#4caf50");
bottomGradient.addColorStop(1, "#ffffff");

// Fill the top half of the canvas with the top gradient
ctx.fillStyle = topGradient;
ctx.fillRect(0, 0, canvas.width, canvas.height / 2);

// Fill the bottom half of the canvas with the bottom gradient
ctx.fillStyle = bottomGradient;
ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height);

// Create a linear gradient for the line
var gradient = ctx.createLinearGradient(
  canvas.width / 4,
  (canvas.height * 3) / 4,
  (canvas.width * 3) / 4,
  canvas.height / 4
);
gradient.addColorStop(0, "red");
gradient.addColorStop(0.5, "orange");
gradient.addColorStop(1, "yellow");

// Draw the line
ctx.beginPath();
ctx.moveTo(canvas.width / 4, (canvas.height * 3) / 4);
ctx.lineTo(canvas.width / 4, canvas.height / 4);
ctx.lineTo((canvas.width * 3) / 4, canvas.height / 4);
ctx.lineTo((canvas.width * 3) / 4, (canvas.height * 3) / 4);
ctx.strokeStyle = gradient;
ctx.lineWidth = 10;
ctx.stroke();
