// ============================================================
// DATOS DE LA EDICIÓN ACTUAL
// Cada año basta con actualizar este archivo: todas las páginas
// que muestran el año o las fechas del evento leen de aquí.
// ============================================================

export const EVENTO = {
  anio: 2027,
  // Plazo de acreditación de prensa (texto tal cual se muestra)
  // TODO: confirmar la fecha real de 2027
  plazoPrensa: '28 de abril de 2027',
  // TODO: confirmar las fechas reales de 2027
  fechas: '7, 8, 9 y 10 de mayo de 2027',
};

export const SITIO = {
  nombre: 'Baja TT Cuenca',
  autor: 'Club Deportivo Cuenca Motor 4x4',
  email: 'cuencamotor4x4@hotmail.com',
  gaId: 'G-62VNT8HSR0',
  cookieYes: 'https://cdn-cookieyes.com/client_data/557454200c22beb96a436e76/script.js',
};

// Número romano de una edición (XII, XIII...)
export function romano(n: number): string {
  const tabla: [number, string][] = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
  let r = '';
  for (const [v, s] of tabla) while (n >= v) { r += s; n -= v; }
  return r;
}

// Ediciones calculadas a partir del año: 2026 fue la I Baja y el XII Rallye
export const EDICION = {
  baja: romano(EVENTO.anio - 2025),
  rallye: romano(EVENTO.anio - 2014),
};
