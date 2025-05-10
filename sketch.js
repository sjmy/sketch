const container = document.querySelector(".container");

for (r = 1; r <= 8; r++) {
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    container.appendChild(newRow);

    for (s = 1; s <= 8; s++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newRow.appendChild(newSquare);
    };
};