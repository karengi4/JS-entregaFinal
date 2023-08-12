//SIMULADOR INTERACTIVO PARA UNA CONSULTORA DE RECURSOS HUMANOS

// Definir los servicios disponibles y sus precios
const serviciosJSON = `
  [
    { "nombre": "Búsqueda y selección", "descripcion": "Llevamos a cabo la totalidad del proceso de búsqueda y selección de recursos humanos, o acompañamos a nuestros clientes en alguna de las etapas del mismo, con el objetivo de encontrar la persona más calificada y apta para ocupar el puesto vacante. Para ello, contamos con recursos y tecnología que garantizan la gestión del proceso.", "precio": 10000, "imagen": "busqueda.webp" },
    { "nombre": "Gestión integral del talento", "descripcion": "Ponemos en marcha distintos procesos como el análisis de la estructura organizacional, los perfiles de puesto, las evaluaciones de desempeño, la redaccion de procedimientos del area de RRHH, los manuales de convivencia o de competencias y las encuestas de clima organizacional, ingreso/egreso de personal, liderazgo, entre otras.", "precio": 15000, "imagen": "gestion.webp" },
    { "nombre": "Evaluación y desarrollo profesional", "descripcion": "Este proceso se aplica especialmente para valorar los recursos y las competencias con las que cuenta el candidato interno para reubicarlo en nuevas posiciones jerárquicas. El resultado de esta evaluación permitirá diseñar planes de desarrollo profesional o de capacitaciones acorde a la nueva posición.",  "precio": 12000, "imagen": "desarrollo.webp" },
    { "nombre": "Capacitación y formación", "descripcion": "Brindamos capacitaciones de RRHH a empresas en función de sus necesidades, elaboradas por profesionales idóneos en cada temática en particular. Analizamos y asesoramos al cliente para elegir la temática y el curso adecuado, para que la capacitación sea una herramienta que le permita sumar valor.", "precio": 8000, "imagen": "formacion.webp"},
    { "nombre": "Compensación y beneficios", "descripcion": "Para tener una relación exitosa con tus empleados es fundamental que el trabajo sea correctamente remunerado. Nosotros te ayudamos a desarrollar políticas exitosas que se encuentren alineadas con los objetivos comerciales, la cultura y los valores de la empresa con el obejtivo de tener empleados satisfechos.", "precio": 8500, "imagen": "compensacion.webp" },
    { "nombre": "Asesoría personalizada", "descripcion": "A través de este asesoramiento integral externo, nuestros clientes delegan su Gestión Interna vinculada a la Administración de lo Recursos Humanos, obteniendo como resultado un acompañamiento estratégico, estable y a largo plazo. Brindamos la flexibilidad requerida para adecuarnos a sus necesidades y la objetividad externa necesaria.", "precio": 18000, "imagen": "asesoria.webp" }
  ]
`;

const servicios = JSON.parse(serviciosJSON);

function mostrarServicios() {
  const serviciosRow = document.getElementById("servicios-row");

  servicios.forEach((servicio, index) => {
    const servicioHTML = `
      <div class="col-12 col-md-6 col-lg-4" data-aos="zoom-in-up">
        <div class="servicios">
          <img src="../assets/images/${servicio.imagen}" alt="${servicio.nombre}">
          <div class="overlay">
            <h3 class="servicio-titulo">${servicio.nombre}</h3>
          </div>
        </div>
        <div>
          <p>${servicio.descripcion}</p>
          <p>Precio: $${servicio.precio}</p>
          <button class="agregar-btn btn btn-primary" data-index="${index}" data-precio="${servicio.precio}">Agregar al carrito</button>
        </div>
      </div>
    `;

    serviciosRow.innerHTML += servicioHTML;
  });
}

// Carrito de compras inicializado como un array vacío
const carrito = [];

// Función para agregar un servicio al carrito
function agregarAlCarrito(index, precio) {
  const servicio = servicios[index];
  const servicioEnCarrito = carrito.find(item => item.servicio.nombre === servicio.nombre);

  if (servicioEnCarrito) {
    servicioEnCarrito.cantidad++;
  } else {
    carrito.push({ servicio, cantidad: 1 });
  }

  mostrarCarrito();
}

function vaciarCarrito() {
  carrito.length = 0;
  mostrarCarrito();
}

function confirmarCompra() {
  const confirmacion = confirm("¿Deseas confirmar tu compra?");
  if (confirmacion) {
    vaciarCarrito();
    mostrarCarrito();
    mostrarMensaje("¡Gracias por tu compra!", "success");
  }
}

function mostrarCarrito() {
  const carritoList = document.getElementById("carrito-list");
  const precioTotalOutput = document.getElementById("precio-total-output");
  carritoList.innerHTML = "";
  let precioTotal = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${item.servicio.nombre} - Cantidad: ${item.cantidad} - Subtotal: $${item.servicio.precio * item.cantidad}`;
    carritoList.appendChild(li);
    precioTotal += item.servicio.precio * item.cantidad;
  });

  precioTotalOutput.textContent = `Precio total: $${precioTotal}`;
}

// Event listeners para los botones "Agregar al carrito"
document.addEventListener("DOMContentLoaded", () => {
  mostrarServicios();

  const agregarBtns = document.querySelectorAll(".agregar-btn");
  agregarBtns.forEach(btn => {
    btn.addEventListener("click", event => {
      const index = event.target.dataset.index;
      const precio = parseFloat(event.target.dataset.precio);
      agregarAlCarrito(index, precio);
      mostrarNotificacion("Servicio agregado al carrito", "success");
    });
  });

  const vaciarBtn = document.getElementById("vaciar-btn");
  vaciarBtn.addEventListener("click", vaciarCarrito);

  const confirmarBtn = document.getElementById("confirmar-btn");
  confirmarBtn.addEventListener("click", confirmarCompra);
});
