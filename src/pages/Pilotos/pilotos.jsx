import React, {useState} from 'react';
import { fetchPilotos } from '../../services/apiPilotos';
import ListaPilotos from '../../components/ListaPilotos/ListaPilotos';
import './pilotos.css'


const pilotos = () => {

  const [pilotos, setPilotos] = useState([]);  

 const carregaPilotos = async () => {
    try {
      const dadosPilotos = await fetchPilotos();
      setPilotos(dadosPilotos);
    } catch (error) {
      console.error("Erro de acesso api: ", error);
    }
  };

  carregaPilotos()
  return (
    <div>
  
        <main className='main-piloto'>
          <div className='about-piloto'>
            <h1> OS PILOTOS DA FORMULA 1 </h1>
            <p> Conheça os atuais pilotos do grid de 2024! </p>
          </div>
        </main>





          <section className='pilotos'>
            <div className='pilotos-content'>
              <h1 id='content-title'> Pilotos da Temporada de 2024 </h1>
              
              <div className="list">
                <ListaPilotos pilotos={pilotos}/>
              </div>
            </div>

          </section>


    </div>
    
  );
};

export default pilotos;
