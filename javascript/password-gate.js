// Check if access was granted in localStorage
if (localStorage.getItem('accessGranted') !== 'true') {
    alert('Please enter the password first!');
    window.location.href = 'index.html'; // Redirect to the password page if not authorized
} else {
    // Optional: Clear the 'accessGranted' status when they leave the page
    // localStorage.removeItem('accessGranted');
}
