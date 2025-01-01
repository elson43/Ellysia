const accessExpiryTime = 60000; // 1 minute for testing
        const accessGranted = localStorage.getItem('accessGranted');
        const accessTime = localStorage.getItem('accessTime');

        if (!accessGranted || !accessTime || (Date.now() - parseInt(accessTime)) > accessExpiryTime) {
            // If no valid session, redirect back to password page
            localStorage.removeItem('accessGranted');
            localStorage.removeItem('accessTime');
            window.location.href = 'index.html';
        }