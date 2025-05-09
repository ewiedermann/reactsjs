import React, { useState } from "react";

//Que necesito para un formulario?
const FormularioNombreApellido = () => {
    //El primer no existe, esta en blanco.
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');


    const handleSubmit = (e) => {
        //Revisa que no se cargue de vuelta la pagina web
        e.preventDefault();
        alert(`Nombre: ${nombre} o apellido: ${apellido} no cargado`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre</label>
                <input type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div>
                <label>Apellido</label>
                <input type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)} />
            </div>
        </form>
    );
};

export default FormularioNombreApellido;