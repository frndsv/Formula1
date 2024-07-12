import React from 'react';

import './CardPilotos.css';

const formatarDataBrasileiro = (dataString) => {
  const data = new Date(dataString);
  return data.toLocaleDateString('pt-BR');

};

const traduzirNacionalidade = (nationality) => {
  const nacionalidades = {
    "American": "Americano",
    "Australian": "Australiano",
    "British": "Britânico",
    "Canadian": "Canadense",
    "Chinese": "Chinês",
    "Danish": "Dinamarquês",
    "Dutch": "Holandês",
    "Finnish": "Finlandês",
    "French": "Francês",
    "German": "Alemão",
    "Japanese": "Japonês",
    "Mexican": "Mexicano",
    "Monegasque": "Monegasco",
    "Spanish": "Espanhol",
    "Thai": "Tailandês"
  };
  return nacionalidades[nationality] || nationality;
};

const classePais = (time) => {
  
    let classe = ``;
    switch (time) {
        case 'BWT Alpine F1 Team':
            classe = `alpine`;
            break;
        case 'Aston Martin Aramco F1 Team':
            classe = `astonMartin`;
            break;
        case 'Scuderia Ferrari' :
            classe = `ferrari`;
            break;
        case 'MoneyGram Haas F1 Team' :
            classe = `haas`;
            break;
        case 'Stake F1 Team Kick Sauber' :
            classe = `sauber`;
            break;
        case 'McLaren Formula 1 Team' :
            classe = `mclaren`;
            break;
        case 'Mercedes-AMG PETRONAS F1 Team' :
            classe = `mercedes`;
            break;
        case 'Visa Cash App RB Formula One Team' :
            classe = `maquininha`;
            break;
        case 'Oracle Red Bull Racing':
            classe = `redbull`
            break;
        default:
            classe = `williams`;
          
    }

  
  return classe;
};

function CardPilotos({ pilotos }) {
  return (
    <div id='cardPiloto' className={classePais(pilotos.team)}>

      <h1>{pilotos.givenName + ' ' + pilotos.familyName}</h1>
      <img className='photoPiloto' src={pilotos.driverPhoto} alt={`Foto do ${pilotos.driverId}`} />
      <div className='info-piloto'>

        <h3> <b> Equipe </b> {pilotos.team}</h3>
        <h3> <b> Número </b> {pilotos.permanentNumber}</h3>
        <h3> <b> Código </b> {pilotos.code}</h3>
        <h3> <b> Nacionalidade </b> {traduzirNacionalidade(pilotos.nationality)}</h3>
        <h3> <b> Data de nascimento </b> {formatarDataBrasileiro(pilotos.dateOfBirth)}</h3>
        <a className='infoPage' href={pilotos.driverPage} >MAIS INFORMAÇÕES</a>  
      </div>
    </div>
  );
}

export default CardPilotos;
