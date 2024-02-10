import { useEffect } from "react"
import { useIncidentsStore } from "../../../store";



export const TareasPage = () => {

  const isLoading = useIncidentsStore(state => state.isLoading);
  const incidents = useIncidentsStore(state => state.incidents);
  const getIncidents = useIncidentsStore(state => state.getIncidents);

  useEffect(() => {
    getIncidents();
    
    
  }, [])
  console.log(incidents?.incidencias)
  
  return (

    <>
    {
      isLoading 
        ? <p>Cargando...</p>
        : <ul>
            {incidents?.incidencias.map((incident) => (
              <li key={incident.ID_incidencia}>
                <p>Asunto: {incident.asunto}</p>
                <p>Detalle: {incident.detalle}</p>
                {/* Agrega más detalles según tu estructura de datos */}
              </li>
            ))}
          </ul>

    }
    
    
    </>
  )
}
