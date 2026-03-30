document.addEventListener('DOMContentLoaded', () => {
    // High-performance Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    };

    // Throttled scroll listener
    let scrollTimeout: number | undefined;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = window.requestAnimationFrame(() => {
                handleScroll();
                scrollTimeout = undefined;
            });
        }
    });

    // Smooth Scrolling for Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href) {
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = navbar?.offsetHeight || 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Subtle Hover Effects Logic (if needed)
    // Add micro-animations or state management here
});
