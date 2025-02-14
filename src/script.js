document.addEventListener("DOMContentLoaded", function () {
  const witch = document.getElementById("witch");
  const title = document.getElementById("quote");

  if (witch && title) {
    let position = 0;
    const stopPosition = title.offsetWidth - 270;

    function moveWitch() {
      if (position < stopPosition) {
        position += 5;
        witch.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveWitch);
      }
    }

    moveWitch();
  }

  document.getElementById("dream-btn").addEventListener("click", function () {
    document.querySelector(".subtext").innerText = "Dare to rise above limits.";
  });
});
