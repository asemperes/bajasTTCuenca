# bajasTTCuenca
Bajas TT Cuenca Official Website

Plataforma web oficial diseñada para la **Baja TT Cuenca**, centrada en ofrecer una experiencia visual impactante para los seguidores del motor y una gestión ágil de las noticias del campeonato.

## 🚀 Características Principales

### 📸 Diseño "Racing" Avanzado

- **Imágenes Dinámicas**: Uso de `clip-path` para crear formas trapezoidales que aportan velocidad y dinamismo al layout.
- **Bordes Decorativos**: Sistema de pseudoelementos que acompañan la inclinación de las imágenes, manteniendo la coherencia visual en toda la sección de "Sobre Nosotros".

### 📰 Módulo de Noticias Inteligente

- **Inyección Dinámica (JS)**: Las noticias se cargan automáticamente mediante JavaScript, evitando la duplicación de código HTML y facilitando el mantenimiento.
- **Grid de Precisión**: Maquetación con CSS Grid y Flexbox que garantiza que todas las tarjetas tengan el mismo tamaño, alineando perfectamente los botones de "Leer noticia" independientemente de la longitud del título.
- **Truncado de Texto**: Implementación de `-webkit-line-clamp` para asegurar que las descripciones no rompan la armonía visual del grid.

### 📱 Optimización Mobile-First

- Interfaz totalmente responsive diseñada para dispositivos móviles.
- Corrección de desbordamientos (*overflow*) en secciones críticas como el formulario de contacto y menús de navegación.

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura semántica y accesible.
- **CSS3 (Custom Properties)**: Uso de variables para una gestión de colores centralizada (amarillos racing, tonos oscuros).
- **JavaScript (Vanilla)**: Lógica de paginación y renderizado dinámico de artículos.
  
🗺️ Estado del Proyecto (Roadmap)

[x] Index / Home: Estructura principal y Hero section terminada.
[x] Sobre Nosotros: Sección con imágenes dinámicas y bordes decorativos.
[x] Noticias: Grid dinámico con JavaScript y paginación funcional.
[ ] Multimedia: Galería de fotos y vídeos de las etapas (Próximamente).
[ ] Contacto: Formulario de inscripción y consultas técnicas.
[ ] Patrocinadores: Espacio dedicado a las marcas que apoyan la Baja TT Cuenca.
