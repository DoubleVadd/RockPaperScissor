function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

// get user input as play and translate it into number
function getPlay(){
    let player = prompt("Rock Paper or Scissors");
    play = player.toLowerCase().trim();
    play = revTranslator(play);
    console.log(playRound(play, getComputerChoice()));
}



//Translates Play into Number
function revTranslator(play){
    switch (play) {
        case 'rock':
            return 0;
        case 'paper':
            return 1;
        case 'scissor':
            return 2;
        default:
            return 'forfeit';
    }
}

//Translates Numbers into Play
function translator(play){
    switch (play) {
        case 0:
            return 'Rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
        default:
            return 'None';
    }
}


// 0 = rock 1 = paper 2 = scissor
function playRound(getHumanChoice, getComputerChoice){
    if (getHumanChoice === 'forfeit'){
        console.log("your input is invalid, you loose");
        return
    }
    
    
    if (getHumanChoice === getComputerChoice){
        console.log("that's a tie, shame");
        console.log(`you played ${translator(getHumanChoice)}`);
        console.log(`Robot played ${translator(getComputerChoice)}`);
        return
    }
    // human win condition
    if((getComputerChoice === 1 && getHumanChoice === 0) || (getComputerChoice === 2 && getHumanChoice === 1)){
        console.log("That's tough, you loose");
        console.log(`you played ${translator(getHumanChoice)}`);
        console.log(`Robot played ${translator(getComputerChoice)}`);
        return
    }
    else{
        console.log("you win somehow");
        console.log(`you played ${translator(getHumanChoice)}`);
        console.log(`Robot played ${translator(getComputerChoice)}`);
        return
    }
}

getHumanChoice = 1 ;

for (let i=0 ; i<5;  i++){
    getPlay();
}

