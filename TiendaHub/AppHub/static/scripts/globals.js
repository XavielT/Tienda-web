// Aqui estaran funciones globales tales como una funcion que habra un div o cierre dicho div

// Esta función alterna la visibilidad de un div al presionar un botón. Si el div está oculto (tiene la clase d-none), se mostrará, y si está visible, se ocultará. Sin embargo, para que la función funcione correctamente, se debe vincular el botón a un evento, como un onclick, que llame a esta función. Aquí hay un ejemplo de cómo usarlo:

//    <div id='divArticle'></div>    
//   <button id-"btnArticle" onclick='Alternar(this.id, divArticleID)'>  Abrir/Cerrar </button>

const Alternar = (btnId, divId) => {
      let button = document.getElementById(btnId);
      let div = document.getElementById(divId);
  
      if (div.classList.contains('d-none')) {
            div.classList.remove('d-none'); // Si tiene la clase, la quita
      } else {
            div.classList.add('d-none'); // Si no la tiene, la agrega
      }

};
