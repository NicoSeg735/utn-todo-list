import { useSession } from "../hooks/useSession";
import { Navigate } from "react-router-dom";

export default function RutasProtegidas({ children }) {
    const { isLogged } = useSession();

    if (!isLogged) {
      return <Navigate to="/login" />;
    }

    return children;
}