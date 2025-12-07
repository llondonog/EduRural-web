# EduRural - Página de Inscripción

Proyecto web para el reclutamiento de talento para EduRural, una plataforma educativa offline para comunidades rurales.

## Características

- **Diseño Responsive**: Adaptado para dispositivos móviles y desktop
- **Colores Corporativos**: Paleta de verdes, dorados y blancos
- **Formulario de Inscripción**: Captura nombres, apellidos, email y ocupación
- **Modales Informativos**: Muestra misión y visión de la organización
- **Notificaciones**: Sistema de alertas para confirmación de inscripción
- **Animaciones Suaves**: Efectos visuales modernos y profesionales

## Estructura del Proyecto

```
EduRural/
├── index.html          # Página principal
├── styles.css          # Estilos y diseño
├── script.js           # Lógica e interactividad
├── README.md           # Documentación
└── .github/
    └── copilot-instructions.md
```

## Tecnologías Utilizadas

- HTML5 semántico
- CSS3 con Flexbox y Grid
- JavaScript vanilla (ES6+)
- Google Fonts (Poppins)
- Diseño Mobile-First

## Instalación y Uso

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd EduRural
```

2. Abre el archivo `index.html` en tu navegador web

3. Para desarrollo local, puedes usar un servidor HTTP:
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx http-server

# Con PHP
php -S localhost:8000
```

## Funcionalidades

### Formulario de Inscripción
- Validación de campos obligatorios
- Validación de formato de email
- Envío de notificación al correo configurado
- Modal de confirmación de éxito

### Modales Informativos
- **Misión**: Información sobre el propósito de EduRural
- **Visión**: Objetivos y metas de la organización
- Navegación con teclado (Escape para cerrar)

### Responsive Design
- Adaptación automática para móviles
- Menú colapsable en dispositivos pequeños
- Optimización de texto y espaciado

## Configuración de Email

Para activar el envío de emails en producción, deberás configurar un servicio como:
- EmailJS
- Formspree
- Netlify Forms
- O un backend personalizado

## Deployment

### GitHub Pages
1. Sube el código a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main como fuente
4. Tu sitio estará disponible en `https://usuario.github.io/repositorio`

### Netlify
1. Conecta tu repositorio de GitHub
2. Deploy automático en cada push
3. Funciones adicionales disponibles

### Vercel
1. Importa el proyecto desde GitHub
2. Deploy automático y optimizado
3. Dominio personalizado disponible

## Personalización

### Colores
Los colores principales se pueden modificar en `styles.css`:
- Verde principal: `#2d5016`
- Verde secundario: `#4a7c59`
- Dorado: `#f4d03f`
- Fondo claro: `#f8fff8`

### Contenido
- Textos de misión y visión en `index.html`
- Email de notificación en `script.js`
- Campos del formulario en `index.html`

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## Contacto

- Email: luisag1518@gmail.com
- Proyecto: EduRural - Educación Digital Rural

---

**EduRural** - Transformando vidas, impactando territorios 🌱