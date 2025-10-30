# odin-etch-a-sketch
Sketchpad project for The Odin Project. 

This project uses dom manipulation to change a flexbox container with a grid of varying sizes and randomize colors. 

A user is able to draw by holding down on the click button. Originally this used mouseenter but I disliked this due to the lack of control of drawing, now the user needs to input.
The draw function can have issues when the click moves quickly or you click and hold the button without moving a square. something to iterate on at a later time. 

the grid resets based on user command and draws a new grid using the number of squares specified by the user. this is capped at 100 and 640px wide for performance issues.
I will keep the 100 cap, but want to change the code so that the 640px grid snaps to the users device rather than being hardcoded. something to iterate in the future. 

I would also like the darken squares when the mouse enters the square multiple times. 

The dom manipulation for this project felt fairly straightforward after the inital grid set up. the practice repetitions definitely helped here. 
flexbox wasn't too bad for this project since it is all within a 640px grid. 

I would also like to improve the GUI in future versions of this project. 

Overall was fun and much less challenging than the RPS excercise. The linking of JS, CSS and HTML felt natural in this project. 
