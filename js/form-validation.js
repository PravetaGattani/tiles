/**
 * Square Feet - Premium Tiles & Sanitary Solutions
 * Form Validation JavaScript File
 * Author: Square Feet
 * Version: 1.0
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ======= Contact Form Validation =======
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset form status
            if (formStatus) {
                formStatus.className = '';
                formStatus.style.display = 'none';
                formStatus.textContent = '';
            }
            
            // Get form data
            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const phone = document.getElementById('phone')?.value.trim();
            const subject = document.getElementById('subject')?.value.trim();
            const message = document.getElementById('message')?.value.trim();
            
            // Validate form data
            let isValid = true;
            let errorMessage = '';
            
            // Name validation
            if (!name) {
                isValid = false;
                errorMessage += 'Please enter your name.<br>';
                highlightField('name', true);
            } else {
                highlightField('name', false);
            }
            
            // Email validation
            if (!email) {
                isValid = false;
                errorMessage += 'Please enter your email address.<br>';
                highlightField('email', true);
            } else if (!isValidEmail(email)) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.<br>';
                highlightField('email', true);
            } else {
                highlightField('email', false);
            }
            
            // Phone validation
            if (!phone) {
                isValid = false;
                errorMessage += 'Please enter your phone number.<br>';
                highlightField('phone', true);
            } else if (!isValidPhone(phone)) {
                isValid = false;
                errorMessage += 'Please enter a valid phone number.<br>';
                highlightField('phone', true);
            } else {
                highlightField('phone', false);
            }
            
            // Message validation
            if (!message) {
                isValid = false;
                errorMessage += 'Please enter your message.<br>';
                highlightField('message', true);
            } else {
                highlightField('message', false);
            }
            
            // If the form is not valid, show error message
            if (!isValid) {
                if (formStatus) {
                    formStatus.className = 'error';
                    formStatus.style.display = 'block';
                    formStatus.innerHTML = errorMessage;
                }
                return;
            }
            
            // If form is valid, simulate form submission
            const submitBtn = contactForm.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
            }
            
            // Simulate sending the form (in a real implementation, this would be an AJAX request)
            setTimeout(function() {
                // Simulate successful submission
                if (formStatus) {
                    formStatus.className = 'success';
                    formStatus.style.display = 'block';
                    formStatus.textContent = 'Thank you! Your message has been sent successfully. We will get back to you as soon as possible.';
                }
                
                // Reset form
                contactForm.reset();
                
                // Enable submit button
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Message';
                }
            }, 1500);
        });
    }
    
    // ======= Career Form Validation =======
    const careerForm = document.getElementById('careerForm');
    const careerFormStatus = document.getElementById('form-status');
    
    if (careerForm) {
        careerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset form status
            if (careerFormStatus) {
                careerFormStatus.className = '';
                careerFormStatus.style.display = 'none';
                careerFormStatus.textContent = '';
            }
            
            // Get form data
            const fullName = document.getElementById('full-name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const phone = document.getElementById('phone')?.value.trim();
            const position = document.getElementById('position')?.value;
            const otherPosition = document.getElementById('other-position')?.value.trim();
            const experience = document.getElementById('experience')?.value.trim();
            const coverLetter = document.getElementById('cover-letter')?.value.trim();
            const resume = document.getElementById('resume')?.files[0];
            const termsCheckbox = document.getElementById('terms')?.checked;
            
            // Validate form data
            let isValid = true;
            let errorMessage = '';
            
            // Full Name validation
            if (!fullName) {
                isValid = false;
                errorMessage += 'Please enter your full name.<br>';
                highlightField('full-name', true);
            } else {
                highlightField('full-name', false);
            }
            
            // Email validation
            if (!email) {
                isValid = false;
                errorMessage += 'Please enter your email address.<br>';
                highlightField('email', true);
            } else if (!isValidEmail(email)) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.<br>';
                highlightField('email', true);
            } else {
                highlightField('email', false);
            }
            
            // Phone validation
            if (!phone) {
                isValid = false;
                errorMessage += 'Please enter your phone number.<br>';
                highlightField('phone', true);
            } else if (!isValidPhone(phone)) {
                isValid = false;
                errorMessage += 'Please enter a valid phone number.<br>';
                highlightField('phone', true);
            } else {
                highlightField('phone', false);
            }
            
            // Position validation
            if (!position) {
                isValid = false;
                errorMessage += 'Please select a position.<br>';
                highlightField('position', true);
            } else {
                highlightField('position', false);
                
                // Other Position validation (if "Other" is selected)
                if (position === 'Other' && !otherPosition) {
                    isValid = false;
                    errorMessage += 'Please specify the position.<br>';
                    highlightField('other-position', true);
                } else if (position === 'Other') {
                    highlightField('other-position', false);
                }
            }
            
            // Experience validation
            if (!experience) {
                isValid = false;
                errorMessage += 'Please enter your experience in years.<br>';
                highlightField('experience', true);
            } else {
                highlightField('experience', false);
            }
            
            // Cover Letter validation
            if (!coverLetter) {
                isValid = false;
                errorMessage += 'Please enter your cover letter.<br>';
                highlightField('cover-letter', true);
            } else {
                highlightField('cover-letter', false);
            }
            
            // Resume validation
            if (!resume) {
                isValid = false;
                errorMessage += 'Please upload your resume.<br>';
                highlightField('resume', true);
            } else {
                // Check file size (max 2MB)
                if (resume.size > 2 * 1024 * 1024) {
                    isValid = false;
                    errorMessage += 'Resume file size should not exceed 2MB.<br>';
                    highlightField('resume', true);
                } else {
                    // Check file type
                    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                    if (!allowedTypes.includes(resume.type)) {
                        isValid = false;
                        errorMessage += 'Please upload your resume in PDF, DOC, or DOCX format.<br>';
                        highlightField('resume', true);
                    } else {
                        highlightField('resume', false);
                    }
                }
            }
            
            // Terms checkbox validation
            if (!termsCheckbox) {
                isValid = false;
                errorMessage += 'Please agree to the terms and conditions.<br>';
                document.querySelector('.checkbox-group').classList.add('error');
            } else {
                document.querySelector('.checkbox-group').classList.remove('error');
            }
            
            // If the form is not valid, show error message
            if (!isValid) {
                if (careerFormStatus) {
                    careerFormStatus.className = 'error';
                    careerFormStatus.style.display = 'block';
                    careerFormStatus.innerHTML = errorMessage;
                }
                return;
            }
            
            // If form is valid, simulate form submission
            const submitBtn = careerForm.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Submitting...';
            }
            
            // Simulate sending the form (in a real implementation, this would be an AJAX request)
            setTimeout(function() {
                // Simulate successful submission
                if (careerFormStatus) {
                    careerFormStatus.className = 'success';
                    careerFormStatus.style.display = 'block';
                    careerFormStatus.textContent = 'Thank you for your application! We will review your details and get back to you shortly.';
                }
                
                // Reset form
                careerForm.reset();
                
                // Reset the "Other" position field
                if (document.getElementById('other-position-group')) {
                    document.getElementById('other-position-group').style.display = 'none';
                }
                
                // Enable submit button
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Submit Application';
                }
            }, 1500);
        });
    }
    
    // ======= Newsletter Form Validation =======
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterStatus = document.getElementById('newsletter-status');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset form status
            if (newsletterStatus) {
                newsletterStatus.className = '';
                newsletterStatus.style.display = 'none';
                newsletterStatus.textContent = '';
            }
            
            // Get email
            const email = document.getElementById('newsletter-email')?.value.trim();
            
            // Validate email
            let isValid = true;
            
            if (!email) {
                isValid = false;
                newsletterStatus.className = 'error';
                newsletterStatus.style.display = 'block';
                newsletterStatus.textContent = 'Please enter your email address.';
                document.getElementById('newsletter-email').classList.add('error');
            } else if (!isValidEmail(email)) {
                isValid = false;
                newsletterStatus.className = 'error';
                newsletterStatus.style.display = 'block';
                newsletterStatus.textContent = 'Please enter a valid email address.';
                document.getElementById('newsletter-email').classList.add('error');
            } else {
                document.getElementById('newsletter-email').classList.remove('error');
            }
            
            if (!isValid) return;
            
            // If email is valid, simulate form submission
            const submitBtn = newsletterForm.querySelector('button');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Subscribing...';
            }
            
            // Simulate sending the form (in a real implementation, this would be an AJAX request)
            setTimeout(function() {
                // Simulate successful submission
                if (newsletterStatus) {
                    newsletterStatus.className = 'success';
                    newsletterStatus.style.display = 'block';
                    newsletterStatus.textContent = 'Thank you for subscribing to our newsletter!';
                }
                
                // Reset form
                newsletterForm.reset();
                
                // Enable submit button
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Subscribe';
                }
            }, 1500);
        });
    }
    
    // ======= Helper Functions =======
    
    // Validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Validate phone number (basic validation allowing various formats)
    function isValidPhone(phone) {
        // Allow for various phone formats, including international numbers
        // This is a simplified validation - you might want to use a more robust solution in production
        const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }
    
    // Highlight invalid fields
    function highlightField(fieldId, isError) {
        const field = document.getElementById(fieldId);
        if (field) {
            if (isError) {
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        }
    }
});
