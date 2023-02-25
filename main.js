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
let mensaje = document.getElementById("mensaje-exitoso");
let enviar = document.getElementById("enviar");

enviar.addEventListener("click", () => {
  mensaje.style.display = "block";

  setTimeout(function() {
    mensaje.style.display = "none";
  }, 8000)
});


