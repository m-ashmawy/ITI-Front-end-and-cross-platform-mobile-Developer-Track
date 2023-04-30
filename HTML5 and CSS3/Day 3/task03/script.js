const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const birds = new Image();
birds.src = "birds.jpg";
birds.onload = function () {
  ctx.drawImage(birds, 0, 0, canvas.width, canvas.height);
  ctx.font = "45px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "#fff000";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 5;
  ctx.fillText("It's gonna be ok babys", 25, 50);
};
