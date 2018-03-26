
let car1 = document.getElementById("first");
let car2 = document.getElementById("second");



let carOne = 0;
let carTwo = 0;

let move = (e) => {
  if(e.keyCode == 39) {
    carOne +=10;
    car1.style.left = carOne + 'px';
    if(carOne >= 1300) {
      alert("Car Two Wins!!!");
    }}

  if(e.keyCode == 68) {
    carTwo +=10;
    car2.style.left = carTwo + 'px';
    if(carTwo >= 1300) {
      alert("Car One Wins!!!");
}}}

document.onkeydown = move;

