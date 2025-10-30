// initialize the variables for our grid using flexbox.
const container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "640px";
container.style.height = "640px";

// creates a 16x16 grid for our sketchpad.
for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square"); //add reference so grid can reset
    square.style.width = "40px";
    square.style.height = "40px";
    square.style.border = "1px solid black";
    container.appendChild(square);


    //change square color when mouse enters
    square.addEventListener("mouseenter",() => {
        square.style.backgroundColor = "black";
    });

    container.appendChild(square);
};

// create reset button for grid with prompt for new grid
const resetButton = document.createElement("button");
resetButton.textContent = "Reset?";
resetButton.style.bottom = "20px";
resetButton.style.left = "50%";
resetButton.style.transform = "translateX(-50%)";
resetButton.style.padding = "10px 20px";
resetButton.style.fontSize = "16px";

// add event listener for button
resetButton.addEventListener("click", () =>{
    // prompt("What grid size would you like to choose?");
    // const squares = document.querySelectorAll(".square");
    // squares.forEach(square => {
    //     square.style.backgroundColor = "white";
    // })
    let newSize = parseInt(prompt("Enter new grid size up to 100 (e.g. 16, 50, 100)"), 10);
    if (!newSize || newSize <1) return;

    container.innerHTML="";

    const gridSize = 640 / newSize;

    for (let i = 0; i < newSize * newSize; i++) {
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
});

document.querySelector("#buttonContainer").appendChild(resetButton);
