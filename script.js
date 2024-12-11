document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        updateDarkModeToggle(true);
    }

    // Dark mode toggle functionality
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
        updateDarkModeToggle(isDarkMode);
    });

    function updateDarkModeToggle(isDarkMode) {
        darkModeToggle.innerHTML = isDarkMode
            ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    }

    // Form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const formObject = Object.fromEntries(formData.entries());
        console.log('Form submitted:', formObject);
        contactForm.reset();
        alert('Thank you for your message! We\'ll get back to you soon.');
    });

    // Scroll reveal animations
    ScrollReveal().reveal('.hero-content', { delay: 200, distance: '50px', origin: 'left' });
    ScrollReveal().reveal('.hero-image', { delay: 400, distance: '50px', origin: 'right' });
    ScrollReveal().reveal('.project-card', { delay: 200, interval: 200, distance: '50px', origin: 'bottom' });
    ScrollReveal().reveal('.skill-card', { delay: 200, interval: 100, distance: '20px', origin: 'bottom' });
    ScrollReveal().reveal('.contact-form', { delay: 200, distance: '50px', origin: 'bottom' });

    // Dynamic text typing effect
    const dynamicText = document.getElementById('dynamic-text');
    const phrases = [
        'web developer',
        'UI/UX enthusiast',
        'problem solver',
        'creative thinker',
        'data analyst',
        'freelancer',
        'engineer',
        'machine learning student'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            dynamicText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            dynamicText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500); // Wait before starting to delete
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeEffect, 500); // Wait before typing next phrase
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing speed
        }
    }

    typeEffect(); // Start the typing effect
});

