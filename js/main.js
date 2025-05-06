/**
 * Square Feet - Premium Tiles & Sanitary Solutions
 * Main JavaScript File
 * Author: Square Feet
 * Version: 1.0
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ======= Mobile Menu Toggle =======
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
            
            // Toggle the menu icon
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close the mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = mainNav?.contains(event.target);
        const isClickOnToggle = mobileMenuToggle?.contains(event.target);
        
        if (mainNav?.classList.contains('active') && !isClickInsideNav && !isClickOnToggle) {
            mainNav.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    // ======= Header Scroll Effect =======
    const header = document.getElementById('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }
    
    // ======= Scroll Animation =======
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('in-view');
            }
        });
    }
    
    // Check for animations on page load
    checkScroll();
    
    // Check for animations on scroll
    window.addEventListener('scroll', checkScroll);
    
    // ======= FAQ Accordion =======
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                // Toggle the active class on the clicked item
                item.classList.toggle('active');
                
                // Toggle the icon
                const toggleIcon = item.querySelector('.toggle-icon i');
                if (toggleIcon) {
                    if (toggleIcon.classList.contains('fa-plus')) {
                        toggleIcon.classList.remove('fa-plus');
                        toggleIcon.classList.add('fa-minus');
                    } else {
                        toggleIcon.classList.remove('fa-minus');
                        toggleIcon.classList.add('fa-plus');
                    }
                }
                
                // Close other open items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        
                        const otherIcon = otherItem.querySelector('.toggle-icon i');
                        if (otherIcon) {
                            otherIcon.classList.remove('fa-minus');
                            otherIcon.classList.add('fa-plus');
                        }
                    }
                });
            });
        }
    });
    
    // ======= Jobs Accordion =======
    const jobItems = document.querySelectorAll('.job-item');
    
    jobItems.forEach(item => {
        const header = item.querySelector('.job-header');
        
        if (header) {
            header.addEventListener('click', () => {
                // Toggle the active class on the clicked item
                item.classList.toggle('active');
                
                // Toggle the icon
                const toggleIcon = item.querySelector('.job-toggle i');
                if (toggleIcon) {
                    if (toggleIcon.classList.contains('fa-plus')) {
                        toggleIcon.classList.remove('fa-plus');
                        toggleIcon.classList.add('fa-minus');
                    } else {
                        toggleIcon.classList.remove('fa-minus');
                        toggleIcon.classList.add('fa-plus');
                    }
                }
                
                // Close other open items
                jobItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        
                        const otherIcon = otherItem.querySelector('.job-toggle i');
                        if (otherIcon) {
                            otherIcon.classList.remove('fa-minus');
                            otherIcon.classList.add('fa-plus');
                        }
                    }
                });
            });
        }
    });
    
    // ======= Other Position Field Toggle for Career Form =======
    const positionSelect = document.getElementById('position');
    const otherPositionGroup = document.getElementById('other-position-group');
    const otherPositionInput = document.getElementById('other-position');
    
    if (positionSelect && otherPositionGroup && otherPositionInput) {
        positionSelect.addEventListener('change', function() {
            if (this.value === 'Other') {
                otherPositionGroup.style.display = 'block';
                otherPositionInput.required = true;
            } else {
                otherPositionGroup.style.display = 'none';
                otherPositionInput.required = false;
            }
        });
    }
    
    // ======= Smooth Scrolling for Anchor Links =======
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only proceed if the href is not just "#"
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navHeight = document.getElementById('header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    
                    window.scrollTo({
                        top: targetPosition - navHeight,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (mainNav && mainNav.classList.contains('active')) {
                        mainNav.classList.remove('active');
                        
                        if (mobileMenuToggle) {
                            mobileMenuToggle.classList.remove('active');
                            const icon = mobileMenuToggle.querySelector('i');
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                }
            }
        });
    });
    
    // ======= Active Navigation Link Based on Scroll Position =======
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            const navLink = document.querySelector(`.main-nav a[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                if (navLink) {
                    navLink.classList.add('active');
                }
            } else {
                if (navLink) {
                    navLink.classList.remove('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Initialize pointer events for gallery items (for touch devices)
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryItems.length > 0) {
        if ('ontouchstart' in window) {
            galleryItems.forEach(item => {
                item.addEventListener('touchstart', function() {
                    this.classList.add('touch-focus');
                });
                
                item.addEventListener('touchend', function() {
                    setTimeout(() => {
                        this.classList.remove('touch-focus');
                    }, 300);
                });
            });
        }
    }
});
