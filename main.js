let cells = document.querySelectorAll('.cell');
let restart = document.querySelector('button.restart');
let gameOver = false;
let comment = document.querySelector('.comment p');

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

            comment.textContent = `${currentCell.textContent} win`;

            winCase.forEach(el => {
                cells[el].style.backgroundColor = 'white';
            });
            gameOver = true;
            setGameOver();
        }

    });
}



// Add click event listener to each cell


let turn = 'x';

cells.forEach((cell,i) => {

    cell.addEventListener('click', () => {
        if (cell.textContent === "" && turn === 'x' && !gameOver) {
            cell.textContent = 'X';

            checkWin(cell);

            if (!gameOver) {
                turn = 'o';
                comment.textContent = `it's your turn O`;
            }

        }else if(cell.textContent === "" && turn === 'o' && !gameOver) {
            cell.textContent = 'O';

            checkWin(cell);

            if (!gameOver) {
                turn = 'x';
                comment.textContent = `it's your turn X`;
            }
        }
        
        if ([...cells].every(el => el.textContent !== '') && !gameOver) {
            setGameOver();
            comment.textContent = 'game over no one won'
        }
    });
    
});

function setGameOver(){
    if (gameOver) {
        // comment.textContent = `game is over! ${winner} won 😁`;
        restart.textContent = `Play again`;
    }
}