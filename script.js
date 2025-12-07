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
        ocupacion: document.getElementById('ocupacion').value.trim()
    };
    
    // Validaciones básicas
    if (!formData.nombres || !formData.apellidos || !formData.email || !formData.ocupacion) {
        alert('Por favor, completa todos los campos obligatorios.');
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
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    try {
        // Enviar email
        const result = await sendEmail(formData);
        
        if (result.success) {
            // Mostrar modal de éxito
            openModal('successModal');
            
            // Limpiar formulario
            inscriptionForm.reset();
            
            // Log para desarrollo (puedes remover esto en producción)
            console.log('Inscripción exitosa:', formData);
        } else {
            alert('Hubo un error al procesar tu inscripción. Por favor, intenta nuevamente.');
        }
    } catch (error) {
        console.error('Error en el proceso de inscripción:', error);
        alert('Hubo un error al procesar tu inscripción. Por favor, intenta nuevamente.');
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

// Función para manejar el teclado (Escape para cerrar modals)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal[style*="block"]');
        openModals.forEach(modal => {
            modal.style.display = 'none';
        });
    }
});