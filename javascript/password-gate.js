const accessExpiryTime = 60000; // 1 minute (60000 ms)

        const accessGranted = localStorage.getItem('accessGranted');
        const accessTime = localStorage.getItem('accessTime');

        // Check if access is granted and if the session has expired
        if (!accessGranted || !accessTime || (Date.now() - parseInt(accessTime)) > accessExpiryTime) {
            // Clear session data
            localStorage.removeItem('accessGranted');
            localStorage.removeItem('accessTime');
            
            // Redirect to password page if expired
            window.location.href = 'index.html';
        }

        // Optional: Reset the session timer if the user is still active
        localStorage.setItem('accessTime', Date.now().toString());