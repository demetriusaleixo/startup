document.querySelector('a[href = "inicio"]').addEventListener('click', function(evento) {
    evento.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelector('a[href = "setores"]').addEventListener('click', function(evento) {
    evento.preventDefault();
    document.querySelector('#setores').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('a[href = "destaques"]').addEventListener('click', function(evento) {
    evento.preventDefault();
    document.querySelector('#destaques').scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('a[href = "sobre"]').addEventListener('click', function(evento) {
    evento.preventDefault();
    document.querySelector('#rodape').scrollIntoView({
        behavior: 'smooth'
    });
});