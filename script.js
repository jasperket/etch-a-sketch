const container = document.querySelector('#container');
for(let i = 0; i < 16; i++) {
    const rectangle = document.createElement('div');
    rectangle.classList.add('rectangle');
    for(let i = 0; i < 16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        rectangle.appendChild(square);
    }
    container.appendChild(rectangle);
}