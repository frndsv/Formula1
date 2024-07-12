import React from 'react';
import CardPilotos from '../CardPilotos/CardPilotos';
import './ListaPilotos.css'

function ListaPilotos({ pilotos }) {
  return (
    <div className='divMaior'>
      {pilotos.map((pilotos) => (
        <CardPilotos
          key={pilotos.permanentNumber}
          pilotos={pilotos}
        />
      ))}
    </div>
  );
}

export default ListaPilotos;
