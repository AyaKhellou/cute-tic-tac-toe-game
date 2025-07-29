let cells = document.querySelectorAll('.cell');

// check win function:

function checkWin() {
    
    // if:
// => 1 2 3 / 4 5 6 / 7 8 9  => win
// => 1 4 7 / 2 5 8 / 3 6 9 => win
// =>  3 5 7 / 1 5 9 => win

}

let win1 = [1,2,3];


// Add click event listener to each cell


let turn = 'x';

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.textContent === "" && turn === 'x') {
            cell.textContent = 'X';
            
            console.log(cell.id);

            turn = 'o';
            console.log(`it's your turn O`);

        }else if(cell.textContent === "" && turn === 'o') {
            cell.textContent = 'O';
            turn = 'x';
            console.log(`it's your turn X`);
        }
    });
});


