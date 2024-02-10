
import { Link } from "wouter";

export const Form = () => {
  return (
    <div className="card p-4 pb-5">
        <h1>Inicia Sesión</h1>
        <form>
          <div className="mb-3">
            <label className="form-label">Correo:</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text text-danger">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
             <div id="emailHelp" className="form-text text-danger">
              We'll never share your email with anyone else.
            </div>
          </div>
          <Link to="/tareas" type="submit" className="btn btn-success">
            Ingresar
          </Link>
        </form>
    </div>
  );
};
