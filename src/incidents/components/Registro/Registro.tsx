import { MdOutlineEdit } from 'react-icons/md';
import { IoTrashSharp } from 'react-icons/io5';

interface RegistroProps {
  id: number;
  estado: string;
  asunto: string;
  detalle: string;
  usuario: string;
  fecha: string;
}

export const Registro: React.FC<RegistroProps> = ({ id, estado, asunto, detalle, usuario, fecha }) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td><b>{estado}</b></td>
      <td>{asunto}</td>
      <td>{detalle}</td>
      <td>{usuario}</td>
      <td>{fecha}</td>
      <td>
        <button className="btn btn-primary">
          <MdOutlineEdit />
        </button>
        <button className="btn btn-danger">
          <IoTrashSharp />
        </button>
      </td>
    </tr>
  );
};

