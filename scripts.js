document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buy-button');
    const whatsappNumber = '0999097453'; // Número de WhatsApp deseado

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            const message = `👋 Hola, estoy interesado en comprar el ${product} de Anime Store. ¿Podría darme más detalles?`;
            const advertisement = '✨ ¡No te pierdas nuestras ofertas exclusivas! ✨';
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message + ' ' + advertisement)}`;
            
            // Validar el número de WhatsApp
            if (whatsappNumber.match(/^\d{10,15}$/)) {
                window.location.href = whatsappUrl;
            } else {
                alert('El número de WhatsApp no es válido.');
            }
        });
    });
});