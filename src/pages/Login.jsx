import { useState } from "react";
import { useSession } from "../hooks/useSession";
import { CREDENTIALS } from "../lib/constants";
import { toastMensaje } from "../lib/toast";

export default function Login() {
  const { login } = useSession();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [touched, setTouched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);

    if (!user || !pass) {
      toastMensaje("Complete all fields", "error");
      return;
    }

    if (user === CREDENTIALS.username && pass === CREDENTIALS.password) {
      login({ user });
    } else {
      toastMensaje("Invalid credentials", "error");
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-12 col-md-4">
        <div className="card">
          <div className="card-body">
            <h4 className="mb-3">Login</h4>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label" htmlFor="user">Usuario</label>
                <input
                  id="user"
                  type="text"
                  className={`form-control ${touched && !user ? "is-invalid" : ""}`}
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
                <div className="invalid-feedback">Ingrese un usuario</div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="pass">Contraseña</label>
                <input
                  id="pass"
                  type="password"
                  className={`form-control ${touched && !pass ? "is-invalid" : ""}`}
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <div className="invalid-feedback">Ingrese una contraseña</div>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
