/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let nombre = prompt("Por favor, ingresa tu nombre:");
  datosPersona.nombre = capitalizarPrimeraLetra(nombre);
  const anioNacimiento = prompt("Por favor, ingresa tu año de nacimiento:");
  const anioActual = new Date().getFullYear();
  datosPersona.edad = anioActual - anioNacimiento;
  let ciudad = prompt("Por favor, ingresa tu ciudad:");
  datosPersona.ciudad = capitalizarPrimeraLetra(ciudad);
  datosPersona.interesPorJs = confirm("¿Te interesa JavaScript?") ? "Sí" : "No";
}

function capitalizarPrimeraLetra(cadena) {
  let palabras = cadena.toLowerCase().split(' ');
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
  }
  return palabras.join(' ');
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombreSpan = document.getElementById("nombre");
  const edadSpan = document.getElementById("edad");
  const ciudadSpan = document.getElementById("ciudad");
  const javascriptSpan = document.getElementById("javascript");
  nombreSpan.textContent = datosPersona.nombre;
  edadSpan.textContent = datosPersona.edad;
  ciudadSpan.textContent = datosPersona.ciudad;
  javascriptSpan.textContent = datosPersona.interesPorJs;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.getElementById("fila");
  if (fila.children.length === 0) {
    let tarjetasHTML = "";
    listado.forEach(materia => {
      tarjetasHTML += `
        <div class="caja">
          <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
          <p class="lenguajes">${materia.lenguajes}</p>
          <p class="bimestre">${materia.bimestre}</p>
        </div>
      `;
    });
    fila.innerHTML += tarjetasHTML;
  }
}


function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.getElementById("sitio");
  sitio.classList.toggle("dark");
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener("keydown", function(event) {
  if (event.key === "f") {
    const sobreMiParrafo = document.getElementById("sobre-mi");
    sobreMiParrafo.classList.remove("oculto");
  }
});
