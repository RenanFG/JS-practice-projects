const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");
var randomNumberlog;

btn.addEventListener('click', function(){
    //
    let randomNumber = getRandomNumber();
    while(randomNumber == randomNumberlog){
        randomNumber = getRandomNumber();
    }

    randomNumberlog = randomNumber;
    console.log(randomNumber);
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}) 

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length); 
}
