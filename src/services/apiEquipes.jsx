export const fetchEquipes = async() => {

    // fetch('./paises.json').then(res=>res.json())
    const response = await fetch('./construtores.json');
    const data = await response.json();
    return data;
  
  };
  

  