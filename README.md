# ✨ Portafolio Profesional Angel Mitch v2.0 (Modular)

> Portafolio moderno con Dark Mode, animaciones fluidas, 7 proyectos y **código separado y modular**.

## 📦 Archivos Incluidos

```
📁 Portafolio/
├── 📄 index.html              ← Estructura HTML (Puro)
├── 📄 style.css               ← Estilos CSS (Dark Mode)
├── 📄 script.js               ← JavaScript (Animaciones)
├── 📄 README.md               ← Este archivo
```

## 🔧 Estructura Modular del Código

### `index.html` - HTML Puro
- Estructura semántica limpia
- Solo comentarios para personalización
- Referencias a CSS y JavaScript externos
- 7 proyectos y todas las secciones

### `style.css` - Estilos Modular
- Variables CSS para colores
- Estilos organizados por secciones
- Dark Mode profesional
- Animaciones keyframes
- Responsive design
- ~600 líneas bien comentadas

### `script.js` - JavaScript Modular
- Intersection Observer para animaciones
- Smooth scroll
- Funciones auxiliares
- Sin dependencias externas
- ~80 líneas reutilizables

---

## ✅ Ventajas de la Estructura Modular

✨ **Mantenimiento Fácil** - Cada archivo tiene una responsabilidad  
✨ **Personalización Rápida** - Cambia estilos sin tocar HTML/JS  
✨ **Rendimiento** - Archivos separados se cachean mejor  
✨ **Escalabilidad** - Fácil agregar más componentes  
✨ **Buenas Prácticas** - Separación de responsabilidades (MVC)  
✨ **Legibilidad** - Código limpio y comentado  

---

## 🚀 Inicio Rápido

### 1. Abre `index.html`
```bash
# Windows: Doble clic o arrastra a navegador
# macOS: Doble clic
# Linux: Doble clic o xdg-open index.html
```


## 🎨 Paleta de Colores (Dark Mode)

```
Fondo Principal:      #0a0a0a
Fondo Secundario:     #1a1a1a
Acento Primario:      #3b82f6  (Azul eléctrico)
Acento Secundario:    #10b981  (Verde esmeralda)
Acento Terciario:     #8b5cf6  (Violeta neón)
Texto Principal:      #e5e5e5  (Gris claro)
Títulos:              #ffffff  (Blanco)
```

## 📱 Secciones

1. **Navbar** - Menú fijo con logo UNCP
2. **Hero** - Nombre, título, información + foto
3. **Sobre Mí** - Descripción profesional
4. **Habilidades** - Badges con 3 categorías
5. **Proyectos** - 7 tarjetas con efecto glassmorphism
6. **Contacto** - CTA con botón de email
7. **Footer** - Copyright + redes sociales

## 🔧 Personalización Rápida

### Cambiar Colores
Dentro de `<style>`, busca `:root {` y modifica:
```css
--accent-primary: #3b82f6;    /* Cambiar a tu color preferido */
--accent-secondary: #10b981;
```

### Cambiar Tipografía
Actualmente usa Google Fonts: `Inter` y `Poppins`  
Para cambiar, modifica el link de fonts en `<head>`

### Agregar/Quitar Proyectos
Duplica o elimina bloques `<div class="project-card">`

## 📝 Extensiones Recomendadas

Si usas VS Code:
- **Live Server** - Para ver cambios en tiempo real
- **Prettier** - Para formatear código
- **HTML CSS Support** - Para autocompletado

## 🌐 Cómo Desplegar

### GitHub Pages
1. Sube tu carpeta a un repositorio en GitHub
2. Ve a Settings → Pages
3. Selecciona "Deploy from a branch"
4. Tu sitio estará en: `https://tu-usuario.github.io/Portafolio`

### Netlify
1. Arrastra tu carpeta a https://app.netlify.com
2. ¡Automáticamente desplegado!

### Tu Servidor
1. Sube `index.html` a tu servidor
2. Accede via `tu-dominio.com`


