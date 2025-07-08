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

	
		

		
