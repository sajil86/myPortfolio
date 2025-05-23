// BIRD ANIMATION
VANTA.BIRDS({
    el: "#vanta-bg", // The element where the effect should be applied
    // mouseControls: true,
    // touchControls: true,
    // gyroControls: false,
    // minHeight: 200.0,
    // minWidth: 200.0,
    // scale: 1.0,
    // scaleMobile: 1.0,
    backgroundColor: 0x11071f, // Updated background color
    
    mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  // color1: 0x2d37d4,
  color1: 0x463759,
  color2: 0xc335ff,
  birdSize: 0.80,
  speedLimit: 3.00
 
  });
  
  
  
  
  //HEADING TEXT CHANGE EFFECT
  const texts = [
    "> WEB <span>DEVELOPER</span>",
    "> Front-End <span>DEVELOPER</span>",
    "> UI/UX <span>DESIGNER</span>",
  ];
  let index = 0;
  
  setInterval(() => {
    index = (index + 1) % texts.length;
    document.getElementById("dynamicText").innerHTML = texts[index];
  }, 7000);
  
  // RESUME DOWNLOAD BUTTON
  function downloadResume() {
    const link = document.createElement("a");
    link.href = "./Resume/SajilG.pdf";
    link.download = "SajilG_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("THANKS FOR DOWNLOADING");
  }
  
  
  
  // CAROUSEL
  
  let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  
  function showSlide(index) {
      items.forEach((item, i) => {
          item.classList.toggle('active', i === index);
      });
  }
  
  function nextSlide() {
      currentIndex = (currentIndex + 1) % items.length;
      showSlide(currentIndex);
  }
  
  function prevSlide() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showSlide(currentIndex);
  }
  
  setInterval(nextSlide, 3000); // Auto change every 3 seconds
  
  
                
  