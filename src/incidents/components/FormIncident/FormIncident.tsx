


export const FormIncident = () => {
    return (
        <div className=" px-4 ">
            <form>
            <div className="mb-3">
                <label className="form-label">Tipo:</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Fontaneria</option>
                    <option value="1">Electricidad</option>
                    <option value="2">Estructura</option>
                </select>
            </div>
              <div className="mb-3">
                <label className="form-label">Asunto:</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Ejem: Problema en la electricidad"
                />
                <div id="emailHelp" className="form-text text-danger">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Detállanos la incidencia</label>
                <textarea
                  placeholder="Descríbenos el problema. No olvides brindarnos la ubicación exacta"
                  className="form-control"
                  id="exampleInputPassword1"
                />
                 <div id="emailHelp" className="form-text text-danger">
                  We'll never share your email with anyone else.
                </div>
              </div>
            </form>
        </div>
      );
}
