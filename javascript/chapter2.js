document.getElementById('playButton').addEventListener('click', function () {
    // Play the song
    const audio = document.getElementById('audio');
    audio.play();

    // Reveal the timeline
    const timelineContent = document.getElementById('timelineContent');
    timelineContent.style.display = 'block'; // Show the timeline

    // Add the 'fade-out' class to trigger the animation
    const playButton = document.getElementById('playButton');
    playButton.classList.add('fade-out');

    // Wait for the fade-out animation to complete and then hide the button
    setTimeout(function () {
        playButton.style.display = 'none'; // Hide the button after animation
    }, 1000); // Time matches the duration of the CSS animation
});
