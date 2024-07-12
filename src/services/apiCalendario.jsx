export const fetchCalendario = async() => {

    // fetch('./paises.json').then(res=>res.json())
    const response = await fetch('./circuitos.json');
    const data = await response.json();
    return data;
  
  };
  

  