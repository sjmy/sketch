const container = document.querySelector(".container");

for (r = 0; r < 16; r++) {
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    let rowHeight = 100 / 16;
    newRow.style.height = `${rowHeight}%`
    container.appendChild(newRow);

    for (s = 0; s < 16; s++) {
       const newSquare = document.createElement("div");
        newSquare.classList.add("square");
        let sideWidth = 100 / 16;
        newSquare.style.width = `${sideWidth}%`
        newRow.appendChild(newSquare);
    };
};

const square = document.querySelector(".square");

square.addEventListener("mouseover", (e) => {
    let target = e.target;
    target.style.backgroundColor = "blue";
});