window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 1s ease";
    setTimeout(() => preloader.remove(), 1000);
  }, 3500); // 3s draw + 0.5s buffer
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.remove();
    }, 1000); // after fade out
  }, 4200); // 2.8s draw + 1.2s pulse + buffer
});


	
		

		
