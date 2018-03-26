/// store key codes and currently pressed ones
//var keys = {};
//    keys.LEFT = 37;
//    keys.RIGHT = 39;

/// store reference to character's position and element
var character = {
  x: 100,
  y: 100,
  element: document.getElementById("character")
};



// /// key detection (better to use addEventListener, but this will do)
// document.body.onkeyup =
// document.onkeydown = function (e) {
//     switch (e.key) {
//         case 'ArrowUp':
//             // up arrow
//             break;
//         case 'ArrowDown':
//             // down arrow
//             break;
//         case 'ArrowLeft':
//             // left arrow
//             break;
//         case 'ArrowRight':
//             // right arrow
//     }
// };

var $div = $('#carOne');
$(document).keydown(function(e) {
     switch (e.which) {
        case 37:
              $div.css('left', $div.offset().left - 10);
              break;
        case 38:
              $div.css('top', $div.offset().top - 10);
              break;
        case 39:
              $div.css('left', $div.offset().left + 10);
              break;
        case 40:
              $div.css('top', $div.offset().top + 10);
              break;
       }
  })

addEventListener('keydown', function(event) {

    var key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
});

switch (e.key) {
    case "ArrowLeft":
        // Left pressed
        break;
    case "ArrowRight":
        // Right pressed
        break;
    case "ArrowUp":
        // Up pressed
        break;
    case "ArrowDown":
        // Down pressed
        break;
}

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
