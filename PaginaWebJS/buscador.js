// BUSCADOR DE AUTOS

// Esperamos a que la página cargue todo antes de ejecutar el código
window.addEventListener("load", function () {
 
  //CREAMOS EL BUSCADOR 
 
  let seccionDescripcion = document.querySelector(".seccion-descripcion");
 

  let inputBusqueda = document.createElement("input");
  inputBusqueda.type = "text";
  inputBusqueda.id = "buscador";
  

  inputBusqueda.style.width = "90%";
  inputBusqueda.style.maxWidth = "500px";
  inputBusqueda.style.padding = "12px 18px";
  inputBusqueda.style.fontSize = "16px";
  inputBusqueda.style.borderRadius = "30px";
  inputBusqueda.style.border = "2px solid #1b368f";
  inputBusqueda.style.outline = "none";
  inputBusqueda.style.marginTop = "16px";
  inputBusqueda.style.display = "block";
  inputBusqueda.style.marginLeft = "auto";
  inputBusqueda.style.marginRight = "auto";
 
  // Creamos un texto que muestra cuántos resultados hay
  let contadorResultados = document.createElement("p");
  contadorResultados.id = "contador-resultados";
  contadorResultados.style.marginTop = "10px";
  contadorResultados.style.color = "#555";
  contadorResultados.style.fontSize = "14px";
 
 
  seccionDescripcion.appendChild(inputBusqueda);
  seccionDescripcion.appendChild(contadorResultados);
 

  inputBusqueda.addEventListener("input", function () {
 
    // Agarramos el texto que escribió y lo pasamos a minúsculas
    let textoBuscado = inputBusqueda.value.toLowerCase();
 

    let tarjetas = document.querySelectorAll(".tarjeta-auto");
 

    let secciones = document.querySelectorAll(".seccion-categoria");
 
    let cantidadVisible = 0; // contador de cuántos autos se muestran
 
  
    tarjetas.forEach(function (tarjeta) {
 

      let nombreAuto = tarjeta.querySelector("h3").innerText.toLowerCase();
 

      let seccionPadre = tarjeta.closest(".seccion-categoria");
      let nombreCategoria = seccionPadre.querySelector("h2").innerText.toLowerCase();
 
  
      let coincide = nombreAuto.includes(textoBuscado) || nombreCategoria.includes(textoBuscado);
 
      // Mostramos o no la tarjeta según si coincide
      if (coincide) {
        tarjeta.style.display = "block";
        cantidadVisible++;
      } else {
        tarjeta.style.display = "none";
      }
    });
 

    secciones.forEach(function (seccion) {
      let tarjetasVisibles = seccion.querySelectorAll(".tarjeta-auto");
      let algunaVisible = false;
 
      tarjetasVisibles.forEach(function (t) {
        if (t.style.display !== "none") {
          algunaVisible = true;
        }
      });
 

      seccion.style.display = algunaVisible ? "block" : "none";
    });
 

  });
 
});
 