import React from 'react';
import CardProxima from '../CardProxima/CardProxima';
import './ListaProxima.css'

function ListaProxima({ proxima }) {
  return (
    <>
      {proxima.map((proxima) => (
          <CardProxima
            key={proxima.round}
            proxima={proxima}
          />
        ))}
    </>
    
  );
}

export default ListaProxima;
