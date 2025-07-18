import { useLocalStorage } from "./useLocalStorage";
import { useNavigate } from "react-router-dom";

export function useSession() {
  const [session, setSession] = useLocalStorage("session", null);
  const navigate = useNavigate();

  const login = (user) => {
    setSession(user);
    navigate("/");
  };

  const logout = () => {
    setSession(null);
    navigate("/login");
  };

  return {
    session,
    login,
    logout,
    isLogged: !!session,
  };
}
