
(function main() {
    window.addEventListener('DOMContentLoaded', applyScale);
    window.addEventListener('resize', applyScale);
    shipPlacementSequence();
})()


/*
Game Screen size logic
*/

const GAME_WIDTH = 256;
const GAME_HEIGHT = 240;

function calculateScale() {
    const availableWidth = window.innerWidth;
    const availableHeight = window.innerHeight;

    const scaleX = Math.floor(availableWidth / GAME_WIDTH);
    const scaleY = Math.floor(availableHeight / GAME_HEIGHT);

    let scale = Math.min(scaleX, scaleY);

    scale = Math.max(scale, 1);

    return scale;

}
// apply scale
function applyScale() {
    const scale = calculateScale();
    const gameContainer = document.getElementById('game-container')

    gameContainer.style.width = `${GAME_WIDTH * scale}px`;
    gameContainer.style.height = `${GAME_HEIGHT * scale}px`;

    document.documentElement.style.setProperty('--pixel-scale', scale);

    // 7/16/2026, 1:15pm
}



const grid = document.getElementById('grid-container');

['A','B','C','D','E','F','G','H','I','J'].forEach((l) => {
    for(let col = 1; col <= 10; col++) {
        const tile = document.createElement('div');
        tile.id = `${l}${col}`;
        tile.classList.add("tile")
        grid.appendChild(tile);
    }
})

console.log('gregaor');

/*
drag and drop 
*/

function onPointerDown(e) {
    const ship = e.currentTarget;
    ship.setPointerCapture(e.pointerId);

    const rect = ship.getBoundingClientRect();

    drag = {
        width: rect.width,
        height: rect.height,

    }

    ship.classList.add('dragging');
    ship.style.width = rect.width + 'px';
    ship.style.width = rect.height + 'px';
}

function onPointerMove(e) {
    if (!drag) return;
    drag.ship.style.left = e.clientX - (drag.width / 2) + 'px'
    drag.ship.style.top = e.clientY - drag.halfHeight + 'px'
}



function shipPlacementSequence(){
    

    const battleship = document.getElementById('battleship')
    const carrier = document.getElementById('carrier')

    const startingShips = [
        { id: 'carrier', orientation: 'vertical'},
        { id: 'battleship', orientation: 'vertical'},
        { id: 'cruiser', orientation: 'vertical'},
        { id: 'submarine', orientation: 'vertical'},
        { id: 'destroyer', orientation: 'vertical'},
    ]


    
}