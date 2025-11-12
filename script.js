// ========================================
// MOBILE MENU TOGGLE
// ========================================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ========================================
// ARTICLE FILTER
// ========================================

const filterButtons = document.querySelectorAll('.filter-btn');
const articleItems = document.querySelectorAll('.article-item');

if (filterButtons.length > 0 && articleItems.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            articleItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 10);
                } else {
                    const itemCategory = item.getAttribute('data-category');
                    if (itemCategory === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// ========================================
// FORM SUBMISSION HANDLERS
// ========================================

const consultationForm = document.getElementById('consultationForm');
if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! We will contact you soon to confirm your consultation.');
        consultationForm.reset();
    });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you shortly.');
        contactForm.reset();
    });
}

const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Successfully subscribed to our newsletter!');
        newsletterForm.reset();
    });
}

// ========================================
// SMOOTH SCROLL BEHAVIOR
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========================================
// ANIMATION ON SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-in forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .featured-card,
    .article-card,
    .service-card,
    .value-card,
    .team-member {
        animation: fadeIn 0.6s ease-in forwards;
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Observe elements
document.querySelectorAll('.featured-card, .article-card, .service-card, .value-card, .team-member').forEach(element => {
    observer.observe(element);
});

console.log('[v0] Health & Beauty website loaded successfully!');
