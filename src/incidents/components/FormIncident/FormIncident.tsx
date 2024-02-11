import { useEffect } from "react";
import { useTypesStore, useCreateIncidentStore, useIncidentsStore } from "../../../store";
import { useForm } from "../../../hooks/useForm";
import { userInLocalStorage, areThereErrors } from "../../../utils";
import { validate } from "./validation";
import Swal from "sweetalert2";

export const FormIncident = () => {

  const types = useTypesStore((state) => state.types);
  const getTypesIncidents = useTypesStore((state) => state.getTypesIncidents);
  const postIncident = useCreateIncidentStore((state) => state.postIncident);
  const getIncidents = useIncidentsStore((state) => state.getIncidents);
  const usuario = userInLocalStorage();
  
  const { formState, onInputChange, errors, resetForm } = useForm({
    asunto: "",
    detalle: "",
    ID_usuario: usuario?.user.ID_usuario,
    ID_tipo: 1,
  }, validate);

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement, MouseEvent>): void => {
    event.preventDefault();
    Swal.fire({
      title: "Aviso",
      text: "Usted reportará esta incidencia a los administradores",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Enviar"
    }).then(async(result) => {
      if (result.isConfirmed) {
        await postIncident(formState);
        getIncidents();
        Swal.fire({
          title: "La incidencia ha sido registrada",
          text: "Un administrador se pondrá en contacto",
          icon: "success"
        });
      }
    });
    resetForm();
  }


  useEffect(() => {
    getTypesIncidents();
  }, []);




  return (
    <div className=" px-4 ">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Tipo:</label>
          <select className="form-select" id="selecion" name="ID_tipo"  value={formState.ID_tipo} onChange={onInputChange} >
            {types?.map((type) => (
              <option key={type.ID_tipo} value={type.ID_tipo} >
                {type.nombre_tipo}
              </option>
            ))}
          </select>
          {/* <div className="form-text text-danger">Campo requerido</div> */}
        </div>

        <div className="mb-3">
          <label className="form-label">Asunto:</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Ejem: Problema en la electricidad"
            name="asunto"
            value={formState.asunto}
            onChange={onInputChange}
          />
          
          {errors.asunto && (
            <div className="form-text text-danger">{errors.asunto}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Detállanos la incidencia</label>
          <textarea
            placeholder="Descríbenos el problema. No olvides brindarnos la ubicación exacta"
            className="form-control"
            name="detalle"
            value={formState.detalle}
            onChange={onInputChange}
          />
          {errors.detalle && (
            <div className="form-text text-danger">{errors.detalle}</div>
          )}
        </div>

        <button type="submit" className="btn btn-success mb-4" disabled={!areThereErrors(errors)}>Enviar</button>
      </form>
    </div>
  );
};
