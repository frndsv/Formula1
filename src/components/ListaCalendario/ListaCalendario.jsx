import React from 'react';
import CardCalendario from '../CardCalendario/CardCalendario'
import './ListaCalendario.css'

function ListaCalendario({ calendario }) {
  return (
    <div className='divMaior'>
      {calendario.map((calendario) => (
        <CardCalendario
          key={calendario.circuitId}
          calendario={calendario}
        />
      ))}
    </div>
  );
}

export default ListaCalendario;
