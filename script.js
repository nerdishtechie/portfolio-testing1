document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});


    // Typing effect
    const typingText = document.getElementById('typing-text');
    const words = ["MERN Stack Developer", "Web Developer", "Tech Enthusiast"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = "";
    let isDeleting = false;

    const type = () => {
        if (isDeleting) {
            currentWord = words[wordIndex].substring(0, letterIndex--);
        } else {
            currentWord = words[wordIndex].substring(0, letterIndex++);
        }

        typingText.textContent = currentWord;

        if (!isDeleting && letterIndex === words[wordIndex].length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 100 : 200);
        }
    };

    type();

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scroll for internal links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });

            navMenu.classList.remove('active');
        });
    });
});
