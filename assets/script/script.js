const jump = () => {
    if (n > 2) {
        n = 0
    }
    cleanPointerSlide()
    pointerSlideTop[n].classList.add('active')
    document.querySelector(`.slie`).style.marginLeft = `calc(-${n}00vw)`;
    n++

}
const jumpTo = (position) => {
    position = parseInt(position)
    n = position;
    jump()
    n = position + 1;
    clearInterval(myTimer)
    myTimer = setInterval(jump, 6000);
}

const cleanPointerSlide = () => {
    for (let n = 0; n < pointerSlideTop.length; n++) {
        let check = pointerSlideTop[n].classList.contains('active');
        if (check) {
            pointerSlideTop[n].classList.remove('active');
        }
    }
}
window.onload = function () {
    document.querySelector("#menu-bar").addEventListener("click", function () {
        if (document.querySelector(".nav ul").style.display == 'flex') {
            document.querySelector(".nav ul").style.display = 'none';
        } else {
            document.querySelector(".nav ul").style.display = 'flex';
        }
    });
};

document.querySelector('#prev').addEventListener('click', () => {
    move--
    checkBoxWorkers()
    if (move < 0) {
        move = extraBox
    }
    containerWorkers.style.marginLeft = `${-330 * move}px`

})

document.querySelector('#next').addEventListener('click', () => {
    move++
    checkBoxWorkers()
    if (move > extraBox) {
        move = 0
    }
    containerWorkers.style.marginLeft = `${-330 * move}px`

})
const checkBoxWorkers = () => {
    let userScreen = window.screen.width;
    let workersBoxScreen = 3;
    let workersBox = document.querySelectorAll(".box-workers").length;
    if (userScreen <= 1150 && userScreen > 700) {
        workersBoxScreen = 2;
    } else if (userScreen <= 700) {
        workersBoxScreen = 1;
    } else {
        workersBoxScreen = 3;
    }
    extraBox = workersBox - workersBoxScreen;


    let circleSliceBox = document.querySelector('#slideWorker');
    let divsCircle = []
    for (let n = 0; n <= extraBox; n++) {
        divsCircle[n] = `<div class="circle circle-workers"></div>`;
    }

    if (move < 0) {
        move = extraBox
    } else if (move > extraBox) {
        move = 0
    }
    circleSliceBox.innerHTML = divsCircle
    document.querySelectorAll('.circle-workers')[move].classList.add('active');

};

document.querySelector('#bot-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});

addEventListener('scroll', () => {
    if (window.scrollY == 0) {
        document.querySelector('#bot-top').style.display = 'none';
    } else {
        document.querySelector('#bot-top').style.display = 'flex';
    }
});

const scrl = (e, it) =>{ 
    e.preventDefault();
    let id = it.getAttribute('href')
    let section = document.querySelector(id);
    window.scrollTo({
        top: section.offsetTop,
        left: 0,
        behavior: 'smooth'
    })    
   
}

let move = 0;
let extraBox = 0;
let containerWorkers = document.querySelector('.container-slide-worker');
let pointerSlideTop = document.querySelectorAll('.point-slide--top');
let myTimer = setInterval(jump, 6000);
let n = 0;

checkBoxWorkers()
