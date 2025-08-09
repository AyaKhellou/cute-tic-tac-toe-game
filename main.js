let cells = document.querySelectorAll('.cell');
let restart = document.querySelector('button.restart');
let gameOver = false;
let playersTurn = document.querySelector('.turn');
let result = document.querySelector('.result');

let randomNum = Math.floor(Math.random() * 2);

let turns = ['x','o'];

let turn = turns[randomNum]

playersTurn.textContent = `Player ${turn.toUpperCase()}'s turn`;
// restart function
restart.addEventListener('click', ()=>{

    window.location.reload();
    
})
//set wining cases:

let winningCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


// check win function:

function checkWin(currentCell) {
    
    winningCases.forEach(winCase => {

        if (winCase.every(el => cells[el].textContent === currentCell.textContent && !gameOver)) {

            result.textContent = `Player ${currentCell.textContent} won`;

            winCase.forEach(el => {
                cells[el].style.backgroundColor = '#C299C9';
            });
            gameOver = true;
            setGameOver();
        }

    });
}



// Add click event listener to each cell



cells.forEach((cell) => {

    cell.addEventListener('click', () => {
        if (cell.textContent === "" && turn === 'x' && !gameOver) {

            cell.textContent = turn.toUpperCase();

            checkWin(cell);

            if (!gameOver) {
                turn = 'o';
                playersTurn.textContent = `Player ${turn.toUpperCase()}'s turn`;
            }

        }else if(cell.textContent === "" && turn === 'o' && !gameOver) {

            cell.textContent = turn.toUpperCase();

            checkWin(cell);

            if (!gameOver) {
                turn = 'x';
                playersTurn.textContent = `Player ${turn.toUpperCase()}'s turn`;
            }
        }
        
        if ([...cells].every(el => el.textContent !== '') && !gameOver) {
            gameOver = true;
            setGameOver();
            result.textContent = 'game over no one won';
        }
    });
    
});

function setGameOver(){
    if (gameOver) {
        restart.textContent = `Play again`;
    }
}