/* ============================================================
   FORMIEGEO - JavaScript Principal
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ======================================================
       1) BOTÃO WHATSAPP FLUTUANTE
       ====================================================== */
    var waButton = document.createElement('a');
    var waIcon = document.createElement('img');

    waIcon.src = 'https://logodownload.org/wp-content/uploads/2015/04/Whatsapp-logo-vetor.png';
    waIcon.alt = 'Fale conosco pelo WhatsApp!';
    waIcon.style.width = '50px';

    waButton.href = 'https://wa.me/5541988620572?text=Olá, vim através do site e quero saber mais sobre topografia';
    waButton.target = '_blank';
    waButton.style.position = 'fixed';
    waButton.style.bottom = '20px';
    waButton.style.right = '20px';
    waButton.style.zIndex = '1000';
    waButton.style.width = '60px';
    waButton.style.height = '60px';
    waButton.style.borderRadius = '50%';
    waButton.style.backgroundColor = '#FFFFFF';
    waButton.style.boxShadow = '0 2px 5px rgba(0,0,0,.3)';
    waButton.style.display = 'flex';
    waButton.style.justifyContent = 'center';
    waButton.style.alignItems = 'center';

    waButton.appendChild(waIcon);
    document.body.appendChild(waButton);

    console.log('🐜 FormiGeo - Site carregado com sucesso!');


    /* ======================================================
       2) SLIDESHOW AUTOMÁTICO DO HERO
       ====================================================== */
    const slides      = document.querySelectorAll('.hero-slideshow .slide');
    const indicadores = document.querySelectorAll('.slide-indicadores span');
    const btnPrev     = document.querySelector('.slide-prev');
    const btnNext     = document.querySelector('.slide-next');
    const container   = document.querySelector('.hero-slideshow');

    // Se essa página não tem slideshow, encerra sem erro
    if (!container || slides.length === 0) return;

    let indice = 0;
    let timer  = null;
    const INTERVALO = 4000; // troca a cada 4 segundos

    function mostrarSlide(n) {
        slides.forEach(s => s.classList.remove('ativo'));
        indicadores.forEach(i => i.classList.remove('ativo'));

        indice = (n + slides.length) % slides.length;

        slides[indice].classList.add('ativo');
        if (indicadores[indice]) indicadores[indice].classList.add('ativo');
    }

    function proximo()  { mostrarSlide(indice + 1); }
    function anterior() { mostrarSlide(indice - 1); }

    function iniciarAuto() {
        pararAuto();
        timer = setInterval(proximo, INTERVALO);
    }

    function pararAuto() {
        if (timer) clearInterval(timer);
    }

    // Indicadores clicáveis
    indicadores.forEach((ponto, i) => {
        ponto.addEventListener('click', () => {
            mostrarSlide(i);
            iniciarAuto();
        });
    });

    // Pausa ao passar o mouse (desktop)
    container.addEventListener('mouseenter', pararAuto);
    container.addEventListener('mouseleave', iniciarAuto);

    // Swipe no celular
    let touchStartX = 0;

    container.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        pararAuto();
    }, { passive: true });

    container.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) {
            diff > 0 ? proximo() : anterior();
        }
        iniciarAuto();
    }, { passive: true });

    // Inicia o slideshow
    iniciarAuto();

});
