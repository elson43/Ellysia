// Password Gate Script
(function() {
    if (sessionStorage.getItem('passwordEntered') !== 'true') {
        alert('Access Denied! Please enter the password to continue.');
        window.location.href = 'index.html'; // Redirect to password page
    }
})();
