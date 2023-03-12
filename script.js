let blackness = 100;
makeGrid(16);
function makeGrid(side) {
    const container = document.querySelector('#container');
    const rectangles = document.querySelectorAll('.rectangle');
    if(rectangles.length !== 0) {
        rectangles.forEach(rect => {
            container.removeChild(rect);
        })
    }
    for(let i = 0; i < side; i++) {
        const rectangle = document.createElement('div');
        rectangle.classList.add('rectangle');
        rectangle.style.height = 100/side + '%';
        for(let i = 0; i < side; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            rectangle.appendChild(square);
        }
        container.appendChild(rectangle);
    }
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            if(blackness <= 0) {
                blackness = 100;
            }
            const h = Math.floor((Math.random() * 255) +1);
            const s = Math.floor((Math.random() * 100) +1);
            square.style.backgroundColor = `hsl(${h} ${s}% ${blackness}%)`;
            blackness -= 10;
        })
    })
}

const newGrid = document.querySelector('button');
newGrid.addEventListener('click', () => {
    const side = prompt('What is the length of the new grid?');
    if(side > 0 && side < 100) {
        makeGrid(side);
    } else {
        alert('Invalid value for length!');
    }
})
