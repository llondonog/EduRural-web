// Elementos DOM
const misionBtn = document.getElementById('misionBtn');
const visionBtn = document.getElementById('visionBtn');
const misionModal = document.getElementById('misionModal');
const visionModal = document.getElementById('visionModal');
const successModal = document.getElementById('successModal');
const inscriptionForm = document.getElementById('inscriptionForm');
const closeButtons = document.querySelectorAll('.close');

// Función para abrir modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Función para cerrar modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Event listeners para botones de misión y visión
misionBtn.addEventListener('click', () => openModal('misionModal'));
visionBtn.addEventListener('click', () => openModal('visionModal'));

// Event listeners para cerrar modals
closeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const modalId = e.target.getAttribute('data-modal');
        closeModal(modalId);
    });
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Función para enviar email usando EmailJS
async function sendEmail(formData) {
    const templateParams = {
        to_email: 'luisag1518@gmail.com',
        from_name: `${formData.nombres} ${formData.apellidos}`,
        from_email: formData.email,
        ocupacion: formData.ocupacion,
        message: `Nueva inscripción al proyecto EduRural:
        
Nombre completo: ${formData.nombres} ${formData.apellidos}
Correo electrónico: ${formData.email}
Ocupación: ${formData.ocupacion}
Disponibilidad semanal: ${formData.disponibilidad}
Motivación: ${formData.motivacion}
Fecha de inscripción: ${new Date().toLocaleDateString('es-ES')}
        
¡Una nueva persona quiere unirse al equipo EduRural!`
    };

    try {
        // Simular envío de email (en producción usarías EmailJS o similar)
        console.log('Enviando email con datos:', templateParams);
        
        // Simular delay de envío
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        return { success: true };
    } catch (error) {
        console.error('Error al enviar email:', error);
        return { success: false, error };
    }
}

// Manejo del formulario
inscriptionForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Obtener datos del formulario
    const formData = {
        nombres: document.getElementById('nombres').value.trim(),
        apellidos: document.getElementById('apellidos').value.trim(),
        email: document.getElementById('email').value.trim(),
        ocupacion: document.getElementById('ocupacion').value.trim(),
        disponibilidad: document.getElementById('disponibilidad').value,
        motivacion: document.getElementById('motivacion').value.trim()
    };
    
    // Validaciones básicas
    if (!formData.nombres || !formData.apellidos || !formData.email || !formData.ocupacion || !formData.disponibilidad || !formData.motivacion) {
        alert('Por favor, completa todos los campos obligatorios. 📝💚');
        return;
    }
    
    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    
    // Deshabilitar botón durante el envío
    const submitBtn = inscriptionForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '✨ Procesando tu inscripción... ✨';
    submitBtn.disabled = true;
    
    try {
        // Enviar email
        const result = await sendEmail(formData);
        
        if (result.success) {
            // Agregar efecto de celebración
            createConfetti();
            
            // Mostrar modal de éxito
            setTimeout(() => {
                openModal('successModal');
            }, 500);
            
            // Limpiar formulario
            inscriptionForm.reset();
            
            // Log para desarrollo (puedes remover esto en producción)
            console.log('Inscripción exitosa:', formData);
        } else {
            alert('¡Ups! 😅 Algo no salió como esperábamos. ¿Podrías intentar nuevamente? ¡Estamos emocionados de conocerte! 💚');
        }
    } catch (error) {
        console.error('Error en el proceso de inscripción:', error);
        alert('¡Ups! 😅 Algo no salió como esperábamos. ¿Podrías intentar nuevamente? ¡Estamos emocionados de conocerte! 💚');
    } finally {
        // Rehabilitar botón
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Efectos visuales adicionales
document.addEventListener('DOMContentLoaded', () => {
    // Animación de entrada para el hero
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    setTimeout(() => {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        heroTitle.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 100);
        
        setTimeout(() => {
            heroSubtitle.style.opacity = '0';
            heroSubtitle.style.transform = 'translateY(30px)';
            heroSubtitle.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                heroSubtitle.style.opacity = '1';
                heroSubtitle.style.transform = 'translateY(0)';
            }, 100);
        }, 400);
    }, 200);
    
    // Efecto de focus mejorado en inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.02)';
            input.parentElement.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'scale(1)';
        });
    });
});

// Función para crear efecto de confetti
function createConfetti() {
    const colors = ['#ffd700', '#4a7c59', '#2d5016', '#ffed4e', '#90ee90'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}vw;
            top: -10px;
            z-index: 10000;
            border-radius: 50%;
            pointer-events: none;
            animation: confetti-fall ${2 + Math.random() * 3}s linear forwards;
        `;
        
        document.body.appendChild(confetti);
        
        // Remover confetti después de la animación
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
}

// Función para manejar el teclado (Escape para cerrar modals)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal[style*="block"]');
        openModals.forEach(modal => {
            modal.style.display = 'none';
        });
    }
});