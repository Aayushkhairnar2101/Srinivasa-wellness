document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');

    if (mobileMenuBtn && navbar) {
        mobileMenuBtn.addEventListener('click', () => {
            navbar.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            // Animate hamburger to X (optional, simplistic version here)
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('#navbar a').forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });

    // Smooth Scrolling for anchor links (if browser doesn't support scroll-behavior: smooth natively)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Feedback Form Handling
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple validation feedback or redirection logic
            const formData = new FormData(feedbackForm);
            const name = formData.get('name');

            // In a real app, send to backend. Here, simulate success.
            alert(`Thank you, ${name}! Your feedback has been received. We appreciate your input.`);
            feedbackForm.reset();
        });
    }

    // Header scroll background change
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
            header.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
        }
    });

    // Product Flip Card Animation
    const productCards = document.querySelectorAll('.product-flip-card');

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});
