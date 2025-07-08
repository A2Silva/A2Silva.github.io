window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  
  // Wait for animation to finish (draw + pulse + small buffer)
  setTimeout(() => {
    preloader.style.transition = "opacity 1s ease";
    preloader.style.opacity = "0";
    
    // After fade-out completes, remove it
    setTimeout(() => {
      preloader.remove();
    }, 1000);
    
  }, 4200); // 2.8s draw + 1.2s pulse + 0.2s buffer
});

	
		

		
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const lines = ["line-left", "line-up", "line-right"].map(id => document.getElementById(id));
  const icons = ["real-estate", "antenna", "house"].map(id => document.getElementById(id));

  // Step 1: Start tracing center icon (handled via CSS delay)

  // Step 2: Draw lines
  setTimeout(() => {
    lines.forEach(line => {
      line.style.animation = "draw-line 1s ease forwards";
    });
  }, 2200); // after center trace

  // Step 3: Pulse outer icons after trace
  setTimeout(() => {
    icons.forEach(icon => {
      icon.classList.add("pulse");
    });
  }, 3700); // after lines draw

  // Step 4: Fade out preloader and show site
  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 1s ease";
    setTimeout(() => preloader.remove(), 1000);
  }, 4800); // after all pulses
});
