import { Modal } from "../../../ui/components";
import { FaEye } from "react-icons/fa";


interface RegistroProps {
    id: number;
    estado: string;
    asunto: string;
    detalle: string;
    usuario: string;
    fecha: string;
    tipo:string
  }

export const DetalleRegistro: React.FC<RegistroProps> = ({id,estado,asunto,detalle,usuario,fecha,tipo }) => {
  return (
    <>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#modalEditar${id}`}
      >
        <FaEye />
      </button>
      <Modal id={`modalEditar${id}`} title={`#${id} - ${asunto}`}>
        <h6><b>Tipo: </b><i>{tipo}</i></h6>
        <h6 className="text-secondary"><b>Descripción:</b> <i>{detalle}</i></h6>
        <h6 className="text-secondary"><b>Reportado por: </b><i>{usuario}</i></h6>
        <h6 className="text-secondary"><b>Estado: </b><i>{estado}</i></h6>
        <h6 className="text-secondary"><b>El día:</b> <i>{fecha}</i></h6>
      </Modal>
    </>
  );
};
