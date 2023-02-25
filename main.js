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
document.getElementById("enviar").addEventListener("click", () => {
   document.getElementById("mensaje-exitoso").style.display = "block"
 });
