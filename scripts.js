// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los botones con la clase 'buy-button'
    const buttons = document.querySelectorAll('.buy-button');
    // Número de WhatsApp deseado con el código de país para Ecuador
    const whatsappNumber = '593999097453';

    // Itera sobre cada botón
    buttons.forEach(button => {
        // Agrega un evento de clic a cada botón
        button.addEventListener('click', function() {
            // Obtiene el nombre del producto desde el atributo 'data-product' del botón
            const product = this.getAttribute('data-product');
            // Mensaje personalizado para WhatsApp
            const message = `👋 Hola, estoy interesado en comprar la figura de ${product} de Anime Store. ¿Podría darme más detalles?`;
            // Mensaje publicitario adicional
            const advertisement = '✨ ¡No te pierdas nuestras ofertas exclusivas! ✨';
            // Mensaje completo que se enviará a través de WhatsApp
            const fullMessage = `${message} ${advertisement}`;
            // URL de WhatsApp con el mensaje codificado
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
            
            // Validar el número de WhatsApp
            if (/^\d{11,15}$/.test(whatsappNumber)) {
                // Redirige a la URL de WhatsApp si el número es válido
                window.location.href = whatsappUrl;
            } else {
                // Muestra una alerta si el número de WhatsApp no es válido
                alert('El número de WhatsApp no es válido.');
            }
        });
    });
});