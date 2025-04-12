Swal.fire({
  title: "ESTAS LISTO PARA CREAR TU RUTINA IDEAL?",
  width: 600,
  padding: "7em",
  color: "#716add",
  background: "#fff ",
  backdrop: `
    rgba(0,0,123,0.4)
    url(./imagen/imagen.jpg)
    no-repeat center center / contain
  `
});


fetch('./db/data.json')
  .then(response => response.json())
  .then(data => {
    const ejercicios = data;

    const selectEjercicio = document.getElementById("ejercicio");
    ejercicios.forEach(ej => {
      const option = document.createElement("option");
      option.value = ej.nombre;
      option.textContent = ej.nombre;
      selectEjercicio.appendChild(option);
    });
  let ejerci = document.getElementById("ejercicios")
  ejercicios.forEach((ejercicio)=>{
  let card = document.createElement("div")
  card.className = "card"
  card.innerHTML = `  <span>musculo: ${ejercicio.musculo}</span>
                      <h3>Nombre: ${ejercicio.nombre}</h3>
                      <h4>Descripcion: ${ejercicio.descripcion}</h4>`
                      ejerci.appendChild(card)

})
})

let ejercicios = [];

fetch('./db/data.json')
  .then(response => response.json())
  .then(data => {
    ejercicios = data;
    
  });
//Cargar rutinas
const rutinas = JSON.parse(localStorage.getItem("ejercicio")) ?? {
    lunes: [],
    martes: [],
    miercoles: [],
    jueves: [],
    viernes: [],
    sabado: []
};

//Funcion guardar la rutina
const guardarRutinas = async () => {
  localStorage.setItem("ejercicio", JSON.stringify(rutinas));
};

  // Funcion para obtener un ejercicio por nombre
  function obtenerEjercicioPorNombre(nombre) {
    return ejercicios.find(e => e.nombre === nombre);
}

//Funcion para agregar un ejercicio al dia especifico
function agregarEjercicioARutina(dia, nombre, series, repeticiones) {
  const ejercicio = obtenerEjercicioPorNombre(nombre);
  const existe = rutinas[dia].find(e => e.nombre === nombre);

  if (!ejercicio) return alert("El ejercicio no existe.");
  else if (existe) {
      existe.series += parseInt(series, 10);
      existe.repeticiones += parseInt(repeticiones, 10);
  } else {
      rutinas[dia].push({ ...ejercicio, series: parseInt(series, 10), repeticiones: parseInt(repeticiones, 10) });
  }

  guardarRutinas();
  actualizarListaRutina(dia);
}

  //  Eliminar ejercicio de un día específico
function eliminarEjercicioDeRutina(dia, nombre) {
    rutinas[dia] = rutinas[dia].filter(ejercicio => ejercicio.nombre !== nombre);
    guardarRutinas();
    actualizarListaRutina(dia);
}

  //   Modificar ejercicio de la rutina
function modificarEjercicioEnRutina(dia, nombre, nuevaSeries, nuevasRepeticiones) {
      const index = rutinas[dia].findIndex(e => e.nombre === nombre);
      if (index !== -1) {
      rutinas[dia][index].series = nuevaSeries;
      rutinas[dia][index].repeticiones = nuevasRepeticiones;
      guardarRutinas();
      actualizarListaRutina(dia);
      }
  }

   //  Función que crea un formulario de edicion
  function crearFormularioEdicion(li, dia, ejercicio) {
      li.innerHTML = "";

      function generarFormularioEdicion(li, dia, ejercicio) {
      li.innerHTML = `
          <input type="number" id="series" value="${ejercicio.series}" placeholder="Series">
          <input type="number" id="repeticiones" value="${ejercicio.repeticiones}" placeholder="Repeticiones">
          <p id="error-mensaje" style="color: red; font-size: 0.9rem;"></p>
          <button type="button" id="guardar">Guardar</button>
          <button type="button" id="cancelar">Cancelar</button>
      `;
  
      li.querySelector("#guardar").addEventListener("click", () => {
          const nuevasSeries = parseInt(li.querySelector("#series").value, 10);
          const nuevasRepeticiones = parseInt(li.querySelector("#repeticiones").value, 10);
          const errorMensaje = li.querySelector("#error-mensaje");
  
          if (nuevasSeries > 0 && nuevasRepeticiones > 0) {
            modificarEjercicioEnRutina(dia, ejercicio.nombre, nuevasSeries, nuevasRepeticiones);
          } else {
            errorMensaje.textContent = "⚠️ Las series y repeticiones deben ser mayores a 0.";
    
          }
      });
  
      li.querySelector("#cancelar").addEventListener("click", () => {
          actualizarListaRutina(dia);
      });
  }

      // Botón para guardar cambios
      const btnGuardar = document.createElement("button");
      btnGuardar.textContent = "Guardar";
      btnGuardar.addEventListener("click", () => {
      const nuevasSeries = inputSeries.value;
      const nuevasRepeticiones = inputRepeticiones.value;
      if (nuevasSeries && nuevasRepeticiones) {
          modificarEjercicioEnRutina(dia, ejercicio.nombre, nuevasSeries, nuevasRepeticiones);
      }
    
      });

    //  Botón para cancelar y actualizar
      const btnCancelar = document.createElement("button");
      btnCancelar.textContent = "Cancelar";
      btnCancelar.addEventListener("click", () => {
      actualizarListaRutina(dia);
      });

      li.appendChild(inputSeries);
      li.appendChild(inputRepeticiones);
      li.appendChild(btnGuardar);
      li.appendChild(btnCancelar);
  }

    // Actualizar la lista de rutinas para un día específico
  function actualizarListaRutina(dia) {
      const lista = document.getElementById(`rutina-${dia}`);
      lista.innerHTML = "";
      rutinas[dia].map(ejercicio => {
      const li = document.createElement("li");
      li.textContent = `${ejercicio.nombre} - ${ejercicio.series}x${ejercicio.repeticiones}`;

      const btnModificar = document.createElement("button");
      btnModificar.textContent = "Modificar";
      btnModificar.addEventListener("click", () => {
          crearFormularioEdicion(li, dia, ejercicio);
      });

      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";
      btnEliminar.addEventListener("click", () => {
          eliminarEjercicioDeRutina(dia, ejercicio.nombre);
      });

      li.appendChild(btnModificar);
      li.appendChild(btnEliminar);
      lista.appendChild(li);
      });
  }

    //envío del formulario para añadir ejercicios
    document.getElementById("form-ejercicios").addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const dia = formData.get("dia");
      const nombre = formData.get("ejercicio");
      const series = parseInt(formData.get("series"), 10);
      const repeticiones = parseInt(formData.get("repeticiones"), 10);
  
      if (dia && nombre && series > 0 && repeticiones > 0) {
          agregarEjercicioARutina(dia, nombre, series, repeticiones);
          event.target.reset();
          errorContainer.textContent = "";
      } else {
          errorContainer.textContent = "⚠️ Completa todos los campos con valores válidos. Series y repeticiones deben ser mayores a 0.";
          errorContainer.style.color = "red";
    
      }
      
  });

  Object.keys(rutinas).forEach(dia => {
      actualizarListaRutina(dia);
  });