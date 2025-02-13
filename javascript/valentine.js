// Select elements
const gift = document.getElementById('gift');
const question = document.getElementById('question');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const message = document.createElement('div');  // Create a new message element

// Variable to track size of Yes button
let yesButtonSize = 1;

// Array of playful texts for the No button
const noTexts = [
  "Nope!",
  "Still No!",
  "Please!",
  "ERMM",
  "NO!",
  "You Sure?",
  "Think Again!",
  "Pretty please?",
  "Wrong answer"
];

// Settings for movement and distance
const edgeMargin = 40;  // Distance from screen edges
const safeDistance = 100; // Minimum distance from Yes button

// Limit the downward movement (80% of the screen height)
const verticalLimit = 0.9;  // No button will be limited to 80% of the screen height

// Add message to the page but hide it initially
message.innerHTML = "SYIBAU <br> CLICK YES or else... ";
message.style.position = 'absolute';
message.style.top = '30%';
message.style.left = '50%';
message.style.fontFamily = 'Shadows Into Light, cursive';  // Set the font family
message.style.transform = 'translate(-50%, -50%)';
message.style.fontSize = '24px';
message.style.fontWeight = 'bold';
message.style.display = 'none';  // Hide initially
document.body.appendChild(message);

// No Button Click Event
noButton.addEventListener('click', () => {
    // Increase size of Yes button
    yesButtonSize += 0.4;
    yesButton.style.transform = `scale(${yesButtonSize})`;

    // Change No button text randomly
    const randomText = noTexts[Math.floor(Math.random() * noTexts.length)];
    noButton.textContent = randomText;

    // Get button and viewport dimensions
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const yesRect = yesButton.getBoundingClientRect();

    // Calculate movement limits (80% of the screen)
    const limitX = Math.floor(viewportWidth * 0.8);
    const limitY = Math.floor(viewportHeight * verticalLimit);  // Limit Y to 80% height

    let randomX, randomY;

    // Function to check distance from Yes button
    const isTooClose = () => {
        const xDist = Math.abs(randomX - yesRect.left);
        const yDist = Math.abs(randomY - yesRect.top);
        return xDist < safeDistance && yDist < safeDistance;
    };

    // Loop until the No button is far enough from the Yes button
    do {
        // Generate random positions within the 80% area
        randomX = Math.floor(Math.random() * (limitX - buttonWidth - 2 * edgeMargin)) + edgeMargin;

        // Limit randomY to prevent it from going too far down
        randomY = Math.floor(Math.random() * (limitY - buttonHeight - 2 * edgeMargin)) + edgeMargin;

        // Ensure the Y button stays within the 80% area (not going too far down)
        if (randomY > viewportHeight * verticalLimit - buttonHeight) {
            randomY = Math.floor(viewportHeight * verticalLimit - buttonHeight - edgeMargin);
        }
    } while (isTooClose() && randomY < viewportHeight * verticalLimit - buttonHeight); // Limit Y to ensure it doesn't go off-screen

    // Apply the new position
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    const yesButtonScale = yesButtonSize;

    if (yesButtonScale >= 3) {  // If Yes button is 50% bigger than original size
        noButton.style.display = 'none';  // Hide No button
        message.style.display = 'block';  // Show message

        // Play the sound when the "No more options" message appears
        const noMoreSound = document.getElementById('noMoreSound');
        noMoreSound.play();  // Play sound

        // Change the GIF when the "No more options" message appears
        gift.src = '../mwebcon/gg.png'; // Change to the new gif/image
    }
});

// Yes Button Click Event
yesButton.addEventListener('click', () => {
    // Hide both Yes and No buttons and the "No more options" message
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
    message.style.display = 'none';  // Hide the "No more options" message

    // Change the gift image and text
    gift.src = '../mwebcon/cathug.gif';  // Change to a video or another gif
    
    const Moresound = document.getElementById('Moresound');
        Moresound.play();  // Play sound


    // Optionally, show a new image
    const newImage = document.createElement('img'); // Create a new img element
    newImage.src = '../mwebcon/rose.jpg'; // Set the new image source
    newImage.alt = 'New Image'; // Add an alt description for the image
    newImage.style.position = 'absolute'; // Position it as needed
    newImage.style.top = '70%'; // Adjust position on the screen
    newImage.style.left = '50%'; // Center horizontally
    newImage.style.transform = 'translateX(-50%)'; // Center it properly
    document.body.appendChild(newImage); // Add it to the page
    
    question.innerHTML = "Well, looks like you’re stuck with me now! 💘<br> <br> Happy Valentine’s Day!";
    
    // Style the text directly in JavaScript
    question.style.fontSize = '1.5rem';  // Bigger text
    question.style.fontWeight = 'bold'; // Bold text
    question.style.fontFamily = 'Shadows Into Light, cursive'; // Add font family to question text
    question.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.3);' /* Subtle shadow */
    question.style.color = '#ff1493'; // Pink color for Valentine's theme
    question.style.textAlign = 'center';  // Centered text
    question.style.margin = '50px';
    question.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)'; // Shadow effect for more impact

    // Optional: Add a cute animation
    gift.style.transform = "scale(1.2) rotate(3deg)";

    // Move the question and GIF upwards when the Yes button gets larger
    question.style.transform = "translateY(-50px)";
    gift.style.transform = "scale(1.2) rotate(3deg) translateY(-50px)";
});
