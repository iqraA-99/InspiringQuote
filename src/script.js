document.addEventListener("DOMContentLoaded", function () {
  const witch = document.getElementById("witch");
  setTimeout(() => {
    witch.style.display = "none"; // Hide after animation
  }, 3000);
});

document.getElementById("dream-btn").addEventListener("click", function () {
  document.querySelector(".subtext").innerText = "Dare to rise above limits.";
});
