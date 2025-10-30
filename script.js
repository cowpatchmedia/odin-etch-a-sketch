const container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "640px";
container.style.height = "640px";

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.style.width = "40px";
    square.style.height = "40px";
    square.style.border = "1px solid black";
    container.appendChild(square);
}
