import React from 'react';
import CardEquipes from '../CardEquipes/CardEquipes';
import './ListaEquipes.css'

function ListaEquipes({ equipes }) {
  return (
    <div className='divMaior'>
      {equipes.map((equipes) => (
        <CardEquipes
          key={equipes.constructorId}
          equipes={equipes}
        />
      ))}
    </div>
  );
}

export default ListaEquipes;
