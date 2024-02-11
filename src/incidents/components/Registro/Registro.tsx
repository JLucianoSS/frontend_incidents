import {
  useDeleteIncident,
  useIncidentsStore,
  useUpdateIncident,
} from "../../../store";
import { userInLocalStorage } from "../../../utils";
import { DetalleRegistro, DisplayEdit, StateColor } from "../../components";
import { IoTrashSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { useState } from "react";
import { capitalizeFirstLetter } from "../../../utils/capitalize";

interface RegistroProps {
  id: number;
  estado: string;
  asunto: string;
  detalle: string;
  usuario: string;
  fecha: string;
  tipo: string;
}
export const Registro: React.FC<RegistroProps> = ({id,estado,asunto,detalle,usuario,fecha,tipo,}) => {
  const deleteIncident = useDeleteIncident((state) => state.deleteIncident);
  const updateIncident = useUpdateIncident((state) => state.updateIncident);
  const getIncidents = useIncidentsStore((state) => state.getIncidents);
  const [selectedEstado, setSelectedEstado] = useState<string>("pendiente");
  const userLoged = userInLocalStorage();

  const handleDeleteClick = () => {
    Swal.fire({
      title: "Eliminación",
      text: "¿Realmente deseas eliminar el incidente?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, eliminar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteIncident(id);
        getIncidents();
        Swal.fire({
          title: "Eliminado",
          text: "La incidencia ha sido borrada",
          icon: "success",
        });
      }
    });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEstado(event.target.value);
  };

  const handleClickUpdate = async () => {
    await updateIncident(id, { estado: selectedEstado });
    // getIncidents();
    Swal.fire({
      title: "Estado actualizado",
      text: "Gracias por atender el incidente",
      icon: "success",
    });
  };

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>
        <b>
          {
            <StateColor estado={capitalizeFirstLetter(estado)}/>
            
          }
        </b>
      </td>
      <td><center>{asunto}</center></td>
      <td>{tipo}</td>
      <td>{usuario}</td>
      <td>{fecha}</td>
      <td style={{display:'flex', gap:'0.5rem'}}>
        {userLoged?.user.rol === "admin" ? (
          <DisplayEdit
            asunto={asunto}
            id={id}
            estado={estado}
            selectedEstado={selectedEstado}
            handleClickUpdate={handleClickUpdate}
            handleSelectChange={handleSelectChange}
          />
        ) : (
          <DetalleRegistro
            id={id}
            estado={estado}
            asunto={asunto}
            detalle={detalle}
            usuario={usuario}
            fecha={fecha}
            tipo={tipo}
          />
        )}

        <button onClick={handleDeleteClick} className="btn btn-danger">
          <IoTrashSharp />
        </button>
      </td>
    </tr>
  );
};
