const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

$(document).ready(function(){

  $('.ir-arriba').click(function(){
      $('body, html').animate({
        scrollTop:'0px'
      });
  });

});