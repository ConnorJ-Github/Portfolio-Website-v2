

setInterval(() => {
  document.getElementById("bstTime").innerHTML = new Date().toLocaleString("en-Us", {timeZone:'Europe/London', timeStyle:'medium',hourCycle:'h24'});
}, 1000);