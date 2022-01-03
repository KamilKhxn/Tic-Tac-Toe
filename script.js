let numOfMoves = 1;
let winner = false;

const gameControl = () => { // maybe turn this into module



    // FINAL WAY TO GET WINNER BOOLEAN
    // => CONVERT GAMECONTROL INTO A MODULE AND RETURN IT
    // MAKE FUNCTIONS FOR GETTING THE DIV AND RESTART BUTTON MAKING IT EASIER TO RESTRICT 
    // BUT RESTRICTING WAS NEVER THE PROBLEM
    // GETTING THE BOOLEAN BACK INTO THE MAIN METHOD IS THE DIFFICULT PART







    let divPressed = undefined;
    // let winner = false;
    const kamil = player();


    // getting corresponding div
    document.querySelectorAll('.gameSquare').forEach(item => {
        item.addEventListener('click', () => {
            divPressed = item.id
            if (numOfMoves <= 9 && winner !== true) {
                gameBoard.addCharacter(divPressed, kamil.marker(numOfMoves), winner);
                displayController.setMessage(kamil.marker(numOfMoves));
                gameBoard.checkWinner(winner);
                console.log('main game arr checking: ' + gameBoard.gameArr); // testing
                // console.log(gameBoard.markerArr); // testing
                console.log('main check ' + winner);
            }

        })
    })

    // // restart button
    // const btn = document.querySelector('.restart')
    // btn.addEventListener('click', () => {
    //     //  TODO    
    // });

} // end of gameControl()

// module
const gameBoard = (() => {

    // dom elements
    const sq0 = document.getElementById('0');
    const sq1 = document.getElementById('1');
    const sq2 = document.getElementById('2');
    const sq3 = document.getElementById('3');
    const sq4 = document.getElementById('4');
    const sq5 = document.getElementById('5');
    const sq6 = document.getElementById('6');
    const sq7 = document.getElementById('7');
    const sq8 = document.getElementById('8');

    let query = [sq0, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8]
    let gameArr = new Array(9).fill(0);
    let markerArr = new Array(9).fill(0);
    // let markerArr = [];
    // let winner = false;
    let thing = null;



    // create cont board that runs addCharacter then checkWinner

    const addCharacter = (divPressed, marker, thing) => {

        if (gameArr[divPressed] === 0) {
            gameArr[divPressed] = divPressed;
            query[divPressed].textContent = marker;
            query[divPressed].classList.add('letter');
            displayController.setMessage(marker);

            // console.log('initial: ' + numOfMoves); // testing
            markerArr[divPressed] = marker;
            numOfMoves++;

            // console.log('after: ' + numOfMoves); // testing
            console.log(' marker array' + markerArr);
            console.log('checking' + thing);
        }
    }

    // function checkEmpty() {
    //     // might not be needed
    // }
    function checkWinner(thing) {

        // [0,1,2]
        // [3,4,5]
        // [6,7,8]

        if (
            // vertical cases
            markerArr[0] === 'X' && markerArr[3] === 'X' && markerArr[9] === 'X' ||
            markerArr[1] === 'X' && markerArr[4] === 'X' && markerArr[7] === 'X' ||
            markerArr[2] === 'X' && markerArr[5] === 'X' && markerArr[8] === 'X' ||
            // horizontal case ||
            markerArr[0] === 'X' && markerArr[1] === 'X' && markerArr[2] === 'X' ||
            markerArr[3] === 'X' && markerArr[4] === 'X' && markerArr[5] === 'X' ||
            markerArr[6] === 'X' && markerArr[7] === 'X' && markerArr[8] === 'X' ||
            // diagonal case ||
            markerArr[0] === 'X' && markerArr[4] === 'X' && markerArr[8] === 'X' ||
            markerArr[2] === 'X' && markerArr[4] === 'X' && markerArr[6] === 'X') {

            console.log('Player X is the Winner!');
            thing = true;
            console.log(thing);
            // return winner;
        }
        if (
            markerArr[0] === 'O' && markerArr[3] === 'O' && markerArr[9] === 'O' ||
            markerArr[1] === 'O' && markerArr[4] === 'O' && markerArr[7] === 'O' ||
            markerArr[2] === 'O' && markerArr[5] === 'O' && markerArr[8] === 'O' ||
            // horizontal case
            markerArr[0] === 'O' && markerArr[1] === 'O' && markerArr[2] === 'O' ||
            markerArr[3] === 'O' && markerArr[4] === 'O' && markerArr[5] === 'O' ||
            markerArr[6] === 'O' && markerArr[7] === 'O' && markerArr[8] === 'O' ||
            // diagonal case
            markerArr[0] === 'O' && markerArr[4] === 'O' && markerArr[8] === 'O' ||
            markerArr[2] === 'O' && markerArr[4] === 'O' && markerArr[6] === 'O') {
            console.log('Player O is the Winner!');
            thing = true;
            console.log(thing);
            // return winner;
        }
        return thing;
    }

    return {
        gameArr,
        addCharacter,
        checkWinner,
        markerArr,
    };
})();

//module
const displayController = (() => {
    // TODO
    console.log('display was run');
    let displayMessage = document.querySelector('.message');
    const setMessage = (marker) => {
        if (marker === 'X') {
            displayMessage.textContent = 'Player X\'s turn';
        }
        else if (marker === 'O') {
            displayMessage.textContent = 'Player O\'s turn';

        }
    }

    return {
        setMessage,
    };
})();

const player = (numOfMoves) => {

    function marker(numOfMoves) {
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