const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        feedback.textContent = 'Obrigado! Sua mensagem foi recebida. Em breve entrarei em contato.';
        form.reset();
    });
}
