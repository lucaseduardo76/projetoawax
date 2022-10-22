
 window.onload = function(){
            document.querySelector("#menu-bar").addEventListener("click", function(){
                if(document.querySelector(".nav ul").style.display == 'flex'){
                    document.querySelector(".nav ul").style.display = 'none';
                }else{
                    document.querySelector(".nav ul").style.display = 'flex';
                }
            });
        };
        
        function jump(){
            if(n > 2){
                n = 0
            }  
            document.querySelector(`.slie`).style.marginLeft =  `calc(-${n}00vw)`;       
            n++          

        }
        function jumpOne(){
            document.querySelector(`.slie`).style.marginLeft =  `calc(-000vw)`;
            n = 1; 
        }
        function jumpTwo(){
            document.querySelector(`.slie`).style.marginLeft =  `calc(-100vw)`;
            n = 2;
        }
        function jumpThree(){
            document.querySelector(`.slie`).style.marginLeft =  `calc(-200vw)`;
            n = 3;
        }


        setInterval(jump, 10000);
        
        let n = 0;
      