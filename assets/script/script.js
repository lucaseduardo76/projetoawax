
 window.onload = function(){
            document.querySelector("#menu-bar").addEventListener("click", function(){
                if(document.querySelector(".nav ul").style.display == 'flex'){
                    document.querySelector(".nav ul").style.display = 'none';
                }else{
                    document.querySelector(".nav ul").style.display = 'flex';
                }
            });
        };
   

       
        function pular(){ 
            removerClass() 
            if(n > 3){
                n = 1
            }          
            slider.classList.add(`bg${n}-photo`); 
            document.querySelector(`#circle${n}`).classList.add('active');
            n++          
        };

        function removerClass(){
            for(let n = 1; n < 4; n++){
                document.querySelector(`#circle${n}`).classList.remove('active');
                slider.classList.remove(`bg${n}-photo`);
            }
           
        };

        function sliderOurTeam(){
            let slid = document.querySelector('.container-slide-worker');
            let margi; 
            let a = 'margin-left';
            if(window.screen.width > 1300){
                margi = 440
            }else{
                margi = 330
            }
            

            const newLocal = slid.style.a = '50px';

        }



        
        let slider = document.querySelector('#box');
        let classeSlider = document.querySelector('#box').set
        let n = 1;
        setInterval(pular, 5000)