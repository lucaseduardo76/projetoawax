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
            myTimer = setInterval(jump, 6000);
        }
        function jumpTwo(){
            document.querySelector(`.slie`).style.marginLeft =  `calc(-100vw)`;
            n = 2;
            clearInterval(myTimer)
            myTimer = setInterval(jump, 6000);
        }
        function jumpThree(){
            document.querySelector(`.slie`).style.marginLeft =  `calc(-200vw)`;
            n = 3;
            clearInterval(myTimer)
            myTimer = setInterval(jump, 6000);
        }
        window.onload = function(){
            document.querySelector("#menu-bar").addEventListener("click", function(){
                if(document.querySelector(".nav ul").style.display == 'flex'){
                    document.querySelector(".nav ul").style.display = 'none';
                }else{
                    document.querySelector(".nav ul").style.display = 'flex';
                }
            });
        };

        document.querySelector('#prev').addEventListener('click', () => {
            move--
            checkBoxWorkers()
            if(move < 0){
                move = extraBox
            }
            containerWorkers.style.marginLeft = `${-330 * move}px`
            
        })
      
        document.querySelector('#next').addEventListener('click', () => {
            move++
            checkBoxWorkers()
            if(move > extraBox){
                move = 0
            }
            containerWorkers.style.marginLeft = `${-330 * move}px`
            
        })
        function checkBoxWorkers(){
            let userScreen = window.screen.width;
            let workersBoxScreen = 3;  
            let workersBox = document.querySelectorAll(".box-workers").length; 
            if(userScreen <= 1150 && userScreen > 700){
                workersBoxScreen = 2;
              }else if(userScreen <= 700){
                workersBoxScreen = 1;
              }else{
                workersBoxScreen = 3;
              }
              extraBox = workersBox - workersBoxScreen;


              let circleSliceBox = document.querySelector('#slideWorker');
              let divsCircle = []
              for(let n = 0; n <= extraBox; n++){
                divsCircle[n] = `<div class="circle circle-workers"></div>`;
              }

              if(move < 0){
                move = extraBox
            }else if(move > extraBox){
                move = 0
            }
              circleSliceBox.innerHTML = divsCircle
              document.querySelectorAll('.circle-workers')[move].classList.add('active')

        }

        let move = 0;
        let extraBox = 0;
        let containerWorkers = document.querySelector('.container-slide-worker');                    
        let myTimer = setInterval(jump, 6000);        
        let n = 0;

        checkBoxWorkers()

       
      
        

