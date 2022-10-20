
 window.onload = function(){
            document.querySelector("#menu-bar").addEventListener("click", function(){
                if(document.querySelector(".nav ul").style.display == 'flex'){
                    document.querySelector(".nav ul").style.display = 'none';
                }else{
                    document.querySelector(".nav ul").style.display = 'flex';
                }
            });
        };
   

        function aparecer(button){
            button.style.display = 'none';
            let one = document.getElementsByClassName('site')
         
            for(let n = 0; n < one.length; n++){
                one[n].style.display = 'block';
            }

            document.getElementById('muda-cor').classList.remove('cor-one')
        }
        function scrollAboutUs(){
            window.scrollTo({
                top:928,
                behavior:'smooth'
            })
        }
        function services(){
            window.scrollTo({
                top:1591,
                behavior:'smooth'
            })
        }
        function ourProjects(){
            window.scrollTo({
                top:2007,
                behavior:'smooth'
            })
        }
        function ourTeam(){
            window.scrollTo({
                top:2934,
                behavior:'smooth'
            })
        }