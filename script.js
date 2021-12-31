let divPressed = undefined;
let playerTurn = 0; // might not use

const gameControl = () => { // maybe turn this into module

    document.querySelectorAll('.gameSquare').forEach(item => {
        item.addEventListener('click', () => {
            // run player and determine which div was pressed
            divPressed = item.id
            // console.log(divPressed);
            // gameBoard(divPressed);



            // console.log('i was clicked');
            console.log(gameBoard.gameArr);
            gameBoard.addCharacter(divPressed);

            // console.log(gameBoard.addCharacter);

            playerTurn++;// change to after the actuall letter was put on the board
        })
    })

    const btn = document.querySelector('.restart') // restart button
    btn.addEventListener('click', () => {
        //gameBoard.clear  ---- clearing and resetting all data -- 'x' and 'o' in browser, array with elements in them
        // displayController -- back to og message
        // clear player arrays

        // console.log(gameBoard.gameArr);
        // console.log(gameBoard.checkWinner);
    });
    // create a counter to determine whose turn it is where it is restricted by the numbdr of divs or if somebody wins
}
// module
const gameBoard = (()/*divPressed  ,playerTurn*/ => {
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
    const addCharacter = () => {

        if (gameArr[divPressed] === 0) {
            gameArr[divPressed] = divPressed;

            // const x = () => query[divPressed];
            // console.log(query[divPressed]);
            if (divPressed % 2 !== 0) {
                query[divPressed].textContent = 'X';
                query[divPressed].classList.add('letter');

            }
            else {
                // const x = query[divPressed]
                query[divPressed].textContent = 'O';
                query[divPressed].classList.add('letter');
            }

        }

    }
    // how to differentiate from player 'x' to player 'o'
    // 1 in player object use true or false, where we can check in if statement to determine if the character is an 'x' or 'o'
    // 2 create an array where after the character is placed on screen, u add who made their move, so the next character is gonna do it next
    // 3 from player object create something that will identify whose turn it is => it will also send what characcter to place on 
    // the screen => like divPressed



    function checkEmpty() {
        // might not be needed
    }
    function checkWinner() {
        // TODO
        // create an array which tracks 'x' and 'o' locations => then use switch case to determine winning cases
        // switch case for all winning situations and defualt would be a draw
    }



    // function to check if there is a winner

    return { gameArr, addCharacter, checkWinner, };
})(/*divPressed playerTurn*/);// div pressed from player => two player objects so it can either ber 'x' or 'o'

//module
const displayController = (() => {
    // TODO

    return {

    };
})();

// const player //object for both players => will be a factory
// // event listnenr to see which div was pressed => used a variable and passed to game board
//  - get the element id 0-8 an associate it with the array index

// // will have logic to check if that div already has an element


// const gameControl // object to control flow of game => main()




gameControl();