// Check session validity on mainweb.html load
const accessExpiryTime = 60000; // 60 minutes
const accessTimestamp = localStorage.getItem('accessTimestamp');
const currentTime = Date.now();

if (!accessTimestamp || currentTime - accessTimestamp > accessExpiryTime) {
    alert('Your session has expired. Please enter the password again.');
    localStorage.removeItem('accessGranted'); // Clear access flag
    localStorage.removeItem('accessTimestamp'); // Clear timestamp
    window.location.href = 'index.html'; // Redirect to password page
} else {
    console.log('Access still valid.');
}
