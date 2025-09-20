document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnContactar');

    btn.addEventListener('click', () => {
        alert(
            'Contacto Personal:\n' +
            'Teléfono: (+504) 3264-2063\n' +
            'Email: jose.rhdezesp@gmail.com\n' +
            'Ubicación: Brisas de Altamira, Comayagua, Honduras'
        );
        btn.disabled = true;
        btn.textContent = 'Enviado';
        setTimeout(() => {
            btn.disabled = false;
            btn.textContent = 'Mostrar contacto personal';
        }, 3000);
    });

    btn.addEventListener('mouseenter', () => {
        if (!btn.disabled) btn.textContent = 'Haga click para ver el contacto';
    });

    btn.addEventListener('mouseleave', () => {
        if (!btn.disabled) btn.textContent = 'Mostrar contacto personal';
    });

    const sections = document.querySelectorAll('main section');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});
