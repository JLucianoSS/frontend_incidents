// Para guardar en localStorage
export const saveToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Para leer desde localStorage
export const readFromLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

// Uso de las funciones
// const objetoAGuardar = { nombre: "Ejemplo", edad: 25 };
// saveToLocalStorage("miObjeto", objetoAGuardar);

// const objetoLeido = readFromLocalStorage("miObjeto");
// console.log(objetoLeido); // Mostrará el objeto guardado, o null si no se encuentra
