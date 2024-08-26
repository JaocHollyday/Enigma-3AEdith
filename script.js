// script.js

// Função para a galeria e lightbox
document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxVideo = document.getElementById('lightbox-video');
    const lightboxIframe = document.getElementById('lightbox-iframe');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.lightbox').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const type = this.getAttribute('data-type');

            if (type === 'video') {
                lightboxVideo.src = href;
                lightboxVideo.style.display = 'block';
                lightboxImg.style.display = 'none';
                lightboxIframe.style.display = 'none';
            } else if (type === 'iframe') {
                lightboxIframe.src = href;
                lightboxIframe.style.display = 'block';
                lightboxImg.style.display = 'none';
                lightboxVideo.style.display = 'none';
            } else {
                lightboxImg.src = href;
                lightboxImg.style.display = 'block';
                lightboxVideo.style.display = 'none';
                lightboxIframe.style.display = 'none';
            }

            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
        lightboxVideo.src = '';
        lightboxIframe.src = '';
        lightboxVideo.style.display = 'none';
        lightboxIframe.style.display = 'none';
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
            lightboxVideo.src = '';
            lightboxIframe.src = '';
            lightboxVideo.style.display = 'none';
            lightboxIframe.style.display = 'none';
        }
    });
});

// Função para o botão Voltar ao Início
document.addEventListener('scroll', function() {
    const button = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
