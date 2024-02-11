


export const generatRemainingOptions = (estadoActual: string): string[] => {
  const estadosPosibles: string[] = ["pendiente", "en proceso", "resuelto"];
  const opciones = estadosPosibles.filter((estado) => estado !== estadoActual);
  return opciones;
};