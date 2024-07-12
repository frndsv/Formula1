import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import {fetchProxima} from './services/apiProxima';
import ListaProxima from './components/ListaProxima/ListaProxima';
import './home.css'


const proxima = () => {

  const [proxima, setProxima] = useState([]);  

 const carregaProxima = async () => {
    try {
      const dadosProxima = await fetchProxima();
      setProxima(dadosProxima);
    } catch (error) {
      console.error("Erro de acesso api: ", error);
    }
  };

  carregaProxima()
  return (
    <>

        <section id='intro'>
          <div className='card'>
            <ListaProxima proxima={proxima}/>
          </div>
        </section>

        


        <main className='main-f1'>
          <div className='what-f1'>
            <h1> O que é a Formula 1? </h1>
            <p> A Fórmula 1 não é apenas sobre corridas, é um esporte que transcende fronteiras culturais e linguísticas, unindo fãs de todos os cantos do planeta em torno de uma paixão compartilhada pela velocidade e pela busca incansável pela perfeição. Os pilotos não são apenas atletas, são heróis modernos que enfrentam desafios extremos enquanto lutam pelo título de campeão mundial.

            E se você ainda não se sente convencido, imagine-se absorvido pela atmosfera elétrica de um autódromo, cercado pelo som ensurdecedor dos motores, pelo cheiro de pneus queimados e pela intensidade das disputas na pista. Cada corrida é uma história épica que se desenrola diante dos seus olhos, onde estratégias arrojadas e ultrapassagens emocionantes mantêm você na ponta da cadeira.</p>
          </div>
        </main>

        <section className='section1'>
          <div className='more-info'>
            <div className='card-info'> 
              <h1> Pilotos </h1>  
              <p> Na Fórmula 1, 20 pilotos titulares estão divididos em 10 equipes. Cada equipe conta com dois pilotos que competem nas corridas. Além dos titulares, há pilotos reservas prontos para substituir em caso de necessidade.</p>
              <Link to="/pilotos" className="button">
                Ver pilotos
              </Link>
              
            </div>
            <div className='card-info'>
              <h1> Equipes </h1>  
              <p> Como dito anteriormente, existem 10 equipes que variam amplamente em termos de história. Algumas são montadoras como a Ferrari, com uma longa tradição tanto dentro quanto fora das corridas de Fórmula 1. Outras equipes, como a Williams, são exclusivamente dedicadas ao esporte. </p>
              <Link to="/equipes" className="button">
                Ver equipes
              </Link>
            </div>
          </div>
        </section>



    </>
    
  );
};

export default proxima;
