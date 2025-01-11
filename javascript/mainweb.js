// Get the image element and pagination button
const memoryImage = document.getElementById('memoryImage');
const nextButton = document.getElementById('next');

// Array of all the image sources
const photos = [
  "../mwebcon/batik.jpg",
  "../mwebcon/kristen2.jpg",
  "../mwebcon/bracelet.jpg",
  "../mwebcon/lovelake.jpg",
  "../mwebcon/lovelakee.jpg",
  "../mwebcon/canteen.jpg",
  "../mwebcon/firstmeet.jpg",
  "../mwebcon/giftss.jpg",
  "../mwebcon/rizzdog.jpg",
  "../mwebcon/kristen.jpg",
  "../mwebcon/saves.jpg"
];

// Define the starting index
let currentIndex = 0;

// Function to show the next image
function showNextImage() {
  // Increment the current index to go to the next image
  currentIndex++;

  // If the current index exceeds the number of photos, reset to the first photo
  if (currentIndex >= photos.length) {
    currentIndex = 0; // Reset back to first photo
  }

  // Update the image source
  memoryImage.src = photos[currentIndex];
}

// Event listener for the "Next" button
nextButton.addEventListener('click', showNextImage);
