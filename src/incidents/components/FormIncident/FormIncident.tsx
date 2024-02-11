import { useEffect } from "react";
import { useTypesStore } from "../../../store/typesIncidents/typesIncidents.store";
import { useForm } from "../../../hooks/useForm";

export const FormIncident = () => {
  const types = useTypesStore((state) => state.types);
  const getTypesIncidents = useTypesStore((state) => state.getTypesIncidents);

  const { formState, onInputChange, errors } = useForm({
    asunto: "",
    detalle: "",
    ID_usuario: 0,
    ID_tipo: 1,
  });

  useEffect(() => {
    getTypesIncidents();
  }, []);

  console.log(types);

  return (
    <div className=" px-4 ">
      <form>
        <div className="mb-3">
          <label className="form-label">Tipo:</label>
          <select className="form-select" id="selecion" name="ID_tipo"  value={formState.ID_tipo} onChange={onInputChange} >
            {types?.map((type) => (
              <option key={type.ID_tipo} value={type.ID_tipo} >
                {type.nombre_tipo}
              </option>
            ))}
          </select>
          <div className="form-text text-danger">Campo requerido</div>
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
          
          {errors.email && (
            <div className="form-text text-danger">Campo requerido</div>
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
          <div className="form-text text-danger">Campo requerido</div>
        </div>
      </form>
    </div>
  );
};
