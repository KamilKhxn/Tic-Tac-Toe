let numOfMoves = 1;
let winner = false;

const gameControl = () => {
    let divPressed = undefined;
    const gamer = player();

    document.querySelectorAll('.gameSquare').forEach(item => {
        item.addEventListener('click', () => {
            divPressed = item.id

            // //  TESTING CASES
            // console.log('***TESTING***')
            // console.log('the number of moves is: ' + numOfMoves);
            // console.log('The winner is:' + gameBoard.checkWinner());
            // // make markerArr in scope by adding it to the returns in gameBoard
            // console.log('marker array: ' + gameBoard.markerArr)

            if (numOfMoves <= 9 && gameBoard.checkWinner() !== true) {
                gameBoard.addCharacter(divPressed, gamer.marker(numOfMoves));
                displayController.setMessage(gamer.marker(numOfMoves));
                gameBoard.checkWinner();

                // restart button
                const btn = document.querySelector('.restart')
                btn.addEventListener('click', () => {
                    gameBoard.restartBtn();
                });
            } // end of if

            // checking for draw
            if (numOfMoves > 9 && gameBoard.checkWinner() !== true) {
                gameBoard.checkDraw(numOfMoves);
            }
        })
    })
} // end of gameControl()

const gameBoard = (() => {

    // dom elements for grid
    const sq0 = document.getElementById('0');
    const sq1 = document.getElementById('1');
    const sq2 = document.getElementById('2');
    const sq3 = document.getElementById('3');
    const sq4 = document.getElementById('4');
    const sq5 = document.getElementById('5');
    const sq6 = document.getElementById('6');
    const sq7 = document.getElementById('7');
    const sq8 = document.getElementById('8');

    let query = [sq0, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8];
    let markerArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    // adds 'X' or 'O' to the gameboard on browser and markerArr
    const addCharacter = (divPressed, marker) => {
        if (markerArr[divPressed] === 0) {
            markerArr[divPressed] = marker;
            query[divPressed].textContent = marker;
            numOfMoves++;
        }
    }

    const checkWinner = () => {

        // [0,1,2]
        // [3,4,5]
        // [6,7,8]

        if (
            // vertical cases
            markerArr[0] === 'X' && markerArr[3] === 'X' && markerArr[6] === 'X' ||
            markerArr[1] === 'X' && markerArr[4] === 'X' && markerArr[7] === 'X' ||
            markerArr[2] === 'X' && markerArr[5] === 'X' && markerArr[8] === 'X' ||
            // horizontal case ||
            markerArr[0] === 'X' && markerArr[1] === 'X' && markerArr[2] === 'X' ||
            markerArr[3] === 'X' && markerArr[4] === 'X' && markerArr[5] === 'X' ||
            markerArr[6] === 'X' && markerArr[7] === 'X' && markerArr[8] === 'X' ||
            // diagonal case ||
            markerArr[0] === 'X' && markerArr[4] === 'X' && markerArr[8] === 'X' ||
            markerArr[2] === 'X' && markerArr[4] === 'X' && markerArr[6] === 'X') {

            winner = true
            displayController.setWinner('X');
        }
        if (
            markerArr[0] === 'O' && markerArr[3] === 'O' && markerArr[6] === 'O' ||
            markerArr[1] === 'O' && markerArr[4] === 'O' && markerArr[7] === 'O' ||
            markerArr[2] === 'O' && markerArr[5] === 'O' && markerArr[8] === 'O' ||
            // horizontal case
            markerArr[0] === 'O' && markerArr[1] === 'O' && markerArr[2] === 'O' ||
            markerArr[3] === 'O' && markerArr[4] === 'O' && markerArr[5] === 'O' ||
            markerArr[6] === 'O' && markerArr[7] === 'O' && markerArr[8] === 'O' ||
            // diagonal case
            markerArr[0] === 'O' && markerArr[4] === 'O' && markerArr[8] === 'O' ||
            markerArr[2] === 'O' && markerArr[4] === 'O' && markerArr[6] === 'O') {

            winner = true
            displayController.setWinner('O');
        }
        return winner;
    }

    const checkDraw = numOfMoves => {
        if (numOfMoves === 10 && gameBoard.checkWinner() === false) {
            displayController.setDraw();
        }
    }

    const restartBtn = () => {
        numOfMoves = 1;
        winner = false;
        markerArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        displayController.setMessage('X');

        // console.log('***RESTART TESTING***')
        // console.log('restart button pressed!');
        // console.log(markerArr);
        // console.log(winner);
        // console.log(numOfMoves);

        // iterates through query arr and removes all 'X' and 'O'
        for (let i = 0; i < 10; i++) {
            query[i].innerHTML = '';
        }
    }

    return {
        addCharacter,
        checkWinner,
        checkDraw,
        restartBtn,
    };
})();

const displayController = (() => {
    let displayMessage = document.querySelector('.message');

    const setMessage = (marker) => {
        displayMessage.textContent = `Player ${marker}'s turn`;
    }

    const setWinner = marker => {
        displayMessage.textContent = `Player ${marker} is the winner!`;
    }

    const setDraw = () => {
        displayMessage.textContent = `It's a draw!`;
    }

    return {
        setMessage,
        setWinner,
        setDraw,
    };
})();

const player = () => {
    // identifies current players marker ('X' or 'O')
    const marker = numOfMoves => {
        let item = null;
        if (numOfMoves % 2 === 0) {
            item = 'O';
        }
        else {
            item = 'X';
        }
        return item;
    }
    return { marker, }
} // end of player

gameControl();