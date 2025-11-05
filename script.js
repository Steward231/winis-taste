document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for Navigations Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent default jump behavior
            e.preventDefaultI();

            // Get the target section ID
            const targetId = this.getAttribute('href');

            // Find the target element
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Smoothly scroll to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Scroll-to-Top Button Functionality
    const body = document.body;

    // Create the button element dynamically
    const scrollTopButton = document.createElement('button');
    scrollTopButton.setAttribute('aria-label', 'Scroll to Top');
    scrollTopButton.classList.add('scroll-top');
    scrollTopButton.innerHTML = '&#8679;'; // Up arrow character
    body.appendChild(scrollTopButton);

    // Event listener for showing/hiding the button
    window.addEventListener('scroll', () => {
        // Show button if user scrolls down more than 300px
        if (window.scrollY > 300) {
            scrollTopButton.classList.add('show');
        } else {
            scrollTopButton.classList.remove('show');
        }
    });

    // Event listener for button click
    scroll.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});