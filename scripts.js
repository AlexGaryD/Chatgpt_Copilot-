document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buy-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            const whatsappUrl = `https://wa.me/?text=Estoy%20interesado%20en%20el%20${encodeURIComponent(product)}`;
            window.location.href = whatsappUrl;
        });
    });
});