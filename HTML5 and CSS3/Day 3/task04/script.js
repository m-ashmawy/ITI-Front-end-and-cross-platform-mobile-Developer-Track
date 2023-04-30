// get the canvas element
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
// set the rectangle's initial position and angle
let x = canvas.width / 2;
let y = canvas.height / 2;
let angle = 0;

// define the function that rotates and draws the rectangle
function drawRect() {
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // save the canvas state before rotating
  ctx.save();

  // translate to the center of the canvas
  ctx.translate(x, y);

  // rotate the canvas around the center
  ctx.rotate((angle * Math.PI) / 180);

  // draw the rectangle
  ctx.fillRect(-20, 0, 40, 80);

  // restore the canvas state after rotating
  ctx.restore();

  // increment the angle
  angle += 30;

  // wrap the angle around at 360 degrees
  if (angle >= 360) {
    angle = 0;
  }
}

// call the drawRect function every 100 milleseconds
setInterval(drawRect, 100);
