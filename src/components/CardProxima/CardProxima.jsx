import React from 'react';
import './CardProxima.css';

const formatarDataBrasileiro = (dataString) => {
  const data = new Date(dataString);
  return data.toLocaleDateString('pt-BR');

};

const traduzirNacionalidade = (nationality) => {
    const nacionalidades = {

      "Hungary": "Hungria",
    };
    return nacionalidades[nationality] || nationality;
  };

function CardProxima({ proxima }) {
  return (
    <>

    <section className='card'>
      <div className='title'>
        <h1> PRÓXIMA CORRIDA: </h1>
        <h4>  {proxima.raceName} </h4>
        <img className='countryFlag' src={proxima.circuit.location.countryFlag} alt="" />
        <h4> {formatarDataBrasileiro(proxima.date)}  </h4>
        <a className='infoRace' href={proxima.racePage} >MAIS INFORMAÇÕES</a>   
      </div>

      <div>
        <img className='photoProx' src={proxima.circuit.circuitPhoto} alt={`Foto do ${proxima.raceName}`} />
        <h3> {traduzirNacionalidade(proxima.circuit.location.locality)}, {traduzirNacionalidade(proxima.circuit.location.country)}  </h3>

      </div>
    </section>
      
        
    </>
  );
}

export default CardProxima;
