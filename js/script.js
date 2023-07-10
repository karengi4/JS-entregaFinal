/*
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
*/
/*
// Servicios disponibles y precios
const servicios = {
  1: { nombre: "Búsqueda y selección", precio: 10000 },
  2: { nombre: "Gestión integral del talento", precio: 15000 },
  3: { nombre: "Evaluación y desarrollo profesional", precio: 12000 },
  4: { nombre: "Capacitación y formación", precio: 8000 },
  5: { nombre: "Compensación y beneficios", precio: 8500 },
  6: { nombre: "Asesoría personalizada", precio: 18000 },
};

// Carrito de compras vacío
const carrito = {};

// Agregar un servicio al carrito
function agregarAlCarrito() {
  let opciones = "";

  for (const key in servicios) {
    opciones += `${key}. ${servicios[key].nombre}\n`;
  }

  const opcion = parseInt(prompt(`Ingrese el numero de servicio que desea agregar:\n\n${opciones}`));

  if (servicios.hasOwnProperty(opcion)) {
    const servicio = servicios[opcion].nombre;

    if (carrito.hasOwnProperty(servicio)) {
      carrito[servicio]++;
    } else {
      carrito[servicio] = 1;
    }

    console.log("Servicio ${servicio} agregado al carrito.");

  } else {
    console.log("Opción inválida. Por favor, seleccione una opción válida.");
  }
}

// Función para calcular el precio total de los servicios en el carrito
function calcularPrecioTotal() {
  let precioTotal = 0;

  for (const servicio in carrito) {
    if (servicios.hasOwnProperty(servicio)) {
      const cantidad = carrito[servicio];
      precioTotal += servicios[servicio].precio * cantidad;
    }
  }

  return precioTotal;
}

// Ejemplo de uso del simulador interactivo
while (true) {
  const opcion = prompt(`Seleccione una opción:
  1. Agregar servicio al carrito
  2. Calcular precio total
  3. Salir`);

  if (opcion === "1") {
    agregarAlCarrito();
  } else if (opcion === "2") {
    const precioTotal = calcularPrecioTotal();
    console.log(`Precio total: $${precioTotal}`);
  } else if (opcion === "3") {
    console.log("Gracias por utilizar el simulador.");
    break;
  } else {
    console.log("Opción inválida. Por favor, seleccione una opción válida.");
  }
}
*/



/*
// Servicios disponibles y precios
const servicios = {
  1: { nombre: "Búsqueda y selección", precio: 10000 },
  2: { nombre: "Gestión integral del talento", precio: 15000 },
  3: { nombre: "Evaluación y desarrollo profesional", precio: 12000 },
  4: { nombre: "Capacitación y formación", precio: 8000 },
  5: { nombre: "Compensación y beneficios", precio: 8500 },
  6: { nombre: "Asesoría personalizada", precio: 18000 },
};

// Carrito de compras vacío
const carrito = {};

// Agregar un servicio al carrito
function agregarAlCarrito() {
  let opciones = "Ingrese el numero de servicio que desea agregar:\n\n";

  for (const key in servicios) {
    opciones += `${key}. ${servicios[key].nombre}\n`;
  }

  const opcion = parseInt(prompt(opciones));

  if (servicios.hasOwnProperty(opcion)) {
    const servicio = servicios[opcion].nombre;
    alert(`Servicio "${servicio}" agregado al carrito.`);
  
    if (carrito.hasOwnProperty(servicio)) {
      carrito[servicio]++;
    } else {
      carrito[servicio] = 1;
    }

  } else {
    alert("Opción inválida. Por favor, seleccione una opción válida.");
  }
}
// Función para calcular el precio total de los servicios en el carrito
function calcularPrecioTotal() {
  let precioTotal = 0;

  for (const servicio in carrito) {
    if (servicios.hasOwnProperty(servicio)) {
      precioTotal += servicios[servicio].precio * carrito[servicio];
    }
  }

  return precioTotal;
}

// Simulador interactivo
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
*/

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
