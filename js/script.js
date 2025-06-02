// js/script.js

// Esperamos a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', function () {

  // Ejemplo de validación simple para el formulario de contacto
  const contactoForm = document.getElementById('contactoForm');
  if (contactoForm) {
    contactoForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevenimos el envío para validar
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      let errores = [];

      if (nombre.length < 3) errores.push('El nombre debe tener al menos 3 caracteres.');
      // Validar formato básico de correo
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) errores.push('Ingresa un correo válido.');
      if (mensaje.length < 10) errores.push('El mensaje debe tener al menos 10 caracteres.');

      const alerta = document.getElementById('formAlert');
      if (errores.length > 0) {
        // Mostrar errores
        alerta.innerHTML = errores.map(err => `<div>${err}</div>`).join('');
        alerta.classList.remove('d-none');
      } else {
        // Aquí iría el envío real (por ejemplo, usando fetch a un endpoint o Formspree)
        alerta.classList.add('d-none');
        // Simular envío exitoso:
        alert('¡Gracias! Tu mensaje ha sido enviado.');
        contactoForm.reset();
      }
    });
  }

  // Si se desea lógica adicional para abrir/cerrar modales, se puede agregar aquí.
});
