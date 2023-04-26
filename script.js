// Get all anchor links that start with a hash symbol
const navLinks = document.querySelectorAll('a[href^="#"]');

// For each anchor link, add an event listener to handle the smooth scrolling effect
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500; // in milliseconds
    let start = null;

    // Use requestAnimationFrame to animate the scrolling
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    // Use an easing function to create a smooth scrolling effect
    function easeInOutQuad(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    }

    window.requestAnimationFrame(step);
  });
});
function openNavBar() {
    var x = document.getElementById("myNav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }