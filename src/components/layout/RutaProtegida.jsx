import { useSession } from "../../hooks/useSession";
import { Navigate } from "react-router-dom";

export default function RutasProtegidas({ children }) {
    const { isLogged, logout } = useSession();

    if (!isLogged) {
      return <Navigate to="/login" />;
    }

    return (
      <>
        <header className="d-flex justify-content-between align-items-center gap-2 mb-3">
          <h1>Todo List</h1>
          <button onClick={() => logout()} className="btn btn-danger btn-sm">Cerrar Sesión</button>
        </header>
        {children}
      </>
    );
}