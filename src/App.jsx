import "./App.css";
import TareaEditar from "./components/TareaEditar";
import TareasLista from "./components/TareasLista";

function App() {

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-6">
            <TareaEditar />
            <TareasLista mostrarHecho={false} />
            <TareasLista mostrarHecho={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
