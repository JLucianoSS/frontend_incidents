import { Link } from "wouter";
import { FaUserAlt } from "react-icons/fa";
import { Modal } from "..";
import { FormIncident } from "../../../incidents/components";




export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand" >
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link to="/home" className="nav-link active" aria-current="page" >
                Home
              </Link>
            </li> */}

            <li className="nav-item">
              <Link to='/tareas' className="nav-link" >
                Tareas
              </Link>
            </li>

            <li className="nav-item">
              {/* Boton para abrir modal */}
              <Link to="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#modalAñadir" >
                Añadir
              </Link>
              {/* El modal que abre ese botón */}
              <Modal  id="modalAñadir" title="Añadir Incidencia">
                <FormIncident/>
              </Modal>
            </li>

            <li className="nav-item">
              <Link to='/login' className="nav-link" >
                Salir
              </Link>
            </li>
            
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <ul className="navbar-nav  mx-3">
            <li className="nav-item">
              <Link to="/home" className="nav-link active" aria-current="page" >
                <FaUserAlt />
              </Link>
            </li>
          </ul>
          

        </div>
      </div>
    </nav>
  );
};
