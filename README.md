# 🥡 Chop Suey Internacional — Menú Digital

Sitio web provisional para el restaurante **Chop Suey Internacional**, desarrollado con
**HTML5, CSS3 y JavaScript (Vanilla ES6)**, sin frameworks ni dependencias externas.
Listo para abrir directamente en **Visual Studio Code**.

---

## 📁 Estructura del proyecto

```
chop-suey-web/
├── index.html                  → Estructura principal del sitio (HTML5)
├── css/
│   └── styles.css              → Todos los estilos, animaciones y responsive (CSS3)
├── js/
│   └── script.js               → Lógica de interacción (JavaScript ES6)
├── assets/
│   └── img/
│       ├── logo.png            → Logo del restaurante (isotipo pagoda rojo)
│       └── platillos/
│           ├── tallarin-camaron.jpg          → Foto base del platillo
│           ├── tallarin-camaron-top.png      → Capa "pasta/fideos" (desglose)
│           ├── tallarin-camaron-camarones.png→ Capa "camarones" (desglose)
│           ├── tallarin-camaron-vegetales.png→ Capa "vegetales" (desglose)
│           ├── chowmein-mixto.jpg  (+ 3 capas equivalentes)
│           ├── arroz-frito.jpg     (+ 3 capas equivalentes)
│           └── tallarin-pollo.jpg  (+ 3 capas equivalentes)
└── README.md
```

> Cada platillo tiene **1 imagen base + 3 capas PNG transparentes** que se separan
> visualmente al pasar el cursor (efecto "desglose de ingredientes") y vuelven a unirse
> al quitar el cursor.

---

## 🎨 Lenguajes y tecnologías usadas

| Archivo         | Lenguaje       | Función                                                        |
|-----------------|----------------|-----------------------------------------------------------------|
| `index.html`    | HTML5          | Estructura semántica: header, hero con pagoda temática, menú unificado, nosotros, footer |
| `css/styles.css`| CSS3           | Paleta de colores, animaciones `@keyframes`, transiciones, responsive |
| `js/script.js`  | JavaScript ES6 | Preloader, scroll header, tabs de menú, scroll reveal, hamburguesa |

No se usó ningún framework (React, Vue, Bootstrap, etc.) para mantenerlo ligero,
rápido y 100% editable a mano, tal como lo pediste.

---

## 🎨 Paleta de colores (extraída del logo)

| Color             | Hex        | Uso                             |
|-------------------|-----------|----------------------------------|
| Rojo principal    | `#c8102e` | Fondo del logo, botones, acentos |
| Rojo oscuro       | `#8f0b20` | Gradientes, sombras              |
| Rojo claro        | `#e3173a` | Hover, detalles                  |
| Negro carbón      | `#141414` | Fondos oscuros (hero, menú)      |
| Crema             | `#fdf6ee` | Fondos claros                    |
| Dorado            | `#d4af37` | Precios, detalles premium        |

---

## ✨ Animaciones incluidas

1. **Preloader de bienvenida:** pantalla roja a pantalla completa con el logo en grande,
   una barra de carga y un efecto de **goteo (cortina líquida)** que revela el sitio.
2. **Vapor/humo:** cada tarjeta de platillo emite vapor animado con CSS puro (`@keyframes steamRise`).
3. **Desglose de ingredientes:** al pasar el cursor sobre un platillo, las capas
   (fideos, proteína, vegetales) se separan visualmente y luego regresan a su posición
   original en una sola pieza al quitar el cursor.
4. **Scroll Reveal:** las secciones aparecen suavemente al hacer scroll (usando `IntersectionObserver`).
5. **Header dinámico:** cambia de transparente a sólido al hacer scroll.
6. **Botón flotante de WhatsApp** con animación de flotación continua.

---

## 🚀 Cómo ejecutar el proyecto en Visual Studio Code

1. Descomprime la carpeta `chop-suey-web` en tu computadora.
2. Ábrela en Visual Studio Code (`Archivo > Abrir carpeta`).
3. Instala la extensión **Live Server** (de Ritwick Dey) desde el marketplace de VS Code.
4. Haz clic derecho sobre `index.html` → **"Open with Live Server"**.
5. El sitio se abrirá en tu navegador en `http://127.0.0.1:5500/` (o similar).

> Alternativamente, puedes abrir `index.html` directamente con doble clic,
> aunque se recomienda Live Server para recargar en caliente mientras editas.

---

## 🖼️ Reemplazar imágenes por fotos reales de alta calidad

Las imágenes actuales en `assets/img/platillos/` fueron generadas a partir de las
fotos que compartiste como punto de partida. Para producción final, reemplaza estos
archivos por fotografías profesionales del mismo nombre exacto (mismo `.jpg`) y,
si quieres mantener el efecto de desglose, genera también versiones recortadas de
cada ingrediente en PNG con fondo transparente usando Photoshop, remove.bg o Figma.

---

## 📌 Pendientes / información que puede mejorar el sitio

- Número real de WhatsApp y redes sociales (actualmente son placeholders).
- Dirección exacta y horario definitivo.
- Fotos profesionales en alta resolución de cada platillo (idealmente 1000x800px o más).
- Precios reales definidos por el restaurante (los actuales son referenciales en córdobas).
- Si más adelante quieres pasar esto a un sitio dinámico (con backend, base de datos
  y panel de administración para editar el menú), se puede evolucionar a Node.js +
  Express + MongoDB/MySQL, o integrarlo a lo que ya ofreces en Tap Solutions (NFC + web).

---

**Desarrollado como sitio provisional — Chop Suey Internacional © 2026**
