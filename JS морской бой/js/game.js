'use strict';

let cvs = document.getElementById('canvas');
let ctx = cvs.getContext('2d');


let submarine1 = new Image();
let submarine2 = new Image();
let submarine3 = new Image();
let bgSky = new Image();
let fgSeeBottom = new Image();
let ship = new Image();

ship.src= "img/ship1.png";
submarine1.src= "img/submarine1.png";
submarine2.src= "img/submarine2.png";
submarine3.src= "img/submarine3.png";
bgSky.src="img/bluesky.png";
fgSeeBottom.src="img/see.png";

let xPos = 10;
let yPos = 275;

//const ship1 = document.querySelector(".ship");

ship.addEventListener('keypress', function (event){
    if(event.keyCode==37){
        yPos-=10;
        ship.style.yPos = yPos + 'px';

    }

        else if(event.keyCode==39){
            yPos+=10;
            ship.style.yPos= yPos + 'px';

        }
});
        
function draw (){
    ctx.drawImage(bgSky,0,0);
    ctx.drawImage(fgSeeBottom, 0, cvs.height - fgSeeBottom.height);
    ctx.drawImage(ship, xPos, yPos);
    ctx.drawImage(submarine1, 10, 400);
    ctx.drawImage(submarine2, 10, 600);
    ctx.drawImage(submarine3, 10, 500);

}

fgSeeBottom.onload = draw;
bgSky.onload = draw;