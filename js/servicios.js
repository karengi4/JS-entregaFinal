document.addEventListener("DOMContentLoaded", async () => {
  const serviciosJSON = await fetch('../data/servicios.json');
  const servicios = await serviciosJSON.json();
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

  function mostrarToast(mensaje, colorFondo) {
    Toastify({
      text: mensaje,
      duration: 3000,
      close: true,
      gravity: "center",
      position: "right",
      backgroundColor: colorFondo,
      stopOnFocus: true,
      className: "toastify-custom",
    }).showToast();
  }
  function agregarAlCarrito(index, precio) {
    const servicio = servicios[index];
    const servicioEnCarrito = carrito.find(item => item.servicio.nombre === servicio.nombre);

    if (servicioEnCarrito) {
      servicioEnCarrito.cantidad++;
    } else {
      carrito.push({ servicio, cantidad: 1 });
    }
    mostrarToast(`${servicio.nombre} se ha agregado al carrito.`,"#00B09B");
    actualizarCarrito();

  }

  function mostrarNotificacion(mensaje) {
    mostrarToast(mensaje, "#00B09B");
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
    Toastify({
      text: "El carrito ha sido vaciado.",
      style: {
        background: "rgba(0, 128, 0, 0.8)",
        color: "#ffffff",
      },
    }).showToast();
  });


  const confirmarBtn = document.getElementById("confirmar-btn");
  confirmarBtn.addEventListener("click", () => {
    Swal.fire({
      title: "¿Deseas confirmar tu compra?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#00CC99",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        carrito.length = 0;
        actualizarCarrito();
        Toastify({
          text: "¡Gracias por tu compra!",
          style: {
            background: "rgba(0, 128, 0, 0.8)",
            color: "#ffffff",
          },
        }).showToast();
      }
    });
  });
})