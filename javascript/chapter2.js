document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-timeline-btn");
    const timeline = document.getElementById("timeline");
    const music = document.getElementById("background-music");
    const musicToggle = document.getElementById("toggle-music");
    const body = document.body; // Access the body element
    
    let isMusicPlaying = false;
    
    // Disable scrolling by default
    body.classList.add("no-scroll");
    
    // Handle Start Timeline Button
    startButton.addEventListener("click", () => {
      // Add animation and visibility for timeline
      timeline.classList.remove("hidden"); // Ensure it's visible
      timeline.classList.add("visible"); // Trigger CSS animation
      
      // Hide the start button after the timeline is displayed
      startButton.style.display = "none";
      
      // Enable scrolling after button click
      body.classList.remove("no-scroll");
      
      // Start music playback
      if (!isMusicPlaying) {
        music.play();
        isMusicPlaying = true;
        musicToggle.textContent = "🔊"; // Update music button
      }
      
      // Smooth scroll to the timeline after the button is clicked
      smoothScrollTo(timeline);
    });
    
    
    // Handle Music Toggle
    musicToggle.addEventListener("click", () => {
      if (isMusicPlaying) {
        music.pause();
        isMusicPlaying = false;
        musicToggle.textContent = "🔈";
      } else {
        music.play();
        isMusicPlaying = true;
        musicToggle.textContent = "🔊";
      }
    });
  
    // Lazy loading functionality
    const lazyElements = document.querySelectorAll(".lazy");
    
    const lazyObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
    
          // Check if it's an image or video
          if (element.tagName === "IMG") {
            element.src = element.dataset.src;
          } else if (element.tagName === "VIDEO") {
            element.src = element.dataset.src;
            element.load(); // Load video
          }
    
          element.classList.remove("lazy");
          observer.unobserve(element); // Stop observing once loaded
        }
      });
    });
    
    lazyElements.forEach((element) => lazyObserver.observe(element));
  
    // Timeline visibility functionality
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function showTimelineItems() {
      const windowHeight = window.innerHeight;
      timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < windowHeight - 100) {
          item.classList.add('visible');
        }
      });
    }
  
    window.addEventListener('scroll', showTimelineItems);
    showTimelineItems(); // Run initially to check if any items are already in view
    
    // Add Timeline animations to make it slide and fade in
    const timelineLine = document.querySelector('.timeline');
  
    // Initially hide the timeline line
    timelineLine.style.opacity = 0;
  
    // Add visibility trigger when items come into view
    function showTimelineItemsWithAnimation() {
      const windowHeight = window.innerHeight;
      timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < windowHeight - 100) {
          item.classList.add('visible');
          timelineLine.style.opacity = 1; // Fade in the timeline line when first item comes into view
        }
      });
    }
  
    window.addEventListener('scroll', showTimelineItemsWithAnimation);
    showTimelineItemsWithAnimation(); // Run initially to check if any items are already in view
  });
  
  // Custom Smooth Scroll Function
  function smoothScrollTo(element) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80; // Slightly offset the scroll by -80px
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth' // Smooth scrolling
    });
  }
  