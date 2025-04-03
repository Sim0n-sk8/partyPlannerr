document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                nav.classList.remove('active');
            }
        });
    });
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentIndex = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });
    
    prevBtn.addEventListener('click', () => {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = testimonials.length - 1;
        showTestimonial(newIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        let newIndex = currentIndex + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    });
    
    // Auto-rotate testimonials
    let testimonialInterval = setInterval(() => {
        let newIndex = currentIndex + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    }, 5000);
    
    // Pause auto-rotation when hovering over slider
    const slider = document.querySelector('.testimonial-slider');
    slider.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(() => {
            let newIndex = currentIndex + 1;
            if (newIndex >= testimonials.length) newIndex = 0;
            showTestimonial(newIndex);
        }, 5000);
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const closeModal = document.querySelector('.close-modal');
    const modalCloseBtn = document.querySelector('.modal-close-btn');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would send the form data to a server here
        // For this demo, we'll just show the success modal
        successModal.style.display = 'flex';
        
        // Reset form
        this.reset();
    });
    
    // Close modal when clicking X
    closeModal.addEventListener('click', function() {
        successModal.style.display = 'none';
    });
    
    // Close modal when clicking close button
    modalCloseBtn.addEventListener('click', function() {
        successModal.style.display = 'none';
    });
    
    // Close modal when clicking outside modal content
    window.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });

    let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.style.top = "-100px"; // Move header out of view
    } else {
        // Scrolling up
        header.style.top = "0"; // Show header
    }
    lastScrollY = window.scrollY;
});

// Initial CSS setup
header.style.position = "fixed";
header.style.top = "0";
header.style.width = "100%";
header.style.transition = "top 0.3s ease-in-out";

    
    // Add current year to footer
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector('.footer-bottom p').insertBefore(yearSpan, document.querySelector('.footer-bottom p').firstChild);
    document.querySelector('.footer-bottom p').insertBefore(document.createTextNode(' '), document.querySelector('.footer-bottom p').firstChild.nextSibling);
});