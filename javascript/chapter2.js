// Example of adding smooth scrolling when clicking a date
document.querySelectorAll('.timeline-date').forEach(date => {
    date.addEventListener('click', function() {
        const content = this.nextElementSibling;
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
