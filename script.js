let numOfMoves = 1;

const gameControl = () => { // maybe turn this into module
    // create mini functions for these - maybe move them to game board and call them from gameControl

    // 1 run player and get the marker based off numOfMove 
    // 2 update numOfMove whether the move was valid (+1) or not(nothing)
    // 3 run gameBoard(marker)


    let divPressed = undefined;
    const kamil = player();

    // getting corresponding div
    document.querySelectorAll('.gameSquare').forEach(item => {
        item.addEventListener('click', () => {
            divPressed = item.id
            if (numOfMoves <= 9) {
                gameBoard.addCharacter(divPressed, kamil.marker(numOfMoves));
                console.log(gameBoard.gameArr);
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


    const addCharacter = (divPressed, marker) => {

        if (gameArr[divPressed] === 0) {
            gameArr[divPressed] = divPressed;
            // console.log(query[divPressed]);
            query[divPressed].textContent = marker;
            query[divPressed].classList.add('letter');
            console.log('initial: ' + numOfMoves); // testing
            numOfMoves++;
            console.log('after: ' + numOfMoves); // testing
        }
    }

    function checkEmpty() {
        // might not be needed
    }
    function checkWinner() {
        // TODO
        // create an array which tracks 'x' and 'o' locations => then use switch case to determine winning cases
        // switch case for all winning situations and defualt would be a draw
    }

    return { gameArr, addCharacter, checkWinner };
})(/*divPressed playerTurn*/);// div pressed from player => two player objects so it can either ber 'x' or 'o'

//module
const displayController = (() => {
    // TODO

    return {

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