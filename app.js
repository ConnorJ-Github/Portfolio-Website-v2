

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



//Move sword


let moveable = document.getElementById("move");
let initialX =0;
let initialY =0;

let moveElement = false;


let events = {
  mouse : {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceType = "";

const isTouchDevice = () => {
  try{
    document.createEvent("TouchEvent");
    deviceType="touch";
    return true;
  }
  catch(e)
  {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();


moveable.addEventListener(events[deviceType].down, (e) =>
{
  e.preventDefault();

  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

  moveElement = true;

});

moveable.addEventListener(events[deviceType].move,(e) => {

  if(moveElement) {
    e.preventDefault();
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    moveable.style.top = moveable.offsetTop - (initialY - newY) + "px";
    moveable.style.left = moveable.offsetLeft - (initialX - newX) + "px";

    initialX = newX;
    initialY = newY;
  }
});


moveable.addEventListener(
  events[deviceType].up,
  (stopMovement = (e) => {
    moveElement = false;
  })
)

moveable.addEventListener("mouseleave", stopMovement);
moveable.addEventListener(events[deviceType].up, (e)=>{
moveElement = false;
})