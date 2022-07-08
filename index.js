// MENU DESPLEGABLE MOBILE

function cerrarModal() {
  const contenedor = document.getElementById('contenedorMenuMobile');
  const boton = document.getElementById('botonMenu');

  //La funcion que oculta y muestra
  function showHide(e){
    e.preventDefault();
    e.stopPropagation();
    if(contenedor.style.display === "none"){
      contenedor.style.display = "block";
    } else if(contenedor.style.display === "block"){
      contenedor.style.display = "none";
    }
  }

  //Al hacer click en el boton
  boton.addEventListener("click", showHide, false);

  //Funcion para cualquier click en el documento
  document.addEventListener("click", function(e){
  console.log('clic');

  //Obteniendo informacion del DOM 
  let click = e.target;
  console.log(click);
  if(contenedor.style.display == "block" && click != contenedor){
    contenedor.style.display = "none";
    }
  }, false);
}

// MODAL
function modalBox() {   
  const open = document.getElementById('open');
  const modal_container = document.getElementById('modal_container');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
      modal_container.classList.add('show');
  });


  close.addEventListener('click', () => {
      modal_container.classList.remove('show');
  });
}

function modalBoxMobile() {
  const open = document.getElementById('botonModalMobile');
  const modal_container = document.getElementById('modal_container');
  const close = document.getElementById('closeMobile');

  open.addEventListener('click', () => {
      modal_container.classList.add('show');
  });


  close.addEventListener('click', () => {
      modal_container.classList.remove('show');
  });
}
function cargarDocumento() {
    modalBox();
    myEndFunction();
    cerrarModal();
    modalBoxMobile();
}

window.onload = cargarDocumento;
