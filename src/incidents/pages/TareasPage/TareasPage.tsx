import { useEffect } from "react"
import { useIncidentsStore } from "../../../store";
import { Registro } from "../../components";


export const TareasPage = () => {

  const isLoading = useIncidentsStore(state => state.isLoading);
  const incidents = useIncidentsStore(state => state.incidents);
  const getIncidents = useIncidentsStore(state => state.getIncidents);

  useEffect(() => {
    getIncidents();
  }, [])
  
  return (

    <div className=" card mt-4 mx-4 pt-4 px-2">
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Estado</th>
            <th scope="col">Asunto</th>
            <th scope="col">Descripción</th>
            <th scope="col">Usuario</th>
            <th scope="col">Creado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        {
          isLoading 
            ? <p>Cargando...</p>
            : incidents?.incidencias.map((incident) => (
                <tbody key={incident.ID_incidencia} className="table-group-divider">
                  <Registro 
                    id={incident.ID_incidencia}
                    asunto={incident.asunto}
                    detalle={incident.detalle}
                    estado={incident.estado}
                    fecha={incident.fecha_reporte}
                    usuario={incident.usuario.nombre}
                  />
                </tbody>
              ))
        }
      </table>
    </div>
  )
}




