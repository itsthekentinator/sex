// script.js
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("illustrationCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Draw the kissing illustration (simplified version)
  ctx.fillStyle = "#FFFFFF"; // White color
  ctx.fillRect(100, 100, 100, 100); // Draw the first person
  ctx.fillRect(300, 100, 100, 100); // Draw the second person

  const startButton = document.getElementById("startButton");
  const roughButton = document.getElementById("roughButton");

  startButton.addEventListener("click", () => {
    // Your start button click logic here
  });

  roughButton.addEventListener("click", () => {
    // Your "I want it rough" button click logic here
  });
});
