
        // Preloader
        window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1000);
        });
        
        // Mobile Menu Toggle
        const menuBtn = document.querySelector('.menu-btn');
        const nav = document.querySelector('nav');
        
        menuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuBtn.innerHTML = nav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', function() {
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
        
        // Sticky Header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });
        
        // Back to Top Button
        const backToTopBtn = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Form Submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
        
        // Animate elements when scrolling
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.skill-card, .project-card, .timeline-content, .contact-card');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Set initial state for animated elements
        document.querySelectorAll('.skill-card, .project-card, .timeline-content, .contact-card').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.5s ease';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
        
        // Typewriter Effect for Hero Text
        const typewriter = function() {
            const texts = ["Java Developer", "Cloud Enthusiast", "Problem Solver", "Tech Lover"];
            let count = 0;
            let index = 0;
            let currentText = "";
            let letter = "";
            
            (function type() {
                if (count === texts.length) {
                    count = 0;
                }
                
                currentText = texts[count];
                letter = currentText.slice(0, ++index);
                
                document.querySelector(".hero-content h3").textContent = letter;
                
                if (letter.length === currentText.length) {
                    setTimeout(() => {
                        erase();
                    }, 1500);
                    return;
                }
                
                setTimeout(type, 100);
            })();
            
            function erase() {
                if (index === 0) {
                    count++;
                    setTimeout(() => {
                        type();
                    }, 500);
                    return;
                }
                
                letter = currentText.slice(0, --index);
                document.querySelector(".hero-content h3").textContent = letter;
                setTimeout(erase, 50);
            }
        };
        
        // Start typewriter effect after page loads
        setTimeout(typewriter, 1000);
    