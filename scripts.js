document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buy-button');
    const whatsappNumber = '593999097453'; // Número de WhatsApp deseado con el código de país para Ecuador

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            const message = `Hola,👋  estoy interesado en comprar la figura de ${product} de Anime Store. ¿Podría darme más detalles?`;
            const advertisement = ' ¡✨No te pierdas nuestras ofertas exclusivas✨! ';
            const fullMessage = `${message} ${advertisement}`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
            
            // Validar el número de WhatsApp
            if (/^\d{11,15}$/.test(whatsappNumber)) {
                window.location.href = whatsappUrl;
            } else {
                alert('El número de WhatsApp no es válido.');
            }
        });
    });
});