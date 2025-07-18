import { useState } from "react";
import { Forward } from "lucide-react";
import { useTasks } from "../contexts/Tasks/useTasks";

export default function TareaEditar() {
  const [descTarea, setDescTarea] = useState("");
  const [habilitarSend, setHabilitarSend] = useState(false);
  const { addTask } = useTasks();

  function fncChange(e) {
    const value = e.target.value;
    setDescTarea(value);

    // si la tarea tiene mas de 3 caracteres, habilito el boton Enviar.
    value.length >= 3 ? setHabilitarSend(true) : setHabilitarSend(false);
  }

  function fncEnviar() {
    setDescTarea("");
    setHabilitarSend(false);
    addTask(descTarea);
  }

  function fncKeyDown(e) {
    if (e.key === "Enter" && habilitarSend) {
      fncEnviar();
    }
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
            onKeyDown={fncKeyDown}
            maxLength="30"
          ></input>
        </div>
        <div className="col-4">
          <button onClick={fncEnviar} disabled={!habilitarSend} className="btn btn-primary btn-sm">
            <Forward />
          </button>
        </div>
      </div>
    </>
  );
}
