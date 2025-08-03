let cells = document.querySelectorAll('.cell');
let restart = document.querySelector('button.restart');
let gameOver = false;

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

        if (winCase.every(el => cells[el].textContent === currentCell.textContent)) {
            console.log(`${currentCell.textContent} win`);
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

            turn = 'o';
            console.log(`it's your turn O`);

        }else if(cell.textContent === "" && turn === 'o' && !gameOver) {
            cell.textContent = 'O';

            checkWin(cell);

            turn = 'x';
            console.log(`it's your turn X`);
        }
    });
});

function setGameOver(){
    if (gameOver) {
        console.log('game is over!!!!!!!!!!!');
        
    }
}