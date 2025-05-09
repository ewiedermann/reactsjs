import React from "react";
import FormularioNombreApellido from "./components/FormularioNombreApellido";

function App() {
  return (
    <div>
      <h1>Formulario Nombre y Apellido como componente</h1>
      <FormularioNombreApellido/>

      <h2>Formulario como componente 2</h2>
      <FormularioNombreApellido/>
    </div>
  );
}

export default App;
