// Botão WhatsApp flutuante
document.addEventListener('DOMContentLoaded', function() {
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
});