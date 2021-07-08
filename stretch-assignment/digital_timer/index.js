let ms = 0;
let seconds = 0;

function timer() {

    if(seconds < 10) {
        
        ms++;

        msTens.textContent = ms;
        msHundreds.textContent = '';

        if(ms / 60 === 1) {
            ms = 0;
            seconds++;
            secondOnes.textContent = seconds;

            if(seconds === 10) {
                secondTens.textContent = '';
                secondOnes.style.color = 'red';
            }
        }
    }
}

function interval() {
    return setInterval(timer, 10);
}

function resetTimer(ms, seconds) {
    clearInterval(interval);
    ms = 0;
    seconds = 0;
    msTens.textContent = ms + '0';
    secondOnes.textContent = seconds + '0';
    secondOnes.style.color = '#eee';
}

let secondTens = document.querySelector('#secondTens');
secondTens.innerHTML = 0;

let secondOnes = document.getElementById('secondOnes');
secondOnes.innerHTML = 0;

let msHundreds = document.getElementById('msHundreds');
msHundreds.innerHTML = 0;

let msTens = document.getElementById('msTens');
msTens.innerHTML = 0;

let startBtn = document.querySelector('#start');
startBtn,addEventListener('click', event => interval());

let resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', event => resetTimer());

let digits = document.querySelector('.digits');
digits.style.textAlign = 'center';
digits.style.fontFamily = 'sans-serif';
digits.style.fontSize = '3rem';
digits.style.color = '#eee';
digits.style.display = 'block';
digits.style.backgroundColor = '#333';
digits.style.padding = '40px';
digits.style.width = '20%';
digits.style.margin = '40px auto';



