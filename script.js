// var
var timer;
var waitTurn = false;
//
var playerImg = document.getElementById("player-img");
var playerIndex = 0;
//
var computerIndex = 0;
var computerImg = document.getElementById("computer-img");
var computerArray = ["🧻", "✂", "🪨"]
var arrayComputer = 0;
//
var buttonRight = document.getElementById("button-r");
var buttonLeft = document.getElementById("button-l");
var buttonChoose = document.getElementById("button-c");
//
var resultMessage = document.getElementById("result-msg");
var scorePlayer = document.getElementById("score-player");
var counterPlayer = 0;
var scoreComputer = document.getElementById("score-computer");
var counterComputer = 0;

// functions
var clickRight = function(){
    if(!waitTurn){
        if(playerIndex === 0){
            playerIndex++;
            playerImg.textContent = "✂";
        }else if(playerIndex === 1){
            playerIndex++;
            playerImg.textContent = "🪨";
        }else{
            playerIndex = 0;
            playerImg.textContent = "🧻";
        }
    }
};
var clickLeft = function(){
    console.log("click");
    if(!waitTurn){
        if(playerIndex === 0){
            playerIndex = 2;
            playerImg.textContent = "🪨";
            
        }else if(playerIndex === 1){
            playerIndex--;
            playerImg.textContent = "🧻";
        }else{
            playerIndex--;
            playerImg.textContent = "✂";
        }
    }
};
var doAnimation = function(){
        computerIndex++;
        computerImg.textContent = computerArray[computerIndex%3];     
};
var unfoldTurn = function(){
    if(!waitTurn){
    waitTurn = true;
    var random = 2000 + 100 * Math.floor(Math.random() * 3);
    timer = window.setInterval(doAnimation, 100)
    window.setTimeout(function(){window.clearInterval(timer)}, random);
    window.setTimeout(getResult, random);
    window.setTimeout(function(){waitTurn=false}, random + 500);
    }
};
var getResult = function(){
    if(playerIndex - computerIndex%3 === 0){
        resultMessage.textContent = "TIE";
    }else if(playerIndex - computerIndex%3 === 1 || playerIndex - computerIndex%3 === -2){
        resultMessage.textContent = "YOU WIN!";
        counterPlayer++;
        scorePlayer.textContent = counterPlayer;
    }else{
        resultMessage.textContent = "YOU LOSE!";
        counterComputer++;
        scoreComputer.textContent = counterComputer;
    }
};

// events
buttonRight.addEventListener("click", clickRight);
buttonLeft.addEventListener("click", clickLeft);
buttonChoose.addEventListener("click", unfoldTurn);

