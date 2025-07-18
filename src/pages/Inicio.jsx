import TareaEditar from "../components/TareaEditar";
import TareasLista from "../components/TareasLista";

export default function Inicio() {
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-6">
          <TareaEditar />
          <TareasLista mostrarHecho={false} />
          <TareasLista mostrarHecho={true} />
        </div>
      </div>
    );
}