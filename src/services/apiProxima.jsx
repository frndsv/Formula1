export const fetchProxima = async() => {

    // fetch('./paises.json').then(res=>res.json())
    const response = await fetch('./proxima.json');
    const data = await response.json();
    return data;
  
  };
  

  