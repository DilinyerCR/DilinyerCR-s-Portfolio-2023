// !-------------Reloj-------------
function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let meridiem = "AM";
  
  if (hours > 12) {
    hours = hours - 12;
    meridiem = "PM";
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  
  let clockTime = `${hours}:${minutes}:${seconds} ${meridiem}`
  
  document.getElementById("clock").innerHTML = clockTime;
}

setInterval(updateClock, 1000);



// !-------------Formulario-------------
let enviar = document.getElementById("enviar");
let enviado = document.getElementById("mensaje-exitoso");
let error = document.getElementById("mensaje-error");

let nombre = document.getElementById("nombre");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let textMensaje = document.getElementById("textMensaje");

enviar.addEventListener("click" , function validar() {
  let regExpNombre = /^\s*\S+\s*$/;
  let regExpPhone = /^\d{10,}$/;
  let regExpEmail = /^\S+@\S+\.\S+$/;
  let regExpMensaje = /^\s*\S.*$/;

  if(
  regExpNombre.test(nombre.value) == true
  &&
  regExpPhone.test(phone.value) == true
  &&
  regExpEmail.test(email.value) == true
  &&
  regExpMensaje.test(textMensaje.value) == true
  ) {
    nombre.value = ''
    phone.value = ''
    email.value = ''
    textMensaje.value = ''
    enviado.style.display = "block";
    setTimeout(function() {
      enviado.style.display = "none";
    }, 4000);
  } else {
    error.style.display = "block"
    setTimeout(function() {
      error.style.display = "none";
    }, 2000);
  };
});
























// let error = document.getElementById("mensaje-error");
// let enviado = document.getElementById("mensaje-exitoso");
// let enviar = document.getElementById("enviar");

// let nombre = document.getElementById("nombre");

// enviar.addEventListener("click", function() {
//   if(nombre.value != /^[a-zA-Z\s]+$/) {
//     error.style.display = "block";
//   } else {
//     enviado.style.display = "block";
//   }

//   setTimeout(function(){
//     error.style.display = "none";
//     enviado.style.display = "none";
//   }, 2000)
// });

// enviar.addEventListener("click", () => {
//   error.style.display = "block";

//   setTimeout(function() {
//     error.style.display = "none";
//   }, 5000)
// });





