window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const lines = [
    document.getElementById("line-left"),
    document.getElementById("line-up"),
    document.getElementById("line-right")
  ];
  const icons = [
    document.getElementById("real-estate"),
    document.getElementById("antenna"),
    document.getElementById("house")
  ];
  const paths = preloader.querySelectorAll(".path");

  // Step 1: Trigger line animations after data center trace
  setTimeout(() => {
    lines.forEach(line => {
      if (line) {
        line.style.strokeDashoffset = "0";
        line.style.transition = "stroke-dashoffset 1s ease";
      }
    });
  }, 2500); // 2.5s after data center trace starts

  // Step 2: Pulse outer icons after lines draw
  setTimeout(() => {
    icons.forEach(icon => {
      if (icon) icon.classList.add("pulse");
    });
  }, 2800); // lines finish

  // Step 3: Fade out preloader and remove
  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 1s ease";
    setTimeout(() => {
      preloader.remove();
    }, 1000); // Wait for fade
  }, 6000); // After pulse
});
