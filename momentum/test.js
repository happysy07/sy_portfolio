
const RandomNumber = document.querySelector(".random_number");
const guessNumber = document.querySelector(".guess_number");
const resultText = document.querySelector(".num_result_text")
const finalResult = document.querySelector(".final_result");
const btnPlay = document.querySelector('.btn_play')

const machineVal =  Math.floor(Math.random(RandomNumber.value) * 10);

function playGame(){
    resultText.innerText = `You chose: ${guessNumber.value}, the machine chose: ${machineVal}`
    if(guessNumber.value >= machineVal){
        finalResult.innerText = "You won!"
    }else{
        finalResult.innerText = "You lost!"
    }
}

btnPlay.addEventListener('click', playGame)
