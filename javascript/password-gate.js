const PASSWORD_TIMEOUT = 10 * 60 * 1000; // Timeout in milliseconds (e.g., 10 minutes)

// Check if password has been entered and if it's still valid
const storedTime = localStorage.getItem('timestamp');
const currentTime = new Date().getTime();

if (!storedTime || currentTime - storedTime > PASSWORD_TIMEOUT) {
    alert('Session expired. Please re-enter the password.');
    localStorage.clear(); // Clear the localStorage
    window.location.href = '../index.html'; // Redirect to the password page
} else {
    // Update the timestamp to extend the session
    localStorage.setItem('timestamp', currentTime);
}
