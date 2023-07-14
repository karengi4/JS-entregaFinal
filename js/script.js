//SIMULADOR INTERACTIVO PARA UNA CONSULTORA DE RECURSOS HUMANOS

// Definir los servicios disponibles y sus precios
let servicios = {
  "Búsqueda y selección": 10000,
  "Gestión integral del talento": 15000,
  "Evaluación y desarrollo profesional": 12000,
  "Capacitación y formación": 8000,
  "Compensación y beneficios": 8500,
  "Asesoría personalizada": 18000,
};

// Carrito de compras vacío
let carrito = {};

// Función para agregar un servicio al carrito
function agregarAlCarrito() {
  let opciones = "";
  let index = 1;

  // Opciones de servicios disponibles
  for (let servicio in servicios) {
    opciones += `${index}. ${servicio}\n`;
    index++;
  }

  const opcion = parseInt(prompt(`Seleccione el número de servicio que desea agregar al carrito:\n\n${opciones}`));

  // Condicional para verificar si la opción seleccionada existe
  if (opcion >= 1 && opcion <= Object.keys(servicios).length) {
    let servicio = Object.keys(servicios)[opcion - 1];

    // Agregar el servicio al carrito
    if (carrito.hasOwnProperty(servicio)) {
      carrito[servicio]++;
    } else {
      carrito[servicio] = 1;
    }

    console.log("Servicio agregado al carrito:", servicio);
    alert(`Servicio "${servicio}" agregado al carrito.`);
  } else {
    console.log("Opción inválida:", opcion);
    alert("Opción inválida. Por favor, seleccione una opción válida.");
  }
}

// Función para calcular el precio total de los servicios en el carrito
function calcularPrecioTotal() {
  let precioTotal = 0;

  // Bucle para calcular el precio total sumando los precios de los servicios que cargo al carrito
  for (let servicio in carrito) {
    if (carrito.hasOwnProperty(servicio) && servicios.hasOwnProperty(servicio)) {
      let cantidad = carrito[servicio];
      let precio = servicios[servicio];
      precioTotal += precio * cantidad;
    }
  }

  console.log("Precio total calculado:", precioTotal);
  return precioTotal;
}

// Función con bucle para ejecutar el simulador
function simulador() {
  let opcion;

  while (opcion !== "3") {
    opcion = prompt(`Seleccione una opción:
  1. Agregar servicio al carrito
  2. Calcular precio total
  3. Salir`);

    if (opcion === "1") {
      agregarAlCarrito();
    } else if (opcion === "2") {
      let precioTotal = calcularPrecioTotal();
      console.log("Precio total:", precioTotal);
      alert(`Precio total: $${precioTotal}`);
    } else if (opcion === "3") {
      console.log("Saliendo del simulador");
      alert("Gracias por utilizar este simulador.");
    } else {
      console.log("Opción inválida:", opcion);
      alert("Opción inválida. Por favor, seleccione una opción válida.");
    }
  }
}

// Iniciar el simulador
simulador();















