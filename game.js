const holes = document.querySelectorAll('.square');
const timeleft = document.querySelector('#time-left');
const score = document.getElementById('score');
let lastHole;
let Dap;
let result = 0;
let total = 0;
let currentTime = 10;
let speed = 600;
let move;

function randomHole(){
    const hole = holes[Math.floor(Math.random() * 9)];
    const time = speed;
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
    }, time);

    if (hole === lastHole){
        return randomHole(holes);
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
        currentTime = 10;
        timeleft.textContent = currentTime;
        speed -= 100;
        moveMole();
    }

    else if (currentTime === 0) {
        clearInterval(TimeCd);
        clearInterval(move);
        alert('Game Over! Your final score is: ' + total);
        result = 0
        currentTime = 10;
        score.innerHTML = ""+total;
        timeleft.textContent = currentTime;
        document.getElementById('rs').innerHTML = "<dialog open><button onclick='Reset()'>Reset</button></dialog>"
    }
}
let TimeCd = setInterval(countDown, 1000);

function Reset () {
    location.reload()
}

