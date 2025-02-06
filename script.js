document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Verifica se há preferência salva
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Atualiza o ícone
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('darkMode', 'true');
        } else {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('darkMode', 'false');
        }
    });

    // Mantém o evento original do botão "Saiba Mais"
    document.querySelector('.button').addEventListener('click', () => {
        alert('Mais informações em breve!');
    });
});

