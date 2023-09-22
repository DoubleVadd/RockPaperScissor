const current_move = document.querySelector('.current-move');

const move_selection = document.querySelectorAll('.moves');
const robot_selection = document.querySelector('.robot-move')

const player_moves = [];
const robot_moves = [];
let p_score = r_score = 0;

// for each of the available move in RPS, apply hover and click events
move_selection.forEach((move) => {
    // On hover change the description of move on the top
    move.addEventListener('mouseover', function(e) {
        e.stopPropagation
        let chosen = this.className.split(' ')[1];
        // current_move.textContent = console.log(chosen);
        current_move.textContent = chosen;
    });
    move.addEventListener('click', function(e) {
        e.stopPropagation
        let chosen = this.className.split(' ')[1];
        // current_move.textContent = console.log(chosen);
        current_move.textContent = chosen;
        alert(`you have selected ${chosen}`);
        chooseMove(chosen);

    });
    
}); 

function chooseMove(chosen){
    let p_move = revTranslator(chosen);
    let r_move = getComputerChoice();
    robot_selection.textContent = translator(r_move);
    player_moves.push(chosen);
    robot_moves.push(translator(r_move));
    console.log(player_moves,robot_moves);
    playRound(p_move, r_move);

}


// console.log(move_selection);

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

// // get user input as play and translate it into number
// function getPlay(){
//     let player = prompt("Rock Paper or Scissors");
//     play = player.toLowerCase().trim();
//     play = revTranslator(play);
//     console.log(playRound(play, getComputerChoice()));
// }



// //Translates Play into Number
function revTranslator(play){
    switch (play) {
        case 'Rock':
            return 0;
        case 'Paper':
            return 1;
        case 'Scissor':
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
            return 'Scissor';
        default:
            return 'None';
    }
}


// // 0 = rock 1 = paper 2 = scissor
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

// // getHumanChoice = 1 ;

// // for (let i=0 ; i<5;  i++){
// //     getPlay();
// // }

