
const roles = [
    "Tech Enthusiast",
    "Web Developer",
    "UI Designer"
  ];
  
  const element = document.getElementById("typing");
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;
  
  function typeEffect() {
    const role = roles[roleIndex];
  
    element.textContent = role.substring(0, charIndex);
  
    if (!deleting && charIndex < role.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (!deleting) {
      deleting = true;
      setTimeout(typeEffect, 1200);
    } else if (charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 45);
    } else {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 250);
    }
  }
  
  typeEffect();
  