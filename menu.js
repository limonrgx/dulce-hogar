/* Menú responsivo: abre y cierra la navegación en pantallas pequeñas */
document.addEventListener("DOMContentLoaded", function () {
  var boton = document.querySelector(".boton-menu");
  var menu = document.getElementById("menu-principal");

  if (boton && menu) {
    boton.addEventListener("click", function () {
      var abierto = menu.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", abierto ? "true" : "false");
    });
  }

  /* Mensaje de confirmación en los formularios (demostración escolar) */
  var formularios = document.querySelectorAll("form[data-demo]");
  formularios.forEach(function (form) {
    form.addEventListener("submit", function (evento) {
      evento.preventDefault();
      var aviso = form.querySelector(".mensaje-enviado");
      if (aviso) {
        aviso.hidden = false;
        aviso.focus();
      }
      form.reset();
    });
  });
});
