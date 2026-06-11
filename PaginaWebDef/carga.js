// PANTALLA DE CARGA 

(function () {

//CREAMOS LA PANTALLA DE CARGA 
  let pantalla = document.createElement("div");
  pantalla.id = "pantalla-carga";

  pantalla.style.position = "fixed";
  pantalla.style.top = "0";
  pantalla.style.left = "0";
  pantalla.style.width = "100%";
  pantalla.style.height = "100%";
  pantalla.style.backgroundColor = "#1b368f";
  pantalla.style.display = "flex";
  pantalla.style.flexDirection = "column";
  pantalla.style.alignItems = "center";
  pantalla.style.justifyContent = "center";
  pantalla.style.zIndex = "9999"; 
  pantalla.style.transition = "opacity 0.6s ease"; 

  // Logo de VW
  let logo = document.createElement("img");
  logo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/1280px-Volkswagen_logo_2019.svg.png";
  logo.alt = "Volkswagen";
  logo.style.width = "100px";
  logo.style.marginBottom = "24px";
  logo.style.animation = "girar 1.5s linear infinite"; 

  // Texto de carga
  let texto = document.createElement("p");
  texto.innerText = "Cargando...";
  texto.style.color = "white";
  texto.style.fontSize = "18px";
  texto.style.fontFamily = "Georgia, serif";
  texto.style.letterSpacing = "3px";


  let barraContenedor = document.createElement("div");
  barraContenedor.style.width = "200px";
  barraContenedor.style.height = "4px";
  barraContenedor.style.backgroundColor = "rgba(255,255,255,0.3)";
  barraContenedor.style.borderRadius = "2px";
  barraContenedor.style.marginTop = "16px";
  barraContenedor.style.overflow = "hidden";


  let barraProgreso = document.createElement("div");
  barraProgreso.style.width = "0%";
  barraProgreso.style.height = "100%";
  barraProgreso.style.backgroundColor = "white";
  barraProgreso.style.borderRadius = "2px";
  barraProgreso.style.transition = "width 0.1s linear";

  let estiloAnimacion = document.createElement("style");
  estiloAnimacion.innerText = `
    @keyframes girar {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(estiloAnimacion);

  barraContenedor.appendChild(barraProgreso);
  pantalla.appendChild(logo);
  pantalla.appendChild(texto);
  pantalla.appendChild(barraContenedor);


  document.addEventListener("DOMContentLoaded", function () {
    document.body.insertBefore(pantalla, document.body.firstChild);
  });


  let progreso = 0;


  let intervalo = setInterval(function () {
    progreso += 2; // Sube de a 2% cada vez
    barraProgreso.style.width = progreso + "%";

    if (progreso >= 100) {
      clearInterval(intervalo); 
    }
  }, 20);


  window.addEventListener("load", function () {


    setTimeout(function () {


      pantalla.style.opacity = "0";

   
      setTimeout(function () {
        pantalla.remove(); 
      }, 600);

    }, 800);
  });

})(); 