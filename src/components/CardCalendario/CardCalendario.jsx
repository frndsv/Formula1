import React from 'react';
import './CardCalendario.css';


const formatarDataBrasileiro = (dataString) => {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR');
  
  };



function CardCalendario({ calendario }) {
  return (

    <div id="cardCalendario">
      
      <h1> Round {calendario.round}</h1>

      <img className='photoCircuito' src={calendario.circuitPhoto} alt={`Foto do circuito${calendario.circuitId}`} />
      <div className='info-circuito'>

        <h3> <b> Circuito  </b> {calendario.circuitName}</h3>
        <h3> <b> Localização  </b> {calendario.location.country}</h3>
        <h3> <b> Data  </b> {formatarDataBrasileiro(calendario.raceDate)}</h3>
      </div>
    </div>
  );
}

export default CardCalendario;
