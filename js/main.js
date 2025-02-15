// Crear nombre de usuario y contraseña
const crearUsuario = () => {
    const usuario = prompt("Crea tu nombre de usuario:");
    const contraseña = prompt("Crea tu contraseña:");

    // Guarda el usuario y la contraseña en variables
    return { usuario, contraseña };
};

  // Solicitar nombre de usuario y contraseña para ingresar
const ingresar = (usuarioGuardado, contraseñaGuardada) => {
    const usuarioIngreso = prompt("Ingresa tu nombre de usuario:");
    const contraseñaIngreso = prompt("Ingresa tu contraseña:");

    if (usuarioIngreso === usuarioGuardado && contraseñaIngreso === contraseñaGuardada) {
    alert("¡Ingreso exitoso!");
    } else {
    alert("Nombre de usuario o contraseña incorrectos.");
    }
};

  // Crear el usuario y la contraseña
const { usuario, contraseña } = crearUsuario();

  // Intentar ingresar con los datos
ingresar(usuario, contraseña);

//array empleados de la empresa
let arrayEmpleados = [];

arrayEmpleados.push({
    nombre: "Ana", puesto: "Desarrolladora"
});
arrayEmpleados.push({
    nombre:"Felipe", puesto:"Recursos humanos"
});
arrayEmpleados.push({
    nombre:"Patricia", puesto:"Gerente de operaciones"
});

console.log(arrayEmpleados)

for(let Empleados of arrayEmpleados){
    console.log(Empleados.nombre,Empleados.puesto);
}


// Array para almacenar los tickets
let tickets = [];

// Función para agregar un nuevo ticket
function agregarTicket() {
    
    let titulo = prompt("Ingresa el título del ticket:");
    let descripcion = prompt("Ingresa la descripción del ticket:");
    
    // Valida que ambos campos estén llenos
    if (titulo === "" || descripcion === "") {
        alert("Por favor, completa ambos campos.");
        return; // Salir de la función si falta información
    }
    
    // Crear un objeto ticket
    let nuevoTicket = {
        titulo: titulo,
        descripcion: descripcion,
        estado: "Abierto"
    };

    // Agrega el ticket al array
    tickets.push(nuevoTicket);
    
    alert("Ticket agregado correctamente.");
    console.log("Tickets actuales:", tickets);
}

// Función para mostrar todos los tickets
function verTickets() {
    if (tickets.length === 0) {
        alert("No hay tickets reportados.");
        return;
    }

    // Array de tickets y muestra con ciclo for
    for (let i = 0; i < tickets.length; i++) {
        let ticket = tickets[i];
        alert(`Ticket ${i + 1}:\nTítulo: ${ticket.titulo}\nDescripción: ${ticket.descripcion}\nEstado: ${ticket.estado}`);
    }
}

// Función para marcar un ticket como resuelto
function resolverTicket() {
    let idTicket = prompt("Ingresa el número del ticket que deseas marcar como resuelto:");

    // Validar si el ticket existe
    if (idTicket >= 1 && idTicket <= tickets.length) {
        tickets[idTicket - 1].estado = "Resuelto"; 
        alert("El ticket ha sido marcado como resuelto.");
        console.log("Tickets actualizados:", tickets); 
    } else {
        alert("Ticket no encontrado.");
    }
}

// Menú interactivo para probar las funciones
function menu() {
    let opcion = prompt("¿Qué te gustaría hacer?\n1. Agregar ticket\n2. Ver tickets\n3. Marcar ticket como resuelto\n4. Salir");

    if (opcion === "1") {
        agregarTicket();
    } else if (opcion === "2") {
        verTickets();
    } else if (opcion === "3") {
        resolverTicket();
    } else if (opcion === "4") {
        alert("¡Hasta luego!");
        return; // Salir del programa
    } else {
        alert("Opción no válida.");
    }

    // Volver a mostrar el menú
    menu();
}

// Ejecutar el menú cuando se cargue el script
menu();