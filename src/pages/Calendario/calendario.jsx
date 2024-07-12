import React, {useState} from 'react';
import {fetchCalendario} from '../../services/apiCalendario'
import ListaCalendario from '../../components/ListaCalendario/ListaCalendario'
import './calendario.css'


const calendario = () => {

  const [calendario, setCalendario] = useState([]);  

 const carregaCalendario = async () => {
    try {
      const dadosCalendario = await fetchCalendario();
      setCalendario(dadosCalendario);
    } catch (error) {
      console.error("Erro de acesso api: ", error);
    }
  };

  carregaCalendario()
  return (
    <> 
    <main className='main-calendario'>
        <div className='about-calendario'>
          <h1> CALENDÁRIO FÓRMULA 1 2024 </h1>
          <p> Conheça os circuitos que compõem o calendário de 2024 da fórmula 1 </p>
        </div>
    </main>

    <div>
      <section className='equipes'>
        <div className='equipes-content'>
          <div className="list">
            <ListaCalendario calendario={calendario}/>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default calendario;
