const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (nav.classList.contains('nav-active')) {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            } else {
                link.style.animation = ''; // Reset animation on close
            }
        });
    });
}

// Function to handle the active link based on the current page
const setActiveLink = () => {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Remove 'active' class from all
        link.classList.remove('active');

        // Set 'active' class based on the current file name
        if (linkPath === currentPath) {
            link.classList.add('active');
        } 
        
        // Handle index.html (home page) when no specific file is found in the URL
        if (currentPath === '' || currentPath === 'index.html') {
            document.querySelector('.nav-links a[href="index.html"]').classList.add('active');
        }
    });
}

// Run functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    setActiveLink();
});
