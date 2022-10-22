
 window.onload = function(){
            document.querySelector("#menu-bar").addEventListener("click", function(){
                if(document.querySelector(".nav ul").style.display == 'flex'){
                    document.querySelector(".nav ul").style.display = 'none';
                }else{
                    document.querySelector(".nav ul").style.display = 'flex';
                }
            });
        };




        /*var timer = new Timer(function() {
        // your function here
        }, 5000);

        // switch interval to 10 seconds
        timer.reset(10000);

        // stop the timer
        timer.stop();

        // start the timer
        timer.start();
                
        var timer = new Timer(()=>{
            if(n > 2){
                n = 0
            }  
            document.querySelector(`.slie`).style.marginLeft =  `calc(-${n}00vw)`;       
            n++ }, 2000)*/

        

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
            clearInterval(myTimer)
            myTimer = setInterval(jump, 10000);
        }
        function jumpTwo(){
            document.querySelector(`.slie`).style.marginLeft =  `calc(-100vw)`;
            n = 2;
            clearInterval(myTimer)
            myTimer = setInterval(jump, 10000);
        }
        function jumpThree(){
            document.querySelector(`.slie`).style.marginLeft =  `calc(-200vw)`;
            n = 3;
            clearInterval(myTimer)
            myTimer = setInterval(jump, 10000);
        }


        let myTimer = setInterval(jump, 10000);
        
        let n = 0;
      
