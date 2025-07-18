import { useEffect, useState } from "react";
import { Forward } from "lucide-react";
import { toastMensaje } from "./toast";
import { ToastContainer } from "react-toastify";

export default function TareaEditar({ fncEnviarTarea, listaTarea }) {
  const [descTarea, setDescTarea] = useState("");
  const [habilitarSend, setHabilitarSend] = useState(false);
  const [objTarea, setObjTarea] = useState({});
  const [idMax, setIdMax] = useState(1);

  // saco de listaTarea el ultimo Id, tengo que encontrar una manera de hacerlo en el momento de enviar y
  // guardar en localstorage.
  // alta tarea en estado de App listaTarea y guardo en localStorage.
  // Como darle un ID.
  useEffect(() => {
    setIdMax(
      listaTarea.reduce((idMax, tarea) => {
        return tarea.id > idMax ? tarea.id : idMax;
      }, 0) + 1
    );
  }, []);

  function fncChange(e) {
    setDescTarea(e.target.value);

    // si la tarea tiene mas de 3 caracteres, habilito el boton Enviar.
    e.target.value.length >= 3
      ? setHabilitarSend(true)
      : setHabilitarSend(false);

    setObjTarea({
      ...objTarea,
      tarea: e.target.value,
      hecho: false,
      id: idMax,
    });
  }
  function fncEnviar(e) {
    if (descTarea.length === 0) {
      toastMensaje("Ingrese la Tarea.", "error");
      return;
    }
    setObjTarea({
      ...objTarea,
      tarea: e.target.value,
      hecho: false,
      id: idMax,
    });

    //setObjTarea({ ...objTarea, hecho: false });
    setDescTarea("");
    setHabilitarSend(false);
    setIdMax(idMax + 1);
    fncEnviarTarea(objTarea);
  }

  return (
    <>
      <div className="row">
        <div className="col-8">
          <input
            id="ingreso"
            placeholder="Ingrese Tarea"
            className="form-control"
            value={descTarea}
            onChange={fncChange}
            maxLength="30"
          ></input>
        </div>
        <div className="col-4">
          {habilitarSend && (
            <a href="#" onClick={fncEnviar}>
              <Forward color="#0039e6" />
            </a>
          )}

          {!habilitarSend && <Forward color="#809fff" />}
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
