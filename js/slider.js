/**
 * Square Feet - Premium Tiles & Sanitary Solutions
 * Slider JavaScript File
 * Author: Square Feet
 * Version: 1.0
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ======= Hero Slider =======
    const heroSlider = {
        slides: document.querySelectorAll('.hero-slide'),
        dots: document.querySelectorAll('.slider-dots .dot'),
        prevBtn: document.querySelector('.prev-slide'),
        nextBtn: document.querySelector('.next-slide'),
        currentSlide: 0,
        slideInterval: null,
        slideDuration: 6000, // 6 seconds per slide
        
        init: function() {
            if (this.slides.length === 0) return;
            
            // Set up event listeners for navigation
            this.setupEventListeners();
            
            // Start the autoplay
            this.startAutoPlay();
            
            // Set up animation classes
            this.setupAnimations();
        },
        
        setupEventListeners: function() {
            // Next button
            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', () => {
                    this.navigate(1);
                });
            }
            
            // Previous button
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', () => {
                    this.navigate(-1);
                });
            }
            
            // Dots
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    this.goToSlide(index);
                });
            });
            
            // Pause autoplay on hover
            const sliderContainer = document.querySelector('.hero-slider');
            if (sliderContainer) {
                sliderContainer.addEventListener('mouseenter', () => {
                    this.stopAutoPlay();
                });
                
                sliderContainer.addEventListener('mouseleave', () => {
                    this.startAutoPlay();
                });
            }
        },
        
        navigate: function(direction) {
            // Reset the autoplay timer
            this.stopAutoPlay();
            
            // Remove animation classes from the current slide
            this.removeAnimationClasses(this.currentSlide);
            
            // Calculate the new slide index
            let newIndex;
            if (direction > 0) {
                newIndex = (this.currentSlide + 1) % this.slides.length;
            } else {
                newIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            }
            
            // Go to the new slide
            this.goToSlide(newIndex);
            
            // Restart the autoplay
            this.startAutoPlay();
        },
        
        goToSlide: function(index) {
            // Remove active class from current slide and dot
            this.slides[this.currentSlide].classList.remove('active');
            if (this.dots[this.currentSlide]) {
                this.dots[this.currentSlide].classList.remove('active');
            }
            
            // Update current slide
            this.currentSlide = index;
            
            // Add active class to new slide and dot
            this.slides[this.currentSlide].classList.add('active');
            if (this.dots[this.currentSlide]) {
                this.dots[this.currentSlide].classList.add('active');
            }
            
            // Add animation classes to the new slide
            this.addAnimationClasses(this.currentSlide);
        },
        
        startAutoPlay: function() {
            this.stopAutoPlay(); // Clear any existing interval
            
            this.slideInterval = setInterval(() => {
                this.navigate(1);
            }, this.slideDuration);
        },
        
        stopAutoPlay: function() {
            clearInterval(this.slideInterval);
        },
        
        setupAnimations: function() {
            // Set up initial animations for the first slide
            this.addAnimationClasses(this.currentSlide);
            
            // Set up event listeners for animation end
            this.slides.forEach((slide, index) => {
                const animatedElements = slide.querySelectorAll('.animate__animated');
                
                animatedElements.forEach(element => {
                    element.addEventListener('animationend', () => {
                        // Remove animate__animated to prevent repeated animations
                        element.classList.remove('animate__animated');
                        
                        // Store the animation class for later use
                        const animationClass = Array.from(element.classList)
                            .find(cls => cls.startsWith('animate__') && cls !== 'animate__animated');
                        
                        if (animationClass) {
                            element.setAttribute('data-animation', animationClass);
                            element.classList.remove(animationClass);
                        }
                    });
                });
            });
        },
        
        addAnimationClasses: function(index) {
            const slide = this.slides[index];
            const animatedElements = slide.querySelectorAll('[class*="animate__"], [data-animation]');
            
            animatedElements.forEach(element => {
                // Add animate__animated class
                element.classList.add('animate__animated');
                
                // If we have a stored animation, use that
                const storedAnimation = element.getAttribute('data-animation');
                if (storedAnimation) {
                    element.classList.add(storedAnimation);
                }
            });
        },
        
        removeAnimationClasses: function(index) {
            const slide = this.slides[index];
            const animatedElements = slide.querySelectorAll('[class*="animate__"]');
            
            animatedElements.forEach(element => {
                // Store any animation classes first
                const animationClass = Array.from(element.classList)
                    .find(cls => cls.startsWith('animate__') && cls !== 'animate__animated');
                
                if (animationClass) {
                    element.setAttribute('data-animation', animationClass);
                }
                
                // Remove all animate classes
                element.classList.forEach(cls => {
                    if (cls.startsWith('animate__')) {
                        element.classList.remove(cls);
                    }
                });
            });
        }
    };
    
    // ======= Testimonial Slider =======
    const testimonialSlider = {
        slides: document.querySelectorAll('.testimonials-slider .testimonial-slide'),
        dots: document.querySelectorAll('.testimonial-dots .t-dot'),
        prevBtn: document.querySelector('.prev-testimonial'),
        nextBtn: document.querySelector('.next-testimonial'),
        currentSlide: 0,
        slideInterval: null,
        slideDuration: 5000, // 5 seconds per testimonial
        
        init: function() {
            if (this.slides.length === 0) return;
            
            // Set up event listeners for navigation
            this.setupEventListeners();
            
            // Start the autoplay
            this.startAutoPlay();
        },
        
        setupEventListeners: function() {
            // Next button
            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', () => {
                    this.navigate(1);
                });
            }
            
            // Previous button
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', () => {
                    this.navigate(-1);
                });
            }
            
            // Dots
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    this.goToSlide(index);
                });
            });
            
            // Pause autoplay on hover
            const sliderContainer = document.querySelector('.testimonials-slider');
            if (sliderContainer) {
                sliderContainer.addEventListener('mouseenter', () => {
                    this.stopAutoPlay();
                });
                
                sliderContainer.addEventListener('mouseleave', () => {
                    this.startAutoPlay();
                });
            }
        },
        
        navigate: function(direction) {
            // Reset the autoplay timer
            this.stopAutoPlay();
            
            // Calculate the new slide index
            let newIndex;
            if (direction > 0) {
                newIndex = (this.currentSlide + 1) % this.slides.length;
            } else {
                newIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            }
            
            // Go to the new slide
            this.goToSlide(newIndex);
            
            // Restart the autoplay
            this.startAutoPlay();
        },
        
        goToSlide: function(index) {
            // Hide current slide
            this.slides[this.currentSlide].style.opacity = '0';
            setTimeout(() => {
                this.slides[this.currentSlide].classList.remove('active');
                
                // Remove active class from current dot
                if (this.dots[this.currentSlide]) {
                    this.dots[this.currentSlide].classList.remove('active');
                }
                
                // Update current slide
                this.currentSlide = index;
                
                // Show new slide
                this.slides[this.currentSlide].classList.add('active');
                setTimeout(() => {
                    this.slides[this.currentSlide].style.opacity = '1';
                }, 50);
                
                // Add active class to new dot
                if (this.dots[this.currentSlide]) {
                    this.dots[this.currentSlide].classList.add('active');
                }
            }, 300);
        },
        
        startAutoPlay: function() {
            this.stopAutoPlay(); // Clear any existing interval
            
            this.slideInterval = setInterval(() => {
                this.navigate(1);
            }, this.slideDuration);
        },
        
        stopAutoPlay: function() {
            clearInterval(this.slideInterval);
        }
    };
    
    // Initialize the sliders
    heroSlider.init();
    testimonialSlider.init();
});
