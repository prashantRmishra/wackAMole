document.addEventListener('DOMContentLoaded', () => {

    const square = document.querySelectorAll('.square');
    const mole = document.querySelectorAll('.mole');
    const timeLeft = document.querySelector('#timeleft');
    let score = document.querySelector('#result');
    result = 0;

    function randomSquare() {
        square.forEach(className => {
            className.classList.remove('mole');
        })
        //generating random id for showing mole
        let generatedId = square[Math.floor(Math.random() * 9)];
        // it will return random index from 0 to 8
        generatedId.classList.add('mole');

        hitPosition = generatedId.id;
    }
    /* now lets generate the mole at the interval of 1s */

    function generateMole() {
        let timerId = null;
        timerId = setInterval(randomSquare, 1000);
    }
    generateMole();

    /* now listen when mouse is clicked on mole */
    square.forEach(id => {
        id.addEventListener('mouseup', () => {
            if (id.id == hitPosition) {
                result += 1;
                score.textContent = result;
            }
        })
    })
    timeremaining = timeLeft.textContent;
    function decrementTime() {
            timeremaining--;
            timeLeft.textContent = timeremaining;
            if(timeremaining==0){
                clearInterval(countdown);
                alert('Game over, your score is '+result);
                if(confirm('Wanna Play again')){
                    timeremaining=60
                    result=0;
                    score.textContent='0';
                    countdown = setInterval(decrementTime,1000)
                }
            }
       
    }
    countdown = setInterval(decrementTime,1000)




























































})


