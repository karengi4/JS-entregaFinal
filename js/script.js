// Definir los servicios disponibles y sus precios
const servicios = {
  "Búsqueda y selección": 10000,
  "Gestión integral del talento": 15000,
  "Evaluación y desarrollo profesional": 12000,
  "Capacitación y formación": 8000,
  "Compensación y beneficios": 8500,
  "Asesoria personalizada": 18000,
};

// Carrito de compras vacío
const carrito = {};

// Agregar un servicio al carrito
function agregarAlCarrito() {
  let opciones = "";
  let index = 1;

  for (const servicio in servicios) {
    opciones += `${index}. ${servicio}\n`;
    index++;
  }

  const opcion = parseInt(prompt(`Seleccione el número del servicio que desea agregar a su carrito:\n\n${opciones}`));

  let servicioElegido;
  let i = 1;

  for (const servicio in servicios) {
    if (i === opcion) {
      servicioElegido = servicio;
      break;
    }
    i++;
  }

  if (servicioElegido) {
    if (carrito.hasOwnProperty(servicioElegido)) {
      carrito[servicioElegido]++;
    } else {
      carrito[servicioElegido] = 1;
    }

    alert(`Servicio "${servicioElegido}" agregado al carrito.`);
  } else {
    alert("Opción inválida. Por favor, seleccione una opción válida.");
  }
}

// Calculo del precio total de todos los servicios agregados al carrito
function calcularPrecioTotal() {
  let precioTotal = 0;

  for (const servicio in carrito) {
    if (servicios.hasOwnProperty(servicio)) {
      const cantidad = carrito[servicio];
      precioTotal += servicios[servicio] * cantidad;
    }
  }

  return precioTotal;
}

while (true) {
  const opcion = prompt(`Seleccione una opción:
  1. Agregar servicio al carrito
  2. Calcular precio total
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
