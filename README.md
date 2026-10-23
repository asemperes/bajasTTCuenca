# bajasTTCuenca
> Bajas TT Cuenca Official Website

Plataforma web oficial diseñada para la **Baja TT Cuenca**, centrada en ofrecer una experiencia visual impactante y buena interactividad para los seguidores de el rallye de Cuenca.

## 🚀 Características Principales

### 📱 Optimización para móvil

- Interfaz totalmente responsive diseñada para dispositivos móviles.
- Corrección de desbordamientos (*overflow*) en secciones críticas como el formulario de contacto y menús de navegación.
- Faltan los submenús de navegación en la versión responsive

## 🛠️ Tecnologías utilizadas

- **Astro**: Generación de la web estática, con layout y componentes compartidos.
- **CSS3**: Uso de variables para una gestión de colores centralizada.
- **Tailwind CSS v4**: Disponible para estilos nuevos (sin el reset de Tailwind, para no alterar el diseño actual).
- **JavaScript/TypeScript**: Interactividad (menú móvil, scroll reveal, lightbox, formularios).

## 💻 Desarrollo

```bash
npm install      # instalar dependencias
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera la web en dist/
```

## 📁 Estructura

```
public/                 Recursos estáticos tal cual (img, videos, pdf, revistas)
src/
  config/evento.ts      Año y datos de la edición actual ← cambiar aquí cada año
  layouts/BaseLayout    <head> común, cabecera, footer y scripts globales
  components/           Header, Footer, Patrocinadores
  pages/                Una página por ruta (noticias/AAAA/slug.astro = cada noticia)
  styles/
    global.css          Tailwind + capas CSS + colores como clases de Tailwind
    base.css            Variables, reset y estilos compartidos
    components/         Estilos de cabecera, footer y patrocinadores
    pages/              Estilos de cada página
  scripts/              Scripts compartidos del cliente
herramientas/           Script antiguo de generación de noticias desde JSON
```

## 📅 Cambio de edición

Edita `src/config/evento.ts`: el año, las ediciones (XIII Rallye, II Baja...) y el copyright se actualizan solos.
  
## 🗺️ Estado del Proyecto (Roadmap)

[x] Index / Home: Estructura principal de indexado terminada.

[X] Sobre Nosotros: Imagenes y texto correctos, falta terminar la sección de Eventos.

[X] Nuestra Historia: Línea temporal de la historia de cuencamotor

[X] Noticias: Grid responsive con todas las noticias que van saliendo, se actualizan manualmente.

[X] Multimedia: Galería de fotos (falta la galería de vídeos).

[X] Contacto: Consultas técnicas.

[X] Patrocinadores: Espacio dedicado a las marcas que apoyan la Baja TT Cuenca.

[X] Inscripciones: Enlaces externos para inscribirse en cada competición, ver reglamentos etc...

[ ] Inscripciones Voluntarios: Voluntarios que quieran contribuir a cuencamotor.
