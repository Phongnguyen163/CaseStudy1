const holes = document.querySelectorAll('.square');
const timeleft = document.querySelector('#time-left');
const score = document.getElementById('score');

let lastHole;
let Dap;
let result = 0;
let total = 0;
let currentTime = 15;
let speed = 800;
let move;
let ouch = new Audio("./sound/ouch.mp3");
let TimeCd = setInterval(countDown, 1000);

function randomHole(){
    const hole = holes[Math.floor(Math.random() * 9)];
    const time = speed;
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
    }, time);

    if (hole === lastHole){
        return randomHole();
    }
    lastHole = hole;

    Dap = hole.id;

}

function moveMole () {
    move = setInterval(randomHole,speed);
}

moveMole();

holes.forEach(holes => {
    holes.addEventListener('mousedown', () =>
    {
        if (holes.id === Dap) {
            ouch.play();
            ouch.currentTime=0;
            result++;
            total++;
            score.innerHTML = ""+total;
        }
    });
});

function countDown() {
    currentTime--
    timeleft.textContent = currentTime;

    if ( currentTime > 0 && result >= 10) {
        alert('Level up');
        clearInterval(move);
        result = 0;
        currentTime = 15;
        timeleft.textContent = currentTime;
        speed -= 100;
        moveMole();
    }

    else if (currentTime === 0) {
        clearInterval(TimeCd);
        clearInterval(move);
        alert('Your final score is: ' + total);
        result = 0
        currentTime = 15;
        score.innerHTML = ""+total;
        timeleft.textContent = currentTime;
        window.location = "gameover.html";
    }
}

