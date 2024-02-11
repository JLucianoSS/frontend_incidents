import { Link, useLocation } from "wouter";
import { FaUserAlt } from "react-icons/fa";
import { Modal } from "..";
import { FormIncident } from "../../../incidents/components";
import { useUserStore } from "../../../store/user/user.store";
import { userInLocalStorage } from "../../../utils/userLocalStorage";
import { ImExit } from "react-icons/im";



export const Navbar = () => {

  const cleanUser = useUserStore(state => state.cleanUser);
  const usuario =  userInLocalStorage();
  const [_, navigate] = useLocation();

  const handleLogoutClick = () => {
    cleanUser();
    localStorage.clear();
    navigate('/login',{replace:false});
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid px-5">
        <Link to="/tareas#" className="navbar-brand" >
          GDI
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse px-4" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link to='/tareas' className="nav-link" >
                Mis reportes
              </Link>
            </li>

            <li className="nav-item">
              {/* Boton para abrir modal */}
              <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#modalAñadir" >
                <i>Añadir</i>
              </Link>
              {/* El modal que abre ese botón */}
              <Modal  id="modalAñadir" title="Añadir Incidencia">
                <FormIncident/>
              </Modal>
            </li>
          </ul>


          <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              {usuario?.user.nombre}
                  &nbsp;&nbsp;&nbsp;
                  <FaUserAlt />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><Link to='/login' className="dropdown-item" onClick={handleLogoutClick} >
                <b>
                  <ImExit />
                  &nbsp;
                  Salir
                </b>
              </Link></li>
            </ul>
          </div>
        
        </div>
      </div>
    </nav>
  );
};
