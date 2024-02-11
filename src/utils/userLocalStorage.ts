import { readFromLocalStorage } from "./localStorage";



interface UsuarioResponse {
    message: string;
    user: Usuario;
  }
  
  interface Usuario {
    ID_usuario: number;
    nombre: string;
    correo: string;
    contraseña: string;
    rol: string;
  }
  


export const userInLocalStorage = () => {
  const usuario =  readFromLocalStorage<UsuarioResponse>('LoginUser');
  return usuario;
}