import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import RutaProtegida from "./components/layout/RutaProtegida";

function App() {

  return (
    <>
      <div className="container-fluid mt-3">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={
                <RutaProtegida>
                  <Inicio />
                </RutaProtegida>} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
      </div>
    </>
  );
}

export default App;
