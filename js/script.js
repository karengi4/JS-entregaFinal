//SIMULADOR INTERACTIVO PARA UNA CONSULTORA DE RECURSOS HUMANOS

// Definir los servicios disponibles y sus precios
const servicios = [
  { nombre: "Búsqueda y selección", precio: 10000 },
  { nombre: "Gestión integral del talento", precio: 15000 },
  { nombre: "Evaluación y desarrollo profesional", precio: 12000 },
  { nombre: "Capacitación y formación", precio: 8000 },
  { nombre: "Compensación y beneficios", precio: 8500 },
  { nombre: "Asesoría personalizada", precio: 18000 },
];

// Carrito de compras inicializado como un array vacío
const carrito = [];

// Función para mostrar las opciones disponibles
function mostrarOpciones() {
  return prompt(`Seleccione una opción:
  1. Agregar servicio al carrito
  2. Calcular precio total
  3. Salir`);
}

// Función para agregar un servicio al carrito
function agregarAlCarrito() {
  let opciones = "";

  // Opciones de servicios disponibles
  servicios.forEach((servicio, index) => {
    opciones += `${index + 1}. ${servicio.nombre} - Precio: $${servicio.precio}\n`;
  });

  let opcion = NaN; // Inicializar la opción como un valor no numérico

  while (isNaN(opcion) || opcion < 1 || opcion > servicios.length) {
    opcion = parseInt(prompt(`Seleccione el número de servicio que desea agregar al carrito:\n\n${opciones}`));
    if (isNaN(opcion) || opcion < 1 || opcion > servicios.length) {
      alert("Opción inválida. Por favor, seleccione una opción válida.");
    }
  }

  const servicioSeleccionado = servicios[opcion - 1];

  // Buscar el servicio en el carrito
  const servicioEnCarrito = carrito.find(item => item.servicio.nombre === servicioSeleccionado.nombre);

  // Agregar el servicio en el carrito
  if (servicioEnCarrito) {
    servicioEnCarrito.cantidad++;
    if (servicioEnCarrito.cantidad < 0) {
      servicioEnCarrito.cantidad = 0; // Asegurar que la cantidad no sea negativa
    }
  }else {
    carrito.push({ servicio: servicioSeleccionado, cantidad: 1 });
  }

  console.log("Servicio agregado al carrito:", servicioSeleccionado.nombre);
  alert(`Servicio "${servicioSeleccionado.nombre}" agregado al carrito.`);
}

// Función para calcular el precio total de los servicios en el carrito
function calcularPrecioTotal() {
  const precioTotal = carrito.reduce((total, item) => {
    return total + item.servicio.precio * item.cantidad;
  }, 0);

  console.log("Precio total calculado:", precioTotal);
  return precioTotal;
}

// Función con bucle para ejecutar el simulador
function ejecutarSimulador() {
  let opcion;

  while (opcion !== "3") {
    opcion = mostrarOpciones();
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
ejecutarSimulador();