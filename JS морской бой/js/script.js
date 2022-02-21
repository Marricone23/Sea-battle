let ship1 = document.querySelector(".ship"),
      subs = document.querySelector(".subs"),
      sub1 = subs.querySelector(".submarine1"),
      sub2 = subs.querySelector(".submarine2"),
      sub3 = subs.querySelector(".submarine3");

      ///ship1.style.left = 600+'px';


  
    document.addEventListener('keydown', (event)=> {
        if(event.keyCode === 37){
            //console.log(event);
            ship1.style.left =600-50 + 'px';
        }else if(event.keyCode === 39){
            //console.log(event);
            ship1.style.left =550+100 +'px';
        };

    });    


 


