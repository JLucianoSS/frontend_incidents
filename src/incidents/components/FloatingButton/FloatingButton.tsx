import { IoReloadCircle } from "react-icons/io5";
import { useIncidentsStore } from "../../../store";

export const FloatingButton: React.FC = () => {
  const getIncidents = useIncidentsStore((state) => state.getIncidents);
  
  const handleClick = () => {
    // console.log('Botón flotante clicado');
    getIncidents();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '100px',
        right: '70px',
      }}
    >
      <button className="btn btn-primary p-3" onClick={handleClick}>
        Recargar
        &nbsp;
        <IoReloadCircle style={{ fontSize: '2em', verticalAlign: 'middle' }} />
      </button>
    </div>
  );
};
