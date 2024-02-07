

//Page Clock

setInterval(() => {
  document.getElementById("ldnTime").innerHTML = new Date().toLocaleString("en-Us", {timeZone:'Europe/London', timeStyle:'medium',hourCycle:'h24'});
}, 1000);

//Navigation Toggle.

const navigation = document.querySelector('.navigation');
const navToggle = document.querySelector('.navToggle')

navToggle.addEventListener("click", () =>
{
const visibility = navigation.getAttribute('data-visible');

if(visibility === "false"){
  navigation.setAttribute('data-visible', true);
} else if (visibility==="true") {
  navigation.setAttribute('data-visible', false);
}

});