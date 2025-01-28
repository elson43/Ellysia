const accessGranted = localStorage.getItem('accessGranted');
const accessTime = localStorage.getItem('accessTime');
const accessExpiryTime = 3600000; // 60 minutes (in milliseconds)

if (!accessGranted || !accessTime) {
    window.location.href = '/index.html'; // Adjust the path if necessary (if 'index.html' is not in the root directory)
} else {
    // Check if session has expired
    const timeElapsed = Date.now() - accessTime;
    if (timeElapsed > accessExpiryTime) {
        // Session expired, clear the data and redirect
        localStorage.removeItem('accessGranted');
        localStorage.removeItem('accessTime');
        window.location.href = '/index.html'; // Adjust the path if necessary
    } else {
 
        // Allow access to main content
        document.body.style.display = 'block'; // Show the content

        // Force logout after the session expires
        setTimeout(() => {
            localStorage.removeItem('accessGranted');
            localStorage.removeItem('accessTime');
            window.location.href = '/index.html'; // Adjust the path if necessary
        }, accessExpiryTime - timeElapsed); // Time left to expiry
    }
}
