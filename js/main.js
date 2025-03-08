// Array de ejercicios por grupo muscular
const ejercicios = {
    gluteos: [
        { nombre: "Hip Thrust", descripcion: "Ejercicio para activar y fortalecer los glúteos." },
        { nombre: "Puente de glúteos", descripcion: "Ejercicio de empuje para la parte baja del cuerpo." },
        { nombre: "Patada de glúteo en polea", descripcion: "Ejercicio aislado para glúteos en polea baja." },
        { nombre: "Sentadilla sumo", descripcion: "Variante de sentadilla enfocada en glúteos y aductores." },
        { nombre: "Peso muerto rumano", descripcion: "Ejercicio que trabaja glúteos e isquiotibiales." }
    ],
    isquiotibiales: [
        { nombre: "Curl de piernas acostado", descripcion: "Ejercicio de aislamiento para isquiotibiales." },
        { nombre: "Peso muerto rumano", descripcion: "Ejercicio compuesto para isquiotibiales y glúteos." },
        { nombre: "Puente de glúteos con pierna extendida", descripcion: "Variante avanzada para isquiotibiales y glúteos." },
        { nombre: "Curl de piernas sentado", descripcion: "Ejercicio controlado para isquiotibiales." },
        { nombre: "Buenos días", descripcion: "Ejercicio de bisagra de cadera para fortalecer isquiotibiales." }
    ],
    cuadriceps: [
        { nombre: "Sentadilla con barra", descripcion: "Ejercicio compuesto para piernas y core." },
        { nombre: "Prensa de piernas", descripcion: "Ejercicio de empuje para cuadriceps y glúteos." },
        { nombre: "Zancadas con mancuernas", descripcion: "Ejercicio unilateral para piernas." },
        { nombre: "Extensión de piernas", descripcion: "Ejercicio aislado para el cuadriceps." },
        { nombre: "Sentadilla frontal", descripcion: "Variante de sentadilla que enfatiza el cuadriceps." }
    ],
    gemelos: [
        { nombre: "Elevación de talones de pie", descripcion: "Ejercicio básico para desarrollar gemelos." },
        { nombre: "Elevación de talones sentado", descripcion: "Ejercicio que trabaja el sóleo del gemelo." },
        { nombre: "Saltos con cuerda", descripcion: "Ejercicio dinámico para fortalecer los gemelos." },
        { nombre: "Elevación de talones en prensa", descripcion: "Ejercicio de carga progresiva para gemelos." },
        { nombre: "Sprint en cuesta", descripcion: "Ejercicio funcional para fortalecer gemelos y piernas." }
    ],
    hombros: [
        { nombre: "Press militar con barra", descripcion: "Ejercicio compuesto para hombros y tríceps." },
        { nombre: "Elevaciones laterales", descripcion: "Ejercicio aislado para deltoides laterales." },
        { nombre: "Press Arnold", descripcion: "Variante de press para activar todos los deltoides." },
        { nombre: "Elevaciones frontales", descripcion: "Ejercicio aislado para deltoides frontales." },
        { nombre: "Face pull", descripcion: "Ejercicio para hombros posteriores y trapecios." }
    ],
    biceps: [
        { nombre: "Curl con barra", descripcion: "Ejercicio básico para desarrollar los bíceps." },
        { nombre: "Curl con mancuernas", descripcion: "Ejercicio unilateral para mayor control." },
        { nombre: "Curl martillo", descripcion: "Ejercicio para trabajar braquial y bíceps." },
        { nombre: "Curl concentrado", descripcion: "Ejercicio de aislamiento para los bíceps." },
        { nombre: "Dominadas supinas", descripcion: "Ejercicio compuesto que trabaja espalda y bíceps." }
    ],
    triceps: [
        { nombre: "Fondos en paralelas", descripcion: "Ejercicio compuesto para tríceps y pectorales." },
        { nombre: "Extensiones de tríceps en polea", descripcion: "Ejercicio de aislamiento para tríceps." },
        { nombre: "Press francés con barra", descripcion: "Ejercicio de empuje para el tríceps." }
    ],
    espalda: [
        { nombre: "Dominadas", descripcion: "Ejercicio compuesto para dorsales y bíceps." },
        { nombre: "Remo con barra", descripcion: "Ejercicio para desarrollar la espalda media." },
        { nombre: "Jalón al pecho", descripcion: "Ejercicio en polea para dorsales." },
        { nombre: "Remo con mancuerna", descripcion: "Ejercicio unilateral para la espalda." },
        { nombre: "Peso muerto", descripcion: "Ejercicio completo que trabaja toda la espalda." }
    ]
};

// Cargar rutinas
const rutinas = JSON.parse(localStorage.getItem("rutinas")) || {
    lunes: [],
    martes: [],
    miercoles: [],
    jueves: [],
    viernes: [],
    sabado: []
};

//Funcion guardar la rutina
function guardarRutinas() {
    localStorage.setItem("rutinas", JSON.stringify(rutinas));
}

  // Funcion para obtener un ejercicion por nombre
function obtenerEjercicioPorNombre(nombre) {
    return Object.values(ejercicios).flat().find(e => e.nombre === nombre);
}

  //Funcion para agregar un ejercicio al dia especifico
function agregarEjercicioARutina(dia, nombre, series, repeticiones) {
    const ejercicio = obtenerEjercicioPorNombre(nombre);
    if (ejercicio && rutinas[dia].length < 6) {
    rutinas[dia].push({ ...ejercicio, series, repeticiones });
    guardarRutinas();
    actualizarListaRutina(dia);
    }
}

  // Eliminar ejercicio de un día específico
function eliminarEjercicioDeRutina(dia, nombre) {
    rutinas[dia] = rutinas[dia].filter(ejercicio => ejercicio.nombre !== nombre);
    guardarRutinas();
    actualizarListaRutina(dia);
}

  // Modificar ejercicio de la rutina
function modificarEjercicioEnRutina(dia, nombre, nuevaSeries, nuevasRepeticiones) {
    const index = rutinas[dia].findIndex(e => e.nombre === nombre);
    if (index !== -1) {
    rutinas[dia][index].series = nuevaSeries;
    rutinas[dia][index].repeticiones = nuevasRepeticiones;
    guardarRutinas();
    actualizarListaRutina(dia);
    }
}

  // Función que crea un formulario de edicion
function crearFormularioEdicion(li, dia, ejercicio) {
    li.innerHTML = "";

    // Input para series
    const inputSeries = document.createElement("input");
    inputSeries.type = "number";
    inputSeries.value = ejercicio.series;
    inputSeries.placeholder = "Series";

    // Input para repeticiones
    const inputRepeticiones = document.createElement("input");
    inputRepeticiones.type = "number";
    inputRepeticiones.value = ejercicio.repeticiones;
    inputRepeticiones.placeholder = "Repeticiones";

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

    // Botón para cancelar y actualizar
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
const form = document.getElementById("form-rutina");
form.addEventListener("submit", event => {
    event.preventDefault();
    const dia = event.target.dia.value;
    const nombre = event.target.ejercicio.value;
    const series = event.target.series.value;
    const repeticiones = event.target.repeticiones.value;
    agregarEjercicioARutina(dia, nombre, series, repeticiones);
    event.target.reset();
});

Object.keys(rutinas).forEach(dia => {
    actualizarListaRutina(dia);
});