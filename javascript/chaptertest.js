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
    // Show timeline and make it visible immediately without fade-in animation
    timeline.classList.add("visible");

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

    // Trigger visibility of timeline items by adding 'visible' class
    showTimelineItems();

    // Smoothly scroll to the timeline section
    timeline.scrollIntoView({ behavior: 'smooth' });
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

  // Function to assign random rotation to each timeline item
function assignRandomRotation(item) {
  const randomDegree = Math.floor(Math.random() * 20) - 10; // Random number between -10 and 10 for rotation
  item.style.transform = `rotate(${randomDegree}deg)`; // Apply random rotation
  item.style.transition = 'transform 1.5s ease-out'; // Smooth transition for rotation
}

// Function to show timeline items with animation
function showTimelineItems() {
  const windowHeight = window.innerHeight;
  timelineItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    // Trigger animation once when the item comes into view
    if (itemTop < windowHeight - 100 && !item.classList.contains("animated")) {
      assignRandomRotation(item); // Assign random rotation when the item comes into view

      // Add a class to mark the item as animated, so it doesn't animate again on scroll
      item.classList.add("animated");
    }
  });
}


  // Trigger animation on scroll
  window.addEventListener('scroll', showTimelineItems);
  showTimelineItems(); // Run initially to check if any items are already in view

  // Video Controls Toggle
  const videos = document.querySelectorAll('video');

  videos.forEach((video) => {
    // Initially hide the controls for all videos
    video.removeAttribute('controls');

    video.addEventListener('click', () => {
      // Toggle controls on click
      if (video.hasAttribute('controls')) {
        video.removeAttribute('controls'); // Hide controls if they are showing
      } else {
        video.setAttribute('controls', 'true'); // Show controls when clicked
      }
    });
  });
});
