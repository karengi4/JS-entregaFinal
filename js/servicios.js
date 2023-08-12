document.addEventListener("DOMContentLoaded", () => {
  const serviciosJSON = `
    [
      { "nombre": "Búsqueda y selección", "descripcion": "Llevamos a cabo la totalidad del proceso de búsqueda y selección de recursos humanos...", "precio": 10000, "imagen": "busqueda.webp" },
      { "nombre": "Gestión integral del talento", "descripcion": "Ponemos en marcha distintos procesos como el análisis de la estructura organizacional...", "precio": 15000, "imagen": "gestion.webp" },
      { "nombre": "Evaluación y desarrollo profesional", "descripcion": "Este proceso se aplica especialmente para valorar los recursos y las competencias...", "precio": 12000, "imagen": "desarrollo.webp" },
      { "nombre": "Capacitación y formación", "descripcion": "Brindamos capacitaciones de RRHH a empresas en función de sus necesidades...", "precio": 8000, "imagen": "formacion.webp" },
      { "nombre": "Compensación y beneficios", "descripcion": "Para tener una relación exitosa con tus empleados es fundamental que el trabajo sea correctamente remunerado...", "precio": 8500, "imagen": "compensacion.webp" },
      { "nombre": "Asesoría personalizada", "descripcion": "A través de este asesoramiento integral externo, nuestros clientes delegan su Gestión Interna...", "precio": 18000, "imagen": "asesoria.webp" }
    ]
  `;

  const servicios = JSON.parse(serviciosJSON);
  let carrito = [];

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

  function agregarAlCarrito(index, precio) {
    const servicio = servicios[index];
    const servicioEnCarrito = carrito.find(item => item.servicio.nombre === servicio.nombre);

    if (servicioEnCarrito) {
      servicioEnCarrito.cantidad++;
    } else {
      carrito.push({ servicio, cantidad: 1 });
    }

    mostrarNotificacion(`${servicio.nombre} se ha agregado al carrito.`);
    actualizarCarrito();
  }

  function mostrarNotificacion(mensaje) {
    const notificacionDiv = document.createElement("div");
    notificacionDiv.classList.add("alert", "alert-success", "notificacion");
    notificacionDiv.textContent = mensaje;
    const notificacionContainer = document.getElementById("notificacion-container");
    notificacionContainer.appendChild(notificacionDiv);

    setTimeout(() => {
      notificacionDiv.remove();
    }, 3000);
  }

  function actualizarCarrito() {
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
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  mostrarServicios();
  
  const agregarBtns = document.querySelectorAll(".agregar-btn");
  agregarBtns.forEach(btn => {
    btn.addEventListener("click", event => {
      const index = event.target.dataset.index;
      const precio = parseFloat(event.target.dataset.precio);
      agregarAlCarrito(index, precio);
    });
  });

  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    actualizarCarrito();
  }

  const vaciarBtn = document.getElementById("vaciar-btn");
  vaciarBtn.addEventListener("click", () => {
    carrito.length = 0;
    actualizarCarrito();
  });

  const confirmarBtn = document.getElementById("confirmar-btn");
  confirmarBtn.addEventListener("click", () => {
    const confirmacion = confirm("¿Deseas confirmar tu compra?");
    if (confirmacion) {
      carrito.length = 0;
      actualizarCarrito();
      mostrarNotificacion("¡Gracias por tu compra!");
    }
  });
});