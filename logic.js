const current_move = document.querySelector('.current-move');

const move_selection = document.querySelectorAll('.moves');
const robot_selection = document.querySelector('.robot-move')

const player_moves = [];
const robot_moves = [];
let number_moves = 0;
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
        // alert(`you have selected ${chosen}`);
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
    const this_move = updateScore(player_moves.length);
    this_move.forEach(play => {
        if (play.classList[1] ===  'player'){ 
            play.textContent = translator(p_move)}
            else {play.textContent = translator(r_move);
            moveUpdater();
        }
    })
}

function moveUpdater(reset=false){
    if (reset !=true ){
        const status = document.querySelector('.status');
        console.log(status)
        status.textContent = `${number_moves += 1} moves played`;
    }else{
        const status = document.querySelector('.status');
        console.log(status)
        status.textContent = `No Moves Played`;
    }
    const player_total = document.querySelector('.total-player');
    player_total.textContent = p_score;
    const robot_total = document.querySelector('.total-robot');
    robot_total.textContent = r_score;
}


function updateScore(player){
    switch(player){
        case 1:
            return document.querySelectorAll('.s1');
        case 2:
            return document.querySelectorAll('.s2');
        case 3:
            return document.querySelectorAll('.s3');
        case 4:
            return document.querySelectorAll('.s4');
        case 5:
            return document.querySelectorAll('.s5');
        default:
            player_moves.length = 0;
            robot_moves.length = 0;
            return document.querySelectorAll('.s1');
    }
}



// console.log(move_selection);

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

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
        return;
    }
    // human win condition
    if((getComputerChoice === 1 && getHumanChoice === 0) || (getComputerChoice === 2 && getHumanChoice === 1) || (getComputerChoice === 0 && getHumanChoice === 2)){
        console.log("That's tough, you loose");
        console.log(`you played ${translator(getHumanChoice)}`);
        console.log(`Robot played ${translator(getComputerChoice)}`);
        r_score += 1 ;
        return;
    }
    else{
        console.log("you win somehow");
        console.log(`you played ${translator(getHumanChoice)}`);
        console.log(`Robot played ${translator(getComputerChoice)}`);
        p_score += 1 ;
        return;
    }
}


const button = document.querySelector('.reset');

button.addEventListener('click', () => {
    //Reset Trackers
    player_moves.length = robot_moves.length = 0;
    p_score = r_score = 0;
    number_moves = 0;
    moveUpdater(reset=true)
    robot_selection.textContent = '∇'
    const p1_board = document.querySelectorAll('.player');
    p1_board.forEach(board => board.textContent = '-');
    const p2_board = document.querySelectorAll('.robot');
    p2_board.forEach(board => board.textContent = '-');
})

