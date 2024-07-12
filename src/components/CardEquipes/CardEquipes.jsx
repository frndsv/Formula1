import React from 'react';
import './CardEquipes.css';


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

const classeEquipe = (time) => {
  
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

function CardEquipes({ equipes }) {
  return (

    <div id='cardEquipes' className={classeEquipe(equipes.name)}>
      <h1>{equipes.name}</h1>

      <img className='photoEquipe' src={equipes.teamphoto} alt={`Foto da ${equipes.name}`} />
      <div className='info-equipe'>

        <h3> <b> Pilotos  </b> {equipes.drivers}</h3>
        <h3> <b> Origem </b> {traduzirNacionalidade(equipes.nationality)}</h3>
        <h3> <b> Carro  </b> {equipes.car} </h3>
        <h3> <b> Motor  </b>  {equipes.engine}  </h3>
        <a className='infoPage' href={equipes.teamPage} >MAIS INFORMAÇÕES</a>
      </div>
    </div>
  );
}

export default CardEquipes;
