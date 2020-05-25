import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

function App() {
  const [citas, guardarCitas] = useState([]);
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="one-half column">
          <Formulario crearCita={crearCita} />
        </div>
        <div className="one-half column">2</div>
      </div>
    </Fragment>
  );
}

export default App;
