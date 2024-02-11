import { TiEdit } from "react-icons/ti";
import { Modal } from "../../../ui/components";

interface DisplayEditProps {
  id: number;
  asunto: string;
  selectedEstado: string;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleClickUpdate: () => void;
}

export const DisplayEdit: React.FC<DisplayEditProps> = ({
  id,
  asunto,
  selectedEstado,
  handleSelectChange,
  handleClickUpdate,
}) => {
  return (
    <>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#modalEditar${id}`}
      >
        <TiEdit />
      </button>
      <Modal id={`modalEditar${id}`} title={`#${id} - ${asunto}`}>
        <h6 className="text-secondary px-2">Cambiar estado a:</h6>
        <select
          className="form-select mb-3"
          value={selectedEstado}
          onChange={handleSelectChange}
        >
          <option value="pendiente" selected>
            Pendiente
          </option>
          <option value="en proceso">En proceso</option>
          <option value="resuelto">Resuelto</option>
        </select>
        <button onClick={handleClickUpdate} className="btn btn-primary mb-3">
          Actualizar
        </button>
      </Modal>
    </>
  );
};
