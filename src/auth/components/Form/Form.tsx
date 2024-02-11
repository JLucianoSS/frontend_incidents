
import { useLocation } from "wouter";
import { useForm } from "../../../hooks/useForm";
import { validate } from "./validation";
import { areThereErrors } from "../../../utils/areThereErrors";
import { useUserStore } from "../../../store/user/user.store";
import { saveToLocalStorage } from "../../../utils/localStorage";
import { useEffect } from "react";


export const Form = () => {

  const user = useUserStore(state => state.user);
  const getUser = useUserStore(state => state.getUser);
  // const isLoading = useUserStore(state => state.isLoading);
  const [_, navigate] = useLocation();
  
  const { formState, onInputChange, errors } = useForm({
    correo: "",
    contraseña: "",
  }, validate);


  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    getUser(formState);
  }

  useEffect(() => {
    if(user !== null){
      if(user?.message === "Usuario encontrado"){
        saveToLocalStorage('LoginUser', user)
        navigate('/tareas');
      }
    }
  }, [user]);


  
  
  return (
    <div className="card p-4 pb-5" style={{ width:"350px"}}>
        <h1>Inicia Sesión</h1>
        <form>

          <div className="mb-3">
            <label className="form-label">Correo:</label>
            <input
              type="email"
              className="form-control"
              name="correo"
              value={formState.correo}
              onChange={onInputChange}
            />
          
            {errors.correo && (
              <div className="form-text text-danger">{errors.correo}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              name="contraseña"
              value={formState.contraseña}
              onChange={onInputChange}
            />
             {errors.contraseña && (
              <div className="form-text text-danger">{errors.contraseña}</div>
            )}
          </div>

          
          <button 
            type="submit" 
            className={`btn btn-success ${!areThereErrors(errors) ? 'disabled' : '' }`}
            disabled={!areThereErrors(errors)}
            onClick={handleClick}
          >
            Ingresar
          </button>


        </form>
    </div>
  );
};
