document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial Hero Animation
    const heroTimeline = gsap.timeline();
    
    heroTimeline.to('.hero-content', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2
    });

    // Parallax effect for the 3D Placeholder
    const parallaxImages = document.querySelectorAll(".hero-3d-placeholder");
    parallaxImages.forEach(img => {
        const speed = img.getAttribute("data-speed") || 0.5;
        gsap.to(img, {
            y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    });

    // Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.gsap-reveal');
    
    revealElements.forEach(el => {
        const delay = el.getAttribute('data-delay') || 0;
        
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: delay,
            scrollTrigger: {
                trigger: el,
                start: "top 85%", // Trigger when element is 85% down the viewport
                toggleActions: "play none none reverse"
            }
        });
    });

    // Header Blur Effect
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Image Parallax on the About Section Image
    gsap.to(".about-image img", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: ".about-image",
            start: "top bottom", 
            end: "bottom top",
            scrub: true
        }, 
    });
});
