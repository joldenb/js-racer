addEventListener('keydown', function(event) {
    let key = e.which;
});

let $carOneMove = $('#carOne');
$(document).keydown(function(e) {
     switch (e.which) {
        case 37:
              $carOneMove.css('left', $carOneMove.offset().left - 10);
              break;
        case 38:
              $carOneMove.css('top', $carOneMove.offset().top - 10);
              break;
        case 39:
              $carOneMove.css('left', $carOneMove.offset().left + 10);
              break;
        case 40:
              $carOneMove.css('top', $carOneMove.offset().top + 10);
              break;
       }
  })
let $carTwoMove = $('#carTwo');
$(document).keydown(function(e) {
     switch (e.which) {
        case 83:
              $carTwoMove.css('left', $carTwoMove.offset().left - 10);
              break;
        case 69:
              $carTwoMove.css('top', $carTwoMove.offset().top - 10);
              break;
        case 70:
              $carTwoMove.css('left', $carTwoMove.offset().left + 10);
              break;
        case 68:
              $carTwoMove.css('top', $carTwoMove.offset().top + 10);
              break;
       }
  })
//addEventListener('keydown', function(event) {
//    let key = e.which;
let carPosition = 0;


if ("carTwo" == 900)
  {
    alert("Car One is the winner!");
    carPosition();
  }
  else if ("carOne" == 900)
  {
    alert("Car Two is the winner!");
    carPosition();
  }
  function carPosition(){
  clearInterval();
  }
}



//  if($carOneMove.offset()(.left, > 550) {
//    return alert("greencarwins");
//  )}

/*

switch (e.key) {
    case "ArrowLeft":
        break;
    case "ArrowRight":
        break;
    case "ArrowUp":
        break;
    case "ArrowDown":
        break;
}*/


// /// character movement update
// var moveCharacter = function(dx, dy){
//   character.x += dx||0;
//   character.y += dy||0;
//   character.element.style.left = character.x + 'px';
//   character.element.style.top = character.y + 'px';
// };

// /// character control
// var detectCharacterMovement = function(){
//   if (keydown('ArrowLeft') ) {
//     moveCharacter(-1);
//   }
//   if ( keys[keys.RIGHT] ) {
//     moveCharacter(1);
//   }
// };

// /// game loop
// setInterval(function(){
//   detectCharacterMovement();
// }, 1000/24);

/*
var pane = $('#pane'),
    box = $('#box'),
    w = pane.width() - box.width(),
    d = {},
    x = 3;

function newv(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > w ? w : n;
}

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

setInterval(function() {
    box.css({
        left: function(i,v) { return newv(v, 37, 39); },
        top: function(i,v) { return newv(v, 38, 40); }
    });
}, 20);


const moveup = () => {
    #carOne.addClass('walk').css({
        marginTop:'+=650px' });
}



*/


// const moveCar=document.getElementsByTagName("carOne")[i].getAttribute("type");
// function setvalue(){
//     for(i=0;i<a.length;i++){
//         var b=document.getElementsByTagName("carOne")[i]
//         if (a="text"){
//             b.setAttribute("text","number");
//         }
//     }
// }


// var PlayerOneGo = 0;
// $( "#target" ).keypress(function( event ) {
//   if ( event.which == 13 ) {
//      event.preventDefault();
//   }
//   xTriggered++;
//   var msg = "Handler for .keypress() called " + xTriggered + " time(s).";
//   $.print( msg, "html" );
//   $.print( event );
// });

// $( "#other" ).click(function() {
//   $( "#target" ).keypress();
// });





// let component = (width, height, color, x, y) => {
//     this.width = width;
//     this.height = height;
//     this.angle = 0;
//     this.moveAngle = 1;
//     this.speed = 1;
//     this.x = x;
//     this.y = y;
//     this.update = function() {
//         ctx = myGameArea.context;
//         ctx.save();
//         ctx.translate(this.x, this.y);
//         ctx.rotate(this.angle);
//         ctx.fillStyle = color;
//         ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
//         ctx.restore();
//     }
//     this.newPos = function() {
//         this.angle += this.moveAngle * Math.PI / 180;
//         this.x += this.speed * Math.sin(this.angle);
//         this.y -= this.speed * Math.cos(this.angle);
//     }
// }
