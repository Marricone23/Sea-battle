function gameOver(){
document.querySelector('.game-over').classList.add('on');

}

function victory(){
    document.querySelector('.victory').classList.add('on');
}

function lifes(){
document.querySelector(".ship-life1").classList.remove('on');
document.querySelector(".ship-life2").classList.remove('on');
document.querySelector(".ship-life3").classList.remove('on');
document.querySelector(".ship-life4").classList.remove('on');
}

function calc(){
    let num = document.querySelector('.inner-points');
     num.innerHTML = points+pointss+pointsss;
     num++;
  }

function restart (){
    ship1.hp -= 1;
    sub1.hp -=1;

    clearInterval(ints.ship1);
    clearInterval(ints.run);
    clearInterval(ints.mine);
    clearInterval(ints.subTorpedos);
    clearInterval(ints.subShots);
    clearInterval(ints.sub1);
    clearInterval(ints.sub2);
    clearInterval(ints.sub3);
    clearInterval(ints.checkEnemyTorpedoForShip);
               
    let subs = document.querySelectorAll(".submarine1"); 
    subs.forEach((sub1)=>{
        sub1.parentNode.removeChild(sub1);
    });
    let subss = document.querySelectorAll(".submarine2"); 
    subss.forEach((sub2)=>{
        sub2.parentNode.removeChild(sub2);
    });
    let subsss = document.querySelectorAll(".submarine3");
    subsss.forEach((sub3)=>{
        sub3.parentNode.removeChild(sub3);
    });
    let torpedos = document.querySelectorAll(".torpedo");
    torpedos.forEach((torpedo)=>{
        torpedo.parentNode.removeChild(torpedo);
    });

    let mines = document.querySelectorAll(".mine");
    mines.forEach((mine)=>{
        mine.parentNode.removeChild(mine);
    });

    
    if(ship1.hp === 0){
    document.querySelector(".ship-life4").classList.add('on');
    let audioOver = new Audio("audio/gameover.mp3");
    audioOver.play();
    return gameOver();
    }
   
   game();
   
}

function init() {
   if(ship1.hp === 0){
   ship1.hp = 4;
   lifes(); 
   points=0;
   pointss=0;
   pointsss=0;
}
     
    document.querySelector('.game-over').classList.remove('on');

    bgsky.innerHTML += `<div class="ship" style="left: ${ship1.x}px; top: ${ship1.y}px;"></div>`;
    ship1.el = document.querySelector('.ship');

         
    switch(ship1.hp){
      case 3:
        document.querySelector(".ship-life1").classList.add('on');
        console.log('1');
          break;
      case 2:
        document.querySelector(".ship-life2").classList.add('on');
        console.log('2');   
        break;
      case 1:
        document.querySelector(".ship-life3").classList.add('on');
        console.log('3');    
        break; 
      case 0:
        document.querySelector(".ship-life4").classList.add('on');
        console.log('4');   
        break;
        
        }
}

function intervals (){
ints.run= setInterval(()=>{
          if(ship1.run){
              switch(ship1.side){
                 case 1:
                  if(ship1.x >0){
                    ship1.x-=10;
                    ship1.el.style.left =`${ship1.x}px`;   
                  }
                  break;
                  case 2:
                  if(ship1.x<1125) {   
                   ship1.x+=10;
                    ship1.el.style.left =`${ship1.x}px`; 
                 }   
                  break;        
             }
          }

    },fps );

ints.ship1 = setInterval(()=> {
    ship1.el = document.querySelector('.ship');
},fps);    

ints.mine = setInterval(()=>{
    let mines = document.querySelectorAll(".mine");
    mines.forEach((mine)=>{
        let direction = mine.getAttribute("direction");

         switch (direction){
         case 'bottom': 
         if(mine.getBoundingClientRect().top>620){
             mine.parentNode.removeChild(mine);
         } else {mine.style.top = mine.getBoundingClientRect().top + 5 +"px";
        }   
          break;}
         });
    },fps);

   
ints.subTorpedos = setInterval(()=>{   
       let torpedos = document.querySelectorAll(".torpedo");
            torpedos.forEach((torpedo)=>{
              let direction = torpedo.getAttribute("direction");
             switch (direction){
             case "top":
                if(torpedo.getBoundingClientRect().top<=256){               
                torpedo.parentNode.removeChild(torpedo);
                          
                } else {
              torpedo.style.top = torpedo.getBoundingClientRect().top - 5 +"px";
              }                
               break;}  
            });
           },torpspeed);   

ints.subShots = setInterval(() => {
            let subs = document.querySelectorAll(".submarine1"); 
            subs.forEach((sub1) => {
                    let direction = sub1.getAttribute('direction');
                    switch (direction) {
                   case 'top':
    
                        if (
                            256 <= 295 &&
                            ship1.el.getBoundingClientRect().right > sub1.getBoundingClientRect().left &&
                            ship1.el.getBoundingClientRect().left < sub1.getBoundingClientRect().right
                        ) {
                            console.log('в зоне');
                             bgsky.innerHTML += `<div class="torpedo" direction="top" style="left: ${sub1.getBoundingClientRect().left + sub1.getBoundingClientRect().width/2 }px; top: ${sub1.getBoundingClientRect().bottom - 25}px;"></div>`;
                            ship1.el= document.querySelector('.ship');                          
                        }                         
                        break;
                        }                  
            });
            let subss = document.querySelectorAll(".submarine2"); 
            subss.forEach((sub2) => {
                let direction = sub2.getAttribute('direction');
                switch (direction) {
               case 'top':
                    if (
                        256 <= 395 &&
                        ship1.el.getBoundingClientRect().right > sub2.getBoundingClientRect().left &&
                        ship1.el.getBoundingClientRect().left < sub2.getBoundingClientRect().right
                    ) {
                        console.log('в зоне');
                         bgsky.innerHTML += `<div class="torpedo" direction="top" style="left: ${sub2.getBoundingClientRect().left + sub2.getBoundingClientRect().width/2 }px; top: ${sub2.getBoundingClientRect().bottom - 25}px;"></div>`;
                        ship1.el= document.querySelector('.ship');                      
                    }                     
                    break;
                    }                  
        });

        let subsss = document.querySelectorAll(".submarine3"); 
            subsss.forEach((sub3) => {
                let direction = sub3.getAttribute('direction');
                switch (direction) {
               case 'top':

                    if (
                        256 <= 495 &&
                        ship1.el.getBoundingClientRect().right > sub3.getBoundingClientRect().left &&
                        ship1.el.getBoundingClientRect().left < sub3.getBoundingClientRect().right
                    ) {
                        console.log('в зоне');
                         bgsky.innerHTML += `<div class="torpedo" direction="top" style="left: ${sub3.getBoundingClientRect().left + sub3.getBoundingClientRect().width/2 }px; top: ${sub3.getBoundingClientRect().bottom - 25}px;"></div>`;
                        ship1.el= document.querySelector('.ship');                      
                    }                     
                    break;
                    }                  
        });
        }, 1500);

ints.checkEnemyTorpedoForShip = setInterval(()=>{
   let  torpedos = document.querySelectorAll('.torpedo');   
        torpedos.forEach((torpedo)=>{
        let direction = torpedo.getAttribute('direction');
                   
        switch(direction){
        case 'top':
        if(torpedo.getBoundingClientRect().top <= 256 &&
        torpedo.getBoundingClientRect().right > ship1.el.getBoundingClientRect().left &&
        torpedo.getBoundingClientRect().left < ship1.el.getBoundingClientRect().right
         ){
           ship1.el.parentNode.removeChild(ship1.el);
           let shipBlow = new Audio("audio/vzryivkoroblia.mp3");
           shipBlow.play();
           bgsky.innerHTML += `<img src ="${blow.img}" class="blow" direction="bottom" style="left:${ship1.x+ (ship1.width/2)}px; top: ${ship1.y}px;">`; 
           blow.el = document.querySelector('.blow');

           setTimeout(()=>{
            let blows = document.querySelectorAll(".blow");
            blows.forEach((blow)=>{
            setTimeout(()=>{ blow.parentNode.removeChild(blow); },200);                  
            });
           });
          
          restart ();           
    }
        break;
       }
    });
},fps);   


ints.sub1 = setInterval(()=>{
        let subs = document.querySelectorAll(".submarine1"); 
        subs.forEach((sub1)=>{
                 let mines = document.querySelectorAll(".mine");
                mines.forEach((mine)=>{

                if(mine.getBoundingClientRect().top === 295 &&
                mine.getBoundingClientRect().right > sub1.getBoundingClientRect().left &&
                mine.getBoundingClientRect().left < sub1.getBoundingClientRect().right
                ){
                  sub1.parentNode.removeChild(sub1);
                  mine.parentNode.removeChild(mine);
                  let audioSub = new Audio("audio/explosion.mp3");
                  audioSub.play();
                  points++;
                  bgsky.innerHTML += `<div class="blow" direction ="top" style="left: ${sub1.x }px; bottom: 295px;"><img src ="img/2a9n.gif"></div>`;
                }                       
            });

            if(sub1.getBoundingClientRect().left >= 1125){
                sub1.style.left = '10px';
                } else {sub1.style.left = sub1.getBoundingClientRect().left + 5 + "px";
               }                              
               });          

    },fps);
ints.sub2 = setInterval(()=>{
        let subs = document.querySelectorAll(".submarine2");        
        subs.forEach((sub2)=>{

            let mines = document.querySelectorAll(".mine");

            mines.forEach((mine)=>{
                if(mine.getBoundingClientRect().top === 395 &&
                mine.getBoundingClientRect().right > sub2.getBoundingClientRect().left&&
                mine.getBoundingClientRect().left < sub2.getBoundingClientRect().right){
                  sub2.parentNode.removeChild(sub2);
                  mine.parentNode.removeChild(mine);
                  let audioSubs = new Audio("audio/explosion.mp3");
                  audioSubs.play();
                  pointss++;
                 bgsky.innerHTML += `<div class="blow" direction ="top" style="left: ${sub2.x + (sub2.width/2) }px; top: ${sub2.y}px;"><img src ="img/2a9n.gif"></div>`;
                }
            });
            if(sub2.getBoundingClientRect().left <= 10){
                sub2.style.left = '1150px';
                } else {sub2.style.left = sub2.getBoundingClientRect().left - 5 + "px";}         
           
        }); 

    },fps);
ints.sub3 = setInterval(()=>{
        let subs = document.querySelectorAll(".submarine3");        
        subs.forEach((sub3)=>{

            let mines = document.querySelectorAll(".mine");

            mines.forEach((mine)=>{
                if(mine.getBoundingClientRect().top === 495 &&
                mine.getBoundingClientRect().right > sub3.getBoundingClientRect().left&&
                mine.getBoundingClientRect().left < sub3.getBoundingClientRect().right){
                  sub3.parentNode.removeChild(sub3);
                  mine.parentNode.removeChild(mine);
                  let audioSubss = new Audio("audio/explosion.mp3");
                  audioSubss.play();
                  pointsss++;
                 //document.querySelector('.inner-points').innerText = pointsss;
                  }
            });

            if(sub3.getBoundingClientRect().left >= 1125 ){
                sub3.style.left = '50px';
            } else {sub3.style.left = sub3.getBoundingClientRect().left + 5 + "px";}                               
        }); 

    },sub3speed);
}


function controllers (){
    
    document.addEventListener("keydown",(event)=> {
        switch(event.keyCode){
            case 37:
                ship1.el.style.backgroundImage = `url(${ship1.sprites.right})`;
                ship1.run=true;
                ship1.side=1;
                break;
            case 39:
                ship1.el.style.backgroundImage =`url(${ship1.sprites.left})`;
                ship1.run=true;
                ship1.side=2;
                break;  
            case 65:
                addMine(key);
                break;  
             
        }
    });

    let key = document.addEventListener('keydown', ()=> {if(event.keyCode ==65 ) console.log("65");});
  
    document.addEventListener("keyup", ()=>{
          if([37,39].includes(event.keyCode))
          ship1.run=false;
    });
}

function addMine(){ 
    bgsky.innerHTML += `<div class="mine" direction="bottom" style="left: ${ship1.x+ (ship1.width/2)}px; top: ${ship1.y + 40}px;"></div>`;
    ship1.el = document.querySelector('.ship');
}

function addSubs(){
    bgsky.innerHTML += `<div class="submarine1" direction="top" style="left: ${sub1.x}px; top: ${sub1.y}px;"></div>`;
    sub1.el = document.querySelector('.submarine1');
    bgsky.innerHTML += `<div class="submarine2" direction="top" style="left: ${sub2.x}px; top: ${sub2.y}px;"></div>`;
    sub2.el = document.querySelector('.submarine2');
    bgsky.innerHTML += `<div class="submarine3" direction="top" style="left: ${sub3.x}px; top: ${sub3.y}px;"></div>`;
    sub3.el = document.querySelector('.submarine3');
}

function startGame(){
    document.querySelector('.start-game').classList.remove('on');
    game();
    calc();
    writeName ();
    
}

function writeName (event) {
    let getName = document.querySelector('.inner-name');
    let inputName = document.querySelector('input').value;
    let startButton = document.querySelector('.start-btn');
    startButton.addEventListener('click',(event) => { 
        getName.innerHTML = inputName.value;
        console.log('name')
    }
    )    
       
   
}


writeName ();


let bgsky = document.querySelector(".gamezone"),
fps = 1000/5,
points =0,
pointss =0,
pointsss =0,

player = {
    name: ''
},

ship1 = {
        sprites:{
            left:'img/ship1.png',
            right: 'img/ship1left.png',
        },
        el: false,
        x: 600,
        y: 195,
        run: false,
        side: 1, //2
        width: 179,
        hight: 67,
        hp: 4
        },
sub1 = {
    el: false,
    y: 295,
    x: 10,
    width: 135,
    hp:1
}, 
sub2 = {
    el: false,
    y: 395,
    x: 1150,
    width: 140,
    hp:1
},
sub3 = {
    el: false,
    y: 495,
    x: 50,
    width: 160,
    hp:1
},
torpedo = {
    x: 90
},
sub3speed = 1000/10,
torpspeed = 1000/6,
enemyShotsSpeed = 1000/6,
blow = {
    el:false,
    img: 'img/2a9n.gif'
      
},
mine ={
    fire:false,
},        
ints = {
    subShots:false,
    run: false,
    mine: false,
    sub1:false,
    sub2: false,
    sub3:false,
    subTorpedos:false,
    blow:false,
    torpedo:false,
    checkEnemyTorpedoForShip: false,
    blowups: false
   
    };

function game(){
   init();
   controllers();
   intervals ();
   addSubs();
}

