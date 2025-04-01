const ejercicios =[
      {musculo: "gluteos",
        nombre: "Hip Thrust", 
      descripcion: "Ejercicio para activar y fortalecer los glúteos." },
      { musculo: "gluteos",
        nombre: "Puente de glúteos",
      descripcion: "Ejercicio de empuje para la parte baja del cuerpo."},
      { musculo: "gluteos",
        nombre: "Patada de glúteo en polea",
      descripcion: "Ejercicio aislado para glúteos en polea baja." },
      { musculo: "gluteos",
        nombre: "Sentadilla sumo",
      descripcion: "Variante de sentadilla enfocada en glúteos y aductores." },
        { musculo: "gluteos",
          nombre: "Peso muerto rumano",
        descripcion: "Ejercicio que trabaja glúteos e isquiotibiales." 
        },
        { musculo: "isquiotibiales",
          nombre: "Curl de piernas acostado",
        descripcion: "Ejercicio de aislamiento para isquiotibiales." },
        { musculo: "isquiotibiales",
          nombre: "Peso muerto rumano",
        descripcion: "Ejercicio compuesto para isquiotibiales y glúteos." },
        { musculo: "isquiotibiales",
          nombre: "Puente de glúteos con pierna extendida", 
          descripcion: "Variante avanzada para isquiotibiales y glúteos." },
        { musculo: "isquiotibiales",
          nombre: "Curl de piernas sentado", 
          descripcion: "Ejercicio controlado para isquiotibiales." },
        { musculo: "isquiotibiales",
          nombre: "Buenos días", 
          descripcion: "Ejercicio de bisagra de cadera para fortalecer isquiotibiales." },
        { musculo: "cuadriceps",
          nombre: "Sentadilla con barra", 
          descripcion: "Ejercicio compuesto para piernas y core." },
        { musculo: "cuadriceps",
          nombre: "Prensa de piernas", 
          descripcion: "Ejercicio de empuje para cuadriceps y glúteos." },
        { musculo: "cuadriceps",
          nombre: "Zancadas con mancuernas", 
          descripcion: "Ejercicio unilateral para piernas." },
        { musculo: "cuadriceps",
          nombre: "Extensión de piernas", 
          descripcion: "Ejercicio aislado para el cuadriceps." },
        { musculo: "cuadriceps",
          nombre: "Sentadilla frontal", 
          descripcion: "Variante de sentadilla que enfatiza el cuadriceps." },
        { musculo: "gemelos",
          nombre: "Elevación de talones de pie", 
          descripcion: "Ejercicio básico para desarrollar gemelos." },
        { musculo: "gemelos",
          nombre: "Elevación de talones sentado", 
          descripcion: "Ejercicio que trabaja el sóleo del gemelo." },
        { musculo: "gemelos",
          nombre: "Saltos con cuerda", 
          descripcion: "Ejercicio dinámico para fortalecer los gemelos." },
        { musculo: "gemelos",
          nombre: "Elevación de talones en prensa", 
          descripcion: "Ejercicio de carga progresiva para gemelos." },
        { musculo: "gemelos",
          nombre: "Sprint en cuesta", 
          descripcion: "Ejercicio funcional para fortalecer gemelos y piernas." },
        {musculo: "hombros",
          nombre: "Press militar con barra", 
          descripcion: "Ejercicio compuesto para hombros y tríceps." },
        { musculo: "hombros",
          nombre: "Elevaciones laterales", 
          descripcion: "Ejercicio aislado para deltomusculoes laterales." },
        { musculo: "hombros",
          nombre: "Press Arnold", 
          descripcion: "Variante de press para activar todos los deltomusculoes." },
        { musculo: "hombros",
          nombre: "Elevaciones frontales", 
          descripcion: "Ejercicio aislado para deltomusculoes frontales." },
        { musculo: "hombros",
          nombre: "Face pull", 
          descripcion: "Ejercicio para hombros posteriores y trapecios." },
        { musculo: "biceps",
          nombre: "Curl con barra", 
          descripcion: "Ejercicio básico para desarrollar los bíceps." },
        { musculo: "biceps",
          nombre: "Curl con mancuernas", 
          descripcion: "Ejercicio unilateral para mayor control." },
        { musculo: "biceps",
          nombre: "Curl martillo", 
          descripcion: "Ejercicio para trabajar braquial y bíceps." },
        { musculo: "biceps",
          nombre: "Curl concentrado", 
          descripcion: "Ejercicio de aislamiento para los bíceps." },
        { musculo: "biceps",
          nombre: "Dominadas supinas", 
          descripcion: "Ejercicio compuesto que trabaja espalda y bíceps." },
        { musculo: "triceps",
          nombre: "Fondos en paralelas", 
          descripcion: "Ejercicio compuesto para tríceps y pectorales." },
        { musculo: "triceps",
          nombre: "Extensiones de tríceps en polea", 
          descripcion: "Ejercicio de aislamiento para tríceps." },
        { musculo: "triceps",
          nombre: "Press francés con barra", 
          descripcion: "Ejercicio de empuje para el tríceps." },
        { musculo: "espalda",
          nombre: "Dominadas", 
          descripcion: "Ejercicio compuesto para dorsales y bíceps." },
        { musculo: "espalda",
          nombre: "Remo con barra", 
          descripcion: "Ejercicio para desarrollar la espalda media." },
        { musculo: "espalda",
          nombre: "Jalón al pecho", 
          descripcion: "Ejercicio en polea para dorsales." },
        { musculo: "espalda",
          nombre: "Remo con mancuerna", 
          descripcion: "Ejercicio unilateral para la espalda." },
        { musculo: "espalda",
          nombre: "Peso muerto", 
          descripcion: "Ejercicio completo que trabaja toda la espalda." },
    ]

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
 function guardarRutinas() {
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

      function crearFormularioEdicion(li, dia, ejercicio) {
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