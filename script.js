// script.js
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("illustrationCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Draw the simplified illustration
  ctx.fillStyle = "#FFFFFF"; // White color
  ctx.fillRect(150, 150, 100, 100); // Draw the first person
  ctx.fillRect(300, 150, 100, 100); // Draw the second person
});

function goToStart() {
  window.location.href = "https://www.example.com/start-link"; // Replace with your actual link
}

function goToRough() {
  window.location.href = "https://www.example.com/rough-link"; // Replace with your actual link
}
