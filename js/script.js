
// Servicios disponibles y precios
const servicios = {
  "Búsqueda y selección": 10000,
  "Gestión integral del talento": 15000,
  "Evaluación y desarrollo profesional": 12000,
  "Capacitación y formación": 8000,
  "Compensación y beneficios": 8500,
  "Asesoria personalizada": 18000,
};

// Carrito de compras vacío
const carrito = [];

// Para agregar un servicio al carrito
function agregarAlCarrito() {
  const opciones = Object.keys(servicios);
  let listaServicios = "Ingrese el numero de servicio que desea agregar:\n\n";

  for (let i = 0; i < opciones.length; i++) {
    listaServicios += `${i + 1}. ${opciones[i]}\n`;
  }

  const opcion = parseInt(prompt(listaServicios));

  if (opcion >= 1 && opcion <= opciones.length) {
    const servicio = opciones[opcion - 1];
    carrito.push(servicio);
    alert(`Servicio "${servicio}" agregado al carrito.`);
  } else {
    alert(`Opción inválida. Por favor, seleccione una opción válida.`);
  }
}

// Calculo del precio total de los servicios en el carrito
function calcularPrecioTotal() {
  let precioTotal = 0;

  for (let i = 0; i < carrito.length; i++) {
    const servicio = carrito[i];

    if (servicios.hasOwnProperty(servicio)) {
      precioTotal += servicios[servicio];
    }
  }

  return precioTotal;
}

// Uso del simulador interactivo
while (true) {
  const opcion = prompt(`Seleccione una opción:
  1. Agregar el servicio al carrito
  2. Calcular el precio total
  3. Salir`);

  if (opcion === "1") {
    agregarAlCarrito();
  } else if (opcion === "2") {
    const precioTotal = calcularPrecioTotal();
    alert(`Precio total: $${precioTotal}`);
  } else if (opcion === "3") {
    alert("Gracias por utilizar este simulador.");
    break;
  } else {
    alert("Opción inválida. Por favor, seleccione una opción válida.");
  }
}