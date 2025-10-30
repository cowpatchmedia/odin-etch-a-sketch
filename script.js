// initialize the variables for our grid using flexbox.
const container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "640px";
container.style.height = "640px";

// create reset button for grid with prompt for new grid
const resetButton = document.createElement("button");
resetButton.textContent = "Reset?";
resetButton.style.bottom = "20px";
resetButton.style.padding = "10px 20px";
resetButton.style.fontSize = "16px";
document.querySelector("#buttonContainer").appendChild(resetButton); // append to html file

function createGrid(size) {
    container.innerHTML="";
    const gridSize = 640 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${gridSize}px`;
        square.style.height = `${gridSize}px`;
        square.style.border = "1px solid black";

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });
        container.appendChild(square);
    }
}
//initialize 16x16 grid
createGrid(16);

// add event listener for button
resetButton.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter new grid size up to 100 (e.g. 16, 50, 100)"), 10);
    
    if (!newSize || newSize <1) return;
    if (newSize>100) newSize = 100;

    createGrid(newSize);

});

