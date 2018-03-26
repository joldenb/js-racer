
let car1 = document.getElementById("carOne");
let car2 = document.getElementById("carTwo");



let carOne = 0;
let carTwo = 0;

let move = (e) => {
  if(e.keyCode == 39) {
    carOne +=10;
    car1.style.left = carOne + 'px';
    if(carOne >= 1050) {
      alert("Car Two Wins!!!");
    }}

  if(e.keyCode == 68) {
    carTwo +=10;
    car2.style.left = carTwo + 'px';
    if(carTwo >= 1050) {
      alert("Car One Wins!!!");
}}}

document.onkeydown = move;



// document.addeventListener('keydown', (event )
//   if event.keycode === 39) {
//   console.log
// }

