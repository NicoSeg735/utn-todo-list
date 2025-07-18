import { useState } from "react";

export default function TareasLista({
  listaTarea,
  fncDone,
  mostrarHecho = false,
  fncEliminarTareasHechas,
}) {
  let HayTareas;
  {
    listaTarea.filter((t) => t.hecho == mostrarHecho).length === 0
      ? (HayTareas = false)
      : (HayTareas = true);
  }
  return (
    <>
      <div className="row mt-4">
        <div className="col-12">
          {!HayTareas ? (
            <div className="row">
              <div className="col-12">
                <h6>
                  No hay tareas {mostrarHecho ? "realizadas" : "pendientes"}
                </h6>
              </div>
            </div>
          ) : (
            <>
              <div className="row">
                <div className="col-12 col-md-6">
                  <h6>Tareas {mostrarHecho ? "Realizadas" : "Pendientes"}</h6>
                </div>
                <div className="col-12 col-md-6">
                  {mostrarHecho && (
                    <button
                      className="btn btn-sm btn-primary float-end"
                      onClick={fncEliminarTareasHechas}
                    >
                      Eliminar
                    </button>
                  )}
                </div>
              </div>

              <div className="row mt-1">
                <div className="col-12">
                  <table className="table table-bordered bg-tabla">
                    <thead>
                      <tr>
                        <th className="col-8">Tarea</th>
                        <th className="col-3">Done</th>
                        <th className="col-1">Id</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listaTarea
                        .filter((t) => t.hecho == mostrarHecho)
                        .map((t, index) => (
                          <tr key={index}>
                            <td>{t.tarea}</td>
                            <td>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={t.hecho}
                                onChange={() => fncDone(t.id, !t.hecho)}
                              />
                            </td>
                            <td>{t.id}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
