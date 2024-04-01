export const addPoint = (numero: number): string => {
  // Convertir el número a una cadena y dividirlo en partes por cada tres dígitos
  const partes = numero.toString().split(".");
  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Unir las partes con el punto de mil
  return partes.join(".");
};
