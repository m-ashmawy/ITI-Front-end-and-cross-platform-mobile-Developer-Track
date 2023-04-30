// Get the canvas element
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var x = 0;
var y = 0;
context.strokeStyle = "black";
context.lineWidth = 10;
// Define the function to draw the Line
function drawLine() {
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(x++, y++);
  context.stroke();
  if (x > canvas.width + 5) {
    clearInterval(drawLineIntervalId);
    alert("animation ended");
  }
}

// Call the drawLine function every 10 milliseconds
var drawLineIntervalId = setInterval(drawLine, 10);
