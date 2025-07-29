import { useState } from "react";
import { useSession } from "../hooks/useSession";
import { CREDENTIALS } from "../lib/constants";
import { toastMensaje } from "../lib/toast";
import Input from "../components/form/Input";

const DEFAULT_VALUES = {
  user: "",
  pass: "",
};

export default function Login() {
  const { login } = useSession();
  const [formValues, setFormValues] = useState(DEFAULT_VALUES);
  const [touched, setTouched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);

    if (!formValues.user || !formValues.pass) {
      toastMensaje("Complete todos los campos", "error");
      return;
    }

    if (formValues.user === CREDENTIALS.username && formValues.pass === CREDENTIALS.password) {
      login({ user: formValues.user });
    } else {
      toastMensaje("Credenciales inválidas", "error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-12 col-md-4">
        <div className="card">
          <div className="card-body">
            <h4 className="mb-3">Iniciar sesión</h4>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label" htmlFor="user">Usuario</label>
                <Input
                  name="user"
                  value={formValues.user}
                  handleChange={handleChange}
                  error={touched && !formValues.user}
                  type="text"
                />
                <div className="invalid-feedback">Ingrese un usuario</div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="pass">Contraseña</label>
                <Input
                   name="pass"
                   value={formValues.pass}
                   handleChange={handleChange}
                   error={touched && !formValues.pass}
                   type="password"
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
