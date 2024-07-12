import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home.jsx'
import Pilotos from './pages/Pilotos/pilotos.jsx'
import Equipes from './pages/Construtores/construtores'
import Calendario from './pages/Calendario/calendario'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function AppRoutes() {

    const ScrollToTop = () => {
        useEffect(() => {
          const scrollToTop = () => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          };
      
          window.addEventListener('hashchange', scrollToTop);
      
          return () => {
            window.removeEventListener('hashchange', scrollToTop);
          };
        }, []);
      
        return null;
      };
      
    return (
        <>
        
            <BrowserRouter>
           
          
                <Header />
                <ScrollToTop />
                    <Routes>
                   
                        <Route path="/" element={ <Home /> }></Route>
                        <Route path="/pilotos" element={ <Pilotos /> }></Route>
                        <Route path="/equipes" element={ <Equipes /> }></Route>

                        <Route path="/calendario" element={ <Calendario /> }></Route>
                    </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default AppRoutes

