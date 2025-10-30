// initialize the variables for our grid using flexbox and specified html container.
const container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "640px";
container.style.height = "640px";

// create reset button for grid with prompt for new grid at specified html location. 
const resetButton = document.createElement("button");
resetButton.textContent = "Reset?";
resetButton.style.bottom = "20px";
resetButton.style.padding = "10px 20px";
resetButton.style.fontSize = "16px";
document.querySelector("#buttonContainer").appendChild(resetButton); // append to html file

//globalize variables allowing us to drag our mouse on sketchpad
let isMouseDown = false;
document.body.addEventListener("mousedown", () => isMouseDown = true);
document.body.addEventListener("mouseup", () => isMouseDown = false);

//function to randomize rgb colors in the grid
function getRandomColor (){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// function to create grid that is 640px wide. something to think about changing this size based on device
function createGrid(size) {
    container.innerHTML=""; //clear dom manipulation
    const gridSize = 640 / size;

    // creates grid based on user input
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${gridSize}px`;
        square.style.height = `${gridSize}px`;
        square.style.border = "1px solid black";
        
        //changes square to color. 
        square.addEventListener("click", () => {
            square.style.backgroundColor = getRandomColor();
        });

        square.addEventListener("mouseenter", () => {
            if (isMouseDown) {
                square.style.backgroundColor = getRandomColor();
            }
         });
        container.appendChild(square);
    }
}
//initialize 16x16 grid
createGrid(16);

// add event listener for reset button
resetButton.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter new grid size up to 100 (e.g. 16, 50, 100)"), 10);
    
    if (!newSize || newSize <1) return;
    if (newSize>100) newSize = 100;

    createGrid(newSize);

});

