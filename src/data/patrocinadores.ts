// ============================================================
// PATROCINADORES — para añadir o quitar uno, edita esta lista.
// La página y los contadores del hero se actualizan solos.
// ============================================================

export interface Patrocinador {
  nombre: string;   // texto del tooltip
  url?: string;     // sin url, el logo se muestra atenuado y sin enlace
  logo: string;     // ruta dentro de public/
  alt: string;
  clase?: string;   // clase extra de la tarjeta (p. ej. fondo-fia)
}

export const institucional: Patrocinador[] = [
  { nombre: 'Junta de Castilla-La Mancha', url: 'https://www.castillalamancha.es/', logo: '/img/logosPatros/jccm-logo.webp', alt: 'Junta CLM' },
  { nombre: 'Turismo Castilla-La Mancha', url: 'https://www.turismocastillalamancha.es/', logo: '/img/logosPatros/castilla-la-mancha.webp', alt: 'Turismo CLM' },
  { nombre: 'Diputación de Cuenca', url: 'https://www.dipucuenca.es/', logo: '/img/logosPatros/diputacion-cuenca.webp', alt: 'Diputación de Cuenca' },
  { nombre: 'Ayuntamiento de Cuenca', url: 'https://ayuntamiento.cuenca.es/', logo: '/img/logosPatros/ayuntamiento-cuenca-logo.webp', alt: 'Ayuntamiento de Cuenca' },
  { nombre: 'Ayuntamiento de Villar de Olalla', url: 'https://villardeolalla.com/', logo: '/img/logosPatros/ayuntamiento-villar-de-olalla.webp', alt: 'Ayuntamiento Villar de Olalla' },
  { nombre: 'Consejo Superior de Deportes', url: 'https://www.csd.gob.es/', logo: '/img/logosPatros/consejo-superior-de-deportes.webp', alt: 'Consejo Superior de Deportes' },
  { nombre: 'RFEDA', url: 'https://www.rfeda.es/', logo: '/img/logosPatros/rfeda-vertical.color.webp', alt: 'RFEDA' },
  { nombre: 'CERTT', url: 'https://certt.rfeda.es/', logo: '/img/logosPatros/certt-cubo.webp', alt: 'CERTT' },
  { nombre: 'FIM', url: 'https://www.fim-moto.com/en/', logo: '/img/logosPatros/fim.webp', alt: 'FIM' },
  { nombre: 'FACM', url: 'https://www.facm.es/', logo: '/img/logosPatros/facm.webp', alt: 'FACM' },
  { nombre: 'FCMM', url: 'https://fcmm.net/', logo: '/img/logosPatros/fcmm.webp', alt: 'FCMM' },
  { nombre: 'Loterías y Apuestas del Estado', url: 'https://www.loteriasyapuestas.es/', logo: '/img/logosPatros/logo-loterias.webp', alt: 'Loterías del Estado' },
  { nombre: 'FIA European Baja Cup', url: 'https://api.fia.com/', logo: '/img/logosPatros/fia-european-baja-cup.webp', alt: 'FIA European Baja Cup', clase: 'fondo-fia' },
];

export const tecnico: Patrocinador[] = [
  { nombre: 'Globalcaja', url: 'https://www.globalcaja.es/', logo: '/img/logosPatros/globalcaja.webp', alt: 'Globalcaja' },
  { nombre: 'Michelin', url: 'https://www.michelin.es/', logo: '/img/logosPatros/logo-michelin.webp', alt: 'Michelin' },
  { nombre: 'GT2I', url: 'https://www.gt2i.es/', logo: '/img/logosPatros/gt2i.webp', alt: 'GT2I' },
  { nombre: 'Euro4x4parts', url: 'https://www.euro4x4parts.com/es/', logo: '/img/logosPatros/Euro4x4parts.webp', alt: 'Euro4x4parts' },
  { nombre: 'Santana Cars', url: 'https://santanacars.com/', logo: '/img/logosPatros/santana-cars.webp', alt: 'Santana Cars' },
  { nombre: 'Herrador Motorsport', url: 'https://herradormotorsport.com/web/', logo: '/img/logosPatros/herrador-motorsport.webp', alt: 'Herrador Motorsport' },
  { nombre: 'FriVall', url: 'https://www.patel.es/es/frivall.html', logo: '/img/logosPatros/frivall.webp', alt: 'FriVall' },
  { nombre: 'Dendron', url: 'https://dendron.es/', logo: '/img/logosPatros/dendron.webp', alt: 'Dendron' },
  { nombre: 'Grupo Logístico FGR', logo: '/img/logosPatros/grupo-logistico-fgr.webp', alt: 'Grupo Logístico FGR' },
  { nombre: 'Lasercor', url: 'https://www.lasercor.com/', logo: '/img/logosPatros/lasercor.webp', alt: 'Lasercor' },
  { nombre: 'GPR Sport', url: 'https://www.gprsport.es/', logo: '/img/logosPatros/gpr-sport.webp', alt: 'GPR Sport' },
  { nombre: 'Tu Mundo Rally', url: 'https://www.instagram.com/tumundorally_oficial', logo: '/img/logosPatros/tumundorally.webp', alt: 'Tu Mundo Rally' },
  { nombre: 'Silcars Auto', url: 'https://www.coches.net/concesionario/silcars/', logo: '/img/logosPatros/silcars-auto.webp', alt: 'Silcars Auto' },
  { nombre: 'ISD Auto Talleres', url: 'https://www.facebook.com/profile.php?id=100057216409820&locale=es_ES', logo: '/img/logosPatros/isd-auto-talleres.webp', alt: 'ISD Auto Talleres' },
  { nombre: 'Tavera TB Brokers', url: 'https://www.qdq.com/tavera-brokers-707684', logo: '/img/logosPatros/tavera-tb-brokers.webp', alt: 'Tavera TB Brokers' },
  { nombre: 'Tudor Baterías', url: 'https://tudor.com.br/es', logo: '/img/logosPatros/tudor.webp', alt: 'Tudor' },
  { nombre: 'EME-A', logo: '/img/logosPatros/eme-a.webp', alt: 'EME-A' },
];

export const local: Patrocinador[] = [
  { nombre: 'Armosan', url: 'https://armosan.es/', logo: '/img/logosPatros/armosan.webp', alt: 'Armosan' },
  { nombre: 'Fuenteliviana', url: 'https://www.fuenteliviana.es/', logo: '/img/logosPatros/fuente-liviana.webp', alt: 'Fuenteliviana' },
  { nombre: 'Garsauto', logo: '/img/logosPatros/garsauto.webp', alt: 'Garsauto' },
  { nombre: 'Reyuplas', url: 'https://reyuplas.com/', logo: '/img/logosPatros/rey-uplas.webp', alt: 'Reyuplas' },
  { nombre: 'Gráficas Cuenca', url: 'https://graficascuenca.com/', logo: '/img/logosPatros/graficas-cuenca.webp', alt: 'Gráficas Cuenca' },
  { nombre: 'Ferretería San José', url: 'https://www.ferreteriasanjose.es/', logo: '/img/logosPatros/ferreteria-san-jose.webp', alt: 'Ferretería San José' },
  { nombre: 'Maquinaria Abarca', url: 'https://maquinariaabarca.com/', logo: '/img/logosPatros/maquinaria-abarca.webp', alt: 'Maquinaria Abarca' },
  { nombre: 'Lavacuenca RS', url: 'https://www.instagram.com/lavacuencars', logo: '/img/logosPatros/lavacuenca.webp', alt: 'Lavacuenca' },
  { nombre: 'Quesos La Ermita de Caracenilla', url: 'https://quesoslaermitadecaracenilla.com/', logo: '/img/logosPatros/quesos-la-ermita-de-caracenilla.webp', alt: 'Quesos La Ermita' },
  { nombre: 'Viveros La Mezquita', url: 'https://www.viveroslamezquita.com/', logo: '/img/logosPatros/viveros-la-mezquita.webp', alt: 'Viveros La Mezquita' },
  { nombre: 'Abadía de Jabaga', url: 'https://www.abadiadejabaga.es/', logo: '/img/logosPatros/abadia-de-jabaga.webp', alt: 'Abadía de Jabaga' },
  { nombre: 'Viales', url: 'https://www.viales.es/', logo: '/img/logosPatros/viales.webp', alt: 'Viales' },
  { nombre: 'ITV Cuenca - Chillarón', url: 'https://itvcuenca.es/', logo: '/img/logosPatros/itv-chillaron.webp', alt: 'ITV Chillarón' },
  { nombre: 'Hotel Midama', url: 'https://hotelmidama.com/', logo: '/img/logosPatros/hotel-midama.webp', alt: 'Hotel Midama' },
  { nombre: 'Hiteco Suministros', url: 'https://www.hitecosuministros.com/', logo: '/img/logosPatros/hiteco-suministros.webp', alt: 'Hiteco Suministros' },
  { nombre: 'CC Alcampo Cuenca', url: 'https://ccalcampocuenca.es/', logo: '/img/logosPatros/alcampo-cuenca.webp', alt: 'Alcampo Cuenca' },
  { nombre: "McDonald's Cuenca", url: 'https://www.mcdonalds.es/', logo: '/img/logosPatros/mcdonalds-cuenca.webp', alt: "McDonald's Cuenca" },
  { nombre: 'Neumáticos Sanfer', url: 'https://www.sanferneumaticos.com/', logo: '/img/logosPatros/neumaticos-sanfer.webp', alt: 'Neumáticos Sanfer' },
  { nombre: 'Olicar', url: 'https://www.facebook.com/p/Olicar-100066645590948/', logo: '/img/logosPatros/olicar.webp', alt: 'Olicar' },
  { nombre: 'Ortopedia Cuenca', url: 'https://ortopediacuenca.es/', logo: '/img/logosPatros/ortopedia-cuenca.webp', alt: 'Ortopedia Cuenca' },
  { nombre: 'Oscar Menah', url: 'https://www.instagram.com/oscarmenah', logo: '/img/logosPatros/oscar-menah.webp', alt: 'Oscar Menah' },
  { nombre: 'Suministros Jorges', url: 'https://suministrosjorges.com/', logo: '/img/logosPatros/suministros-jorges.webp', alt: 'Suministros Jorges' },
  { nombre: 'Talleres Escamilla', url: 'https://talleres-escamilla.es/', logo: '/img/logosPatros/talleres-escamilla.webp', alt: 'Talleres Escamilla' },
  { nombre: 'Limpicol', url: 'https://limpicol.es/', logo: '/img/logosPatros/limpicol.webp', alt: 'Limpicol' },
];

export const categorias = [
  {
    id: 'institucional',
    titulo: 'Institucionales',
    descripcion: 'Organismos públicos e instituciones deportivas que respaldan la prueba a nivel regional, nacional e internacional.',
    patrocinadores: institucional,
  },
  {
    id: 'tecnico',
    titulo: 'Técnicos',
    descripcion: 'Marcas y empresas del sector del motor, equipamiento y servicios que apoyan técnicamente la prueba.',
    patrocinadores: tecnico,
  },
  {
    id: 'local',
    titulo: 'Colaboraciones locales',
    descripcion: 'El tejido empresarial de Cuenca y provincia que hace posible el rally sobre el terreno.',
    patrocinadores: local,
  },
];
