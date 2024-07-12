import React, {useState} from 'react';
import {fetchEquipes} from '../../services/apiEquipes'
import ListaEquipes from '../../components/ListaEquipes/ListaEquipes'

import './construtores.css'


const equipes = () => {

  const [equipes, setPilotos] = useState([]);  

 const carregaEquipes = async () => {
    try {
      const dadosEquipes = await fetchEquipes();
      setPilotos(dadosEquipes);
    } catch (error) {
      console.error("Erro de acesso api: ", error);
    }
  };

  carregaEquipes()
  return (
    <> 
    <main className='main-teams'>
        <div className='about-teams'>
          <h1> AS EQUIPES DA FORMULA 1 </h1>
          <p> Conheça as atuais equipes que compoem o grid da temporada 2024 da Formula 1! </p>
        </div>
    </main>

    <div>
      <section className='equipes'>
        <div className='equipes-content'>
          <h1 id='content-title'> Equipes e carros </h1>
          <div className="list">
            <ListaEquipes equipes={equipes}/>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default equipes;
