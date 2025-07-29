import { useState } from "react";

export default function Input({ name, value, handleChange, error = false, type = "text" }) {

  const [showPassword, setShowPassword] = useState(false);
    return (
      <div>
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : type}
          className={`form-control ${error ? "is-invalid" : ""}`}
          value={value}
          onChange={handleChange}
      />
      {type === "password" && (
        <button type="button" className="btn btn-primary btn-sm" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Ocultar" : "Ver"}</button>
      )}
      </div>
    );
}