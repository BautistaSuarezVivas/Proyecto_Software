// 1. Interacción del Menú Hamburguesa para móviles
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Cerrar el menú al hacer clic en un enlace (en versión móvil)
document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// 2. Simulación de envío del formulario de contacto
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener los datos (opcional para demostrar funcionalidad)
    const nombre = document.getElementById("nombre").value;
    
    // Cambiar el texto del botón temporalmente
    const btn = contactForm.querySelector("button");
    const textoOriginal = btn.textContent;
    btn.textContent = "Enviando...";
    btn.style.backgroundColor = "#27ae60"; // Verde éxito

    // Simular un retraso de red de 1 segundo
    setTimeout(() => {
        alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto pronto.`);
        
        // Restaurar el botón y limpiar el formulario
        btn.textContent = textoOriginal;
        btn.style.backgroundColor = "";
        contactForm.reset();
    }, 1000);
});