// Get the canvas element
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

// Set the circle properties
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = canvas.width / 2 - 5;
var startAngle = 0;
var endAngle = Math.PI;

// Set the stroke and fill properties
context.strokeStyle = "black";
context.lineWidth = 10;
context.fillStyle = "yellow";

// Keep track of the number of flips
var flipCount = 0;

// Define the function to draw the circle
function drawCircle() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // If we've flipped 10 times, display the full circle
  if (flipCount == 10) {
    clearInterval(drawCircleIntervalId);
    context.beginPath();
    context.arc(x, y, radius, startAngle, 2 * Math.PI);
    context.stroke();
    context.fill();
  }
  // Draw the circle
  if (flipCount % 2 == 0) {
    // Display the top half of the circle
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle);
    context.stroke();
    context.fill();
  } else {
    // Display the bottom half of the circle
    context.beginPath();
    context.arc(x, y, radius, endAngle, startAngle);
    context.stroke();
    context.fill();
  }
  // Increment the flip count
  flipCount++;
}

// Call the drawCircle function every 500 milliseconds
var drawCircleIntervalId = setInterval(drawCircle, 500);
