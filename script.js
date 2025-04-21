document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 500);
    });

    // Controle do tema (claro/escuro)
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Verifica se há preferência salva
    if (localStorage.getItem('darkMode') === 'false') {
        document.body.classList.remove('dark-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        // Por padrão, usar tema escuro
        document.body.classList.add('dark-mode');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'true');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Atualiza o ícone e o tema
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('darkMode', 'false');
        }
    });

    // Animação de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação de entrada para elementos quando ficam visíveis
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    document.querySelectorAll('.feature, .gallery-item, .about-content, .hero-text, .hero-image, .status-item, .development-status, .instagram-container, .instagram-icon, .instagram-info, .video-container, .video-description').forEach(el => {
        el.classList.add('animate-ready');
        observer.observe(el);
    });
});

