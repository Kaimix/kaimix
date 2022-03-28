const form = document.getElementById("form");

async function handleSubmit(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      mensajeSuccess();
      form.reset();
    }
  }).catch(error => {
    mensajeError();
  });
}
form.addEventListener("submit", handleSubmit);

// Funciones alertas

function mensajeError() {
  Swal.fire({
    icon: "error",
    title: "Falló el envio",
    text: "Falló el envio, intente nuevamente"
  });
}

function mensajeSuccess() {
  Swal.fire({
    icon: "success",
    title: "Correo Enviado",
    text: "El mensaje se envió correctamente"
  });
}