

export const areThereErrors = (objeto: Record<string, any>): boolean => {
    for (let propiedad in objeto) {
      if (Object.prototype.hasOwnProperty.call(objeto, propiedad) && objeto[propiedad] !== "") {
        return false;
      }
    }
    return true; // Todas las propiedades tienen el valor ""
  };