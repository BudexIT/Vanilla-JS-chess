import { Pawns } from './pawns.js';

const pawns = document.querySelectorAll('img');
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

let draggedItem = null;

function pawnStart() {
    draggedItem = this;
    requestAnimationFrame(() => {
        this.style.display = "none";
    })
}

function pawnEnd() {
    requestAnimationFrame(() => {
        this.style.display = "block";
        draggedItem = null;
        // this.removeChild(draggedItem);
    })
}

pawns.forEach(pawn => {
    pawn.addEventListener('dragstart', pawnStart);
    pawn.addEventListener('dragend', pawnEnd);
})

function pawnEntersSquare(e) {
    e.preventDefault();
}

function pawnOverSquare(e) {
    e.preventDefault();
}

function pawnDrop() {
    // jeśli na polu jest już pionek
    if (this.firstChild) {
        // usuń tego pierwszego, aby był tylko drugi
        requestAnimationFrame(() => {this.removeChild(this.firstChild)});
    }
    this.append(draggedItem);
}

squares.forEach(square => {
    square.addEventListener('dragenter', pawnEntersSquare);
    square.addEventListener('dragover', pawnOverSquare);
    square.addEventListener('drop', pawnDrop);
})
