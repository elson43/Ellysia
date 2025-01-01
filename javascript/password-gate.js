const accessGranted = localStorage.getItem('accessGranted');
        const accessTime = localStorage.getItem('accessTime');
        const accessExpiryTime = 3600000; // 60 minute

        if (!accessGranted || !accessTime) {
            window.location.href = 'index.html'; // Redirect to password page if no valid session
        } else {
            // Check if session has expired
            const timeElapsed = Date.now() - accessTime;
            if (timeElapsed > accessExpiryTime) {
                // Session expired, clear the data and redirect
                localStorage.removeItem('accessGranted');
                localStorage.removeItem('accessTime');
                window.location.href = 'index.html'; // Redirect to login page
            } else {
                // Allow access to main content
                document.body.style.display = 'block'; // Show the content
                setTimeout(() => {
                    // If the session time exceeds, forcefully redirect
                    window.location.href = 'index.html';
                }, accessExpiryTime - timeElapsed); // Time left to expiry
            }
        }