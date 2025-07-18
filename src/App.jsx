import { useState, useEffect } from "react";
import "./App.css";
import TareaEditar from "./componentes/TareaEditar";
import TareasLista from "./componentes/TareasLista";

function App() {
  const [listaTarea, setListaTarea] = useState([]);

  useEffect(() => {
    const jsonlistaTareas = localStorage.getItem("listaTareas");
    if (jsonlistaTareas) {
      setListaTarea(JSON.parse(jsonlistaTareas));
    }
  }, []);

  function fncEnviarTarea(argTarea) {
    setListaTarea([...listaTarea, argTarea]);

    localStorage.setItem(
      "listaTareas",
      JSON.stringify([...listaTarea, argTarea])
    );
  }

  function fncDone(argId, argChecked) {
    const listaTareaModif = listaTarea.map((t) => {
      if (t.id === argId) {
        return { ...t, hecho: argChecked };
      } else {
        return t;
      }
    });
    // Seteo la lista modificada en el estado listaTarea
    setListaTarea(listaTareaModif);
    // Seteo la lista modificada en localStorage.
    localStorage.setItem("listaTareas", JSON.stringify(listaTareaModif));
  }

  function fncEliminarTareasHechas() {
    const restantes = listaTarea.filter((t) => t.hecho === false);
    setListaTarea(restantes);
    localStorage.setItem("listaTareas", JSON.stringify(restantes));
  }

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-6">
            <TareaEditar
              fncEnviarTarea={fncEnviarTarea}
              listaTarea={listaTarea}
            />
            <TareasLista
              listaTarea={listaTarea}
              fncDone={fncDone}
              mostrarHecho={false}
            />
            <TareasLista
              listaTarea={listaTarea}
              fncDone={fncDone}
              mostrarHecho={true}
              fncEliminarTareasHechas={fncEliminarTareasHechas}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
