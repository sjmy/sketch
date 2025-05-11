const button = document.querySelector(".button");
const container = document.querySelector(".container");

// Creates new grid given a side length
function createGrid(sideLength) {
    for (r = 0; r < sideLength; r++) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        let rowHeight = 100 / sideLength;
        newRow.style.height = `${rowHeight}%`;
        container.appendChild(newRow);

        for (s = 0; s < sideLength; s++) {
        const newSquare = document.createElement("div");
            newSquare.classList.add("square");
            let squareSide = 100 / sideLength;
            newSquare.style.width = `${squareSide}%`;
            newRow.appendChild(newSquare);
        };
    };
};

//Removes existing grid
function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
};

// Generates random hexadecimal colour
function getNewColor() {
    let symbols = "0123456789ABCDEF";
    let color = "#";

    for (n = 0; n < 6; n++) {
        color += symbols[Math.floor(Math.random() * 16)];
    };

    return color;
};


// Initial grid size
createGrid(16);

// Choose a grid size between 1 and 100 by clicking on the button
button.addEventListener("click", (e) => {
    let sideLength = prompt("How many squares per side? Max 100.");

    while (sideLength < 1 || sideLength > 100) {
        sideLength = prompt("Please choose a number between 1 and 100.")
    };

    removeGrid();
    createGrid(sideLength);
});

// Change background colour of each square when moused over
container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = getNewColor();
});