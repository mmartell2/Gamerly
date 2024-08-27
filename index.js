const toggleBars = document.querySelector('.fa-bars');
const xMark = document.querySelector('.fa-xmark')
const menu = document.querySelector('.menu');


toggleBars.addEventListener('click', function() {
    menu.classList.toggle('active');
    console.log('clicked');
})

xMark.addEventListener('click', function() {
    menu.classList.toggle('active')
})




//TicTacToe JS
let gameState = false;
let playerTurn = '';
const ticContainer = document.querySelector('.tic-container');
const ticText = document.querySelector('.tic-text');
const startBtn = document.querySelector('.start-btn');
const restartBtn = document.querySelector('.restart-btn');


createBoard();

const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');
const box4 = document.querySelector('.box-4');
const box5 = document.querySelector('.box-5');
const box6 = document.querySelector('.box-6');
const box7 = document.querySelector('.box-7');
const box8 = document.querySelector('.box-8');
const box9 = document.querySelector('.box-9');

//box event Listeners

box1.addEventListener('click', function(){
    if(box1.textContent === '' && gameState === true){
        box1.innerHTML = `<h1>${playerTurn}</h1>`
        ticText.textContent = `It is ${playerTurn}'s turn :)`;
        switchTurn();
    }
})
box2.addEventListener('click', function(){
    if(box2.textContent === '' && gameState === true){
        box2.innerHTML = `<h1>${playerTurn}</h1>`
        ticText.textContent = `It is ${playerTurn}'s turn :)`;
        switchTurn();
    }
})
box3.addEventListener('click', function(){
    if(box3.textContent === '' && gameState === true){
        box3.innerHTML = `<h1>${playerTurn}</h1>`
        ticText.textContent = `It is ${playerTurn}'s turn :)`;
        switchTurn();
       
    }
})
box4.addEventListener('click', function(){
    if(box4.textContent === '' && gameState === true){
        box4.innerHTML = `<h1>${playerTurn}</h1>`
        ticText.textContent = `It is ${playerTurn}'s turn :)`;
        switchTurn();
    }
})
box5.addEventListener('click', function(){
    if(box5.textContent === '' && gameState === true){
        box5.innerHTML = `<h1>${playerTurn}</h1>`
        ticText.textContent = `It is ${playerTurn}'s turn :)`;
        switchTurn();
    }
})
box6.addEventListener('click', function(){
    if(box6.textContent === '' && gameState === true){
        box6.innerHTML = `<h1>${playerTurn}</h1>`
        ticText.textContent = `It is ${playerTurn}'s turn :)`;
        switchTurn();
    }
})
box7.addEventListener('click', function(){
    if(box7.textContent === '' && gameState === true){
        box7.innerHTML = `<h1>${playerTurn}</h1>`
        ticText.textContent = `It is ${playerTurn}'s turn :)`;
        switchTurn();
    }
})
box8.addEventListener('click', function(){
    if(box8.textContent === '' && gameState === true){
        box8.innerHTML = `<h1>${playerTurn}</h1>`
        ticText.textContent = `It is ${playerTurn}'s turn :)`;
        switchTurn();
    }
})
box9.addEventListener('click', function(){
    if(box9.textContent === '' && gameState === true){
        box9.innerHTML = `<h1>${playerTurn}</h1>`
        ticText.textContent = `It is ${playerTurn}'s turn :)`;
        switchTurn();
    }
})

//start & restart btns
startBtn.addEventListener('click', function() {
    startGame();
    pointerCheck();
})

restartBtn.addEventListener('click', function(){
    clearBoard();
    startGame();
    pointerCheck();
})



//Functions
function createBoard() {
    let board = ""
    for(let i = 0; i < 9; i++){
        let boxNum = i + 1;
        board += `<div class="box box-${boxNum}"></div>`;
    }
    return ticContainer.innerHTML = board;
}

function startGame() {
    gameState = true;
    playerTurn = 'X';
    ticText.textContent = `It is ${playerTurn}'s turn :)`;
}

function fillBox() {

}

function switchTurn() {
    if(playerTurn === 'X'){
        playerTurn = 'Y'
    } else {
        playerTurn = 'X'
    }
    winCheck();
    pointerCheck();
}

function clearBoard() {
    box1.innerHTML = '';
    box2.innerHTML = '';
    box3.innerHTML = '';
    box4.innerHTML = '';
    box5.innerHTML = '';
    box6.innerHTML = '';
    box7.innerHTML = '';
    box8.innerHTML = '';
    box9.innerHTML = '';
}

//Makes the cursor a pointer on available boxes and only when the game is started
function pointerCheck() {
    if(box1.textContent === '' && gameState === true){
        box1.style.cursor = 'pointer';
    } else {
        box1.style.cursor = 'default';
    }
    if(box2.textContent === '' && gameState === true){
        box2.style.cursor = 'pointer';
    } else {
        box2.style.cursor = 'default';
    }
    if(box3.textContent === '' && gameState === true){
        box3.style.cursor = 'pointer';
    } else {
        box3.style.cursor = 'default';
    }
    if(box4.textContent === '' && gameState === true){
        box4.style.cursor = 'pointer';
    } else {
        box4.style.cursor = 'default';
    }
    if(box5.textContent === '' && gameState === true){
        box5.style.cursor = 'pointer';
    } else {
        box5.style.cursor = 'default';
    }
    if(box6.textContent === '' && gameState === true){
        box6.style.cursor = 'pointer';
    } else {
        box6.style.cursor = 'default';
    } 
    if(box7.textContent === '' && gameState === true){
        box7.style.cursor = 'pointer';
    } else {
        box7.style.cursor = 'default';
    }
    if(box8.textContent === '' && gameState === true){
        box8.style.cursor = 'pointer';
    } else {
        box8.style.cursor = 'default';
    }
    if(box9.textContent === '' && gameState === true){
        box9.style.cursor = 'pointer';
    } else {
        box9.style.cursor = 'default';
    }
}

function winCheck() {
    //Player X WinCheck
        //Horizontal Top Row
    if((box1.textContent === 'X' &&
        box2.textContent === 'X' &&
        box3.textContent === 'X') ||
        //Horizontal Middle Row
       (box4.textContent === 'X' &&
        box5.textContent === 'X' &&
        box6.textContent === 'X') ||
        //Horizontal Bottom Row
       (box7.textContent === 'X' &&
        box8.textContent === 'X' &&
        box9.textContent === 'X') ||
        //Vertical Left Column
       (box1.textContent === 'X' &&
        box4.textContent === 'X' &&
        box7.textContent === 'X') ||
        //Vertical Middle Column
       (box2.textContent === 'X' &&
        box5.textContent === 'X' &&
        box8.textContent === 'X') ||
        //Vertical Right Column
       (box3.textContent === 'X' &&
        box6.textContent === 'X' &&
        box9.textContent === 'X') ||
        //Diagonal Top Left to Bottom Right
       (box1.textContent === 'X' &&
        box5.textContent === 'X' &&
        box9.textContent === 'X') ||
        //Diagonal Bottom Left to Top Right
       (box7.textContent === 'X' &&
        box5.textContent === 'X' &&
        box3.textContent === 'X')
    ) {
        ticText.textContent = 'Player X won!'
        gameState = false
    }

    //Player Y WinCheck
        //Horizontal Top Row
    if((box1.textContent === 'Y' &&
        box2.textContent === 'Y' &&
        box3.textContent === 'Y') ||
        //Horizontal Middle Row
       (box4.textContent === 'Y' &&
        box5.textContent === 'Y' &&
        box6.textContent === 'Y') ||
        //Horizontal Bottom Row
       (box7.textContent === 'Y' &&
        box8.textContent === 'Y' &&
        box9.textContent === 'Y') ||
        //Vertical Left Column
       (box1.textContent === 'Y' &&
        box4.textContent === 'Y' &&
        box7.textContent === 'Y') ||
        //Vertical Middle Column
       (box2.textContent === 'Y' &&
        box5.textContent === 'Y' &&
        box8.textContent === 'Y') ||
        //Vertical Right Column
       (box3.textContent === 'Y' &&
        box6.textContent === 'Y' &&
        box9.textContent === 'Y') ||
        //Diagonal Top Left to Bottom Right
       (box1.textContent === 'Y' &&
        box5.textContent === 'Y' &&
        box9.textContent === 'Y') ||
        //Diagonal Bottom Left to Top Right
       (box7.textContent === 'Y' &&
        box5.textContent === 'Y' &&
        box3.textContent === 'Y')
    ) {
        ticText.textContent = 'Player Y won!'
        gameState = false
    }
}





