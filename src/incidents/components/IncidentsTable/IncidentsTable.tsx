// IncidentsTable.tsx
import React from 'react';
import { Registro } from '..';
import { IncidentsTableProps } from '../../../interfaces';

const IncidentsTable: React.FC<IncidentsTableProps> = ({ incidents, usuario }) => {
  const filteredIncidents = incidents?.incidencias.filter((incident) => {
    if (usuario?.user.rol === 'admin') {
      return true;
    }
    return incident.ID_usuario === usuario?.user.ID_usuario;
  });

  return (
    <div className="card mt-4 mx-4 pt-4 px-2">
      {filteredIncidents && filteredIncidents.length > 0 ? (
        <table className="table">
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
          <tbody>
            {filteredIncidents.map((incident) => (
              <Registro
                key={incident.ID_incidencia}
                id={incident.ID_incidencia}
                asunto={incident.asunto}
                detalle={incident.detalle}
                estado={incident.estado}
                fecha={incident.fecha_reporte}
                usuario={incident.usuario.nombre}
                tipo={incident.tipo.nombre_tipo}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p><center>No hay incidencias para mostrar.</center></p>
      )}
    </div>
  );
};

export default IncidentsTable;
