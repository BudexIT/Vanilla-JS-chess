import { Pawns } from './pawns.js';

const pawns = document.querySelectorAll('img');
const chessboard = document.getElementById('chessboard');
const squares = document.querySelectorAll('.square');

pawns.forEach(pawn => {

    /*
        If pawns data-pawn-color is set to "black",
        then color of pawn is inverted to black
    */

    const color = pawn.getAttribute('data-pawn-color');
    
    if (color == "black") {
        pawn.style.filter = "invert(1)";
    }
});

/* 
    Dragging and placing pawn mechanics
*/

squares.forEach(square => {
    square.addEventListener('dragover', dragPawnOver);
    square.addEventListener('dragenter', dragPawnEnter);
    square.addEventListener('dragdrop', () => {
        square.append(pawns[0]);
        alert('kurwaaa');
    });
})

function dragPawnOver(e) {
    e.preventDefault();
    console.log(squares[4]);
}

function dragPawnEnter(e) {
    e.preventDefault();
    console.log('enters');
}