// VAriables for JS Canvas Set Up
var canvas;
var ctx;
var w = window.innerWidth;
var h = window.innerHeight;

// Variables keeping track of cursor position
var cursorX = 0;
var cursorY = 0;

// Object holding all drawn letters
var allCharacters = [];

// Object holding all character colors
const colors = [
    {name: 'red', color: 0},
    {name: "green", color: 120},
    {name: "blue", color: 240},
    {name: "purple", color: 280},
    {name: "orange", color: 30},
];

// Array holding the spaces which the names of the colors take in the color menu
var colorDivs = [];

// Variable indicating which color is currently selected
var currentColorSelection = 0;

// Variable indicating which scale factor is currently selected
var currentScaleFactor = 1;

// Variable controlling the accellerating of letter falling speed
const gravitySpeed = 0.2;

// Object holding all letter dimensions
var svgDimensions = {
    a: {width: 23.19, height: 24.24, halfWidth: 23.19/2, halfHeight: 24.24/2},
    b: {width: 27.31, height: 36.46, halfWidth: 27.31/2, halfHeight: 36.46/2},
    c: {width: 20.69, height: 24.24, halfWidth: 20.69/2, halfHeight: 24.24/2},
    d: {width: 27.17, height: 36.58, halfWidth: 27.17/2, halfHeight: 36.58/2},
    e: {width: 21.65, height: 24.24, halfWidth: 21.65/2, halfHeight: 24.24/2},
    f: {width: 27.31, height: 36.46, halfWidth: 27.31/2, halfHeight: 36.46/2},
    g: {width: 25.44, height: 35.33, halfWidth: 25.44/2, halfHeight: 35.33/2},
    h: {width: 27.79, height: 36.15, halfWidth: 27.79/2, halfHeight: 36.15/2},
    i: {width: 13.54, height: 35.19, halfWidth: 13.54/2, halfHeight: 35.19/2},
    j: {width: 15.75, height: 36.46, halfWidth: 15.75/2, halfHeight: 36.46/2},
    k: {width: 27.94, height: 36.15, halfWidth: 27.31/2, halfHeight: 36.15/2},
    l: {width: 13.63, height: 36.15, halfWidth: 13.63/2, halfHeight: 36.15/2},
    m: {width: 41.43, height: 23.86, halfWidth: 41.43/2, halfHeight: 23.86/2},
    n: {width: 27.70, height: 23.86, halfWidth: 27.70/2, halfHeight: 23.86/2},
    o: {width: 24.43, height: 24.24, halfWidth: 24.43/2, halfHeight: 24.24/2},
    p: {width: 27.22, height: 33.94, halfWidth: 27.22/2, halfHeight: 33.94/2},
    q: {width: 26.55, height: 33.94, halfWidth: 26.55/2, halfHeight: 33.94/2},
    r: {width: 21.41, height: 23.86, halfWidth: 21.41/2, halfHeight: 23.86/2},
    s: {width: 19.30, height: 24.24, halfWidth: 19.30/2, halfHeight: 24.24/2},
    t: {width: 16.46, height: 31.87, halfWidth: 16.46/2, halfHeight: 31.87/2},
    u: {width: 28.18, height: 23.47, halfWidth: 28.18/2, halfHeight: 23.47/2},
    v: {width: 26.79, height: 23.47, halfWidth: 26.79/2, halfHeight: 23.47/2},
    w: {width: 39.27, height: 23.47, halfWidth: 39.27/2, halfHeight: 23.47/2},    
    x: {width: 25.92, height: 23.09, halfWidth: 25.92/2, halfHeight: 23.09/2},
    y: {width: 26.35, height: 33.60, halfWidth: 26.35/2, halfHeight: 33.60/2},
    z: {width: 21.25, height: 23.09, halfWidth: 21.25/2, halfHeight: 23.09/2},
    aCapital: {width: 37.97, height: 33.51, halfWidth: 37.97/2, halfHeight: 33.51/2},
    bCapital: {width: 30.05, height: 33.03, halfWidth: 30.05/2, halfHeight: 33.03/2},
    cCapital: {width: 29.92, height: 33.79, halfWidth: 29.92/2, halfHeight: 33.79/2},
    dCapital: {width: 34.56, height: 33.03, halfWidth: 34.56/2, halfHeight: 33.03/2},
    eCapital: {width: 30.48, height: 33.03, halfWidth: 30.48/2, halfHeight: 33.03/2},
    fCapital: {width: 28.90, height: 33.03, halfWidth: 28.90/2, halfHeight: 33.03/2},
    gCapital: {width: 33.36, height: 33.79, halfWidth: 33.36/2, halfHeight: 33.79/2},
    hCapital: {width: 37.54, height: 33.03, halfWidth: 37.54/2, halfHeight: 33.03/2},
    iCapital: {width: 16.75, height: 33.03, halfWidth: 16.75/2, halfHeight: 33.03/2},
    jCapital: {width: 22.32, height: 42.10, halfWidth: 22.32/2, halfHeight: 42.10/2},
    kCapital: {width: 35.09, height: 33.03, halfWidth: 35.09/2, halfHeight: 33.03/2},
    lCapital: {width: 29.00, height: 33.03, halfWidth: 29.00/2, halfHeight: 33.03/2},
    mCapital: {width: 42.82, height: 33.03, halfWidth: 42.82/2, halfHeight: 33.03/2},
    nCapital: {width: 34.80, height: 33.51, halfWidth: 34.80/2, halfHeight: 33.51/2},
    oCapital: {width: 34.56, height: 33.79, halfWidth: 34.56/2, halfHeight: 33.79/2},
    pCapital: {width: 29.91, height: 33.03, halfWidth: 29.91/2, halfHeight: 33.03/2},
    qCapital: {width: 34.56, height: 42.58, halfWidth: 34.56/2, halfHeight: 42.58/2},
    rCapital: {width: 33.65, height: 33.03, halfWidth: 33.65/2, halfHeight: 33.03/2},
    sCapital: {width: 25.11, height: 33.79, halfWidth: 25.11/2, halfHeight: 33.79/2},
    tCapital: {width: 31.44, height: 33.03, halfWidth: 31.44/2, halfHeight: 33.03/2},
    uCapital: {width: 34.87, height: 33.41, halfWidth: 34.87/2, halfHeight: 33.41/2},
    vCapital: {width: 36.29, height: 33.51, halfWidth: 36.29/2, halfHeight: 33.51/2},
    wCapital: {width: 51.44, height: 33.51, halfWidth: 51.44/2, halfHeight: 33.51/2},
    xCapital: {width: 34.32, height: 33.03, halfWidth: 34.32/2, halfHeight: 33.03/2},
    yCapital: {width: 34.90, height: 33.03, halfWidth: 34.90/2, halfHeight: 33.03/2},
    zCapital: {width: 29.14, height: 33.03, halfWidth: 29.14/2, halfHeight: 33.03/2},
}

// Variable checking if letter key is currently pressed
var iskeyDown = false;

// Event listener for when a key is pressed
$(document).on('keypress', function(event){
    // Checks if a key is currently pressed  
    if(iskeyDown === false){
        // Runs the assigned code for the pressed key
        keyPush(event.key);
        // Signals that a key is currently pressed
        iskeyDown = true;
    }
    
});

// Event listener for when a key is released
$(document).on('keyup', function(){
    // Signals that a a key is currently pressed
    iskeyDown = false;
})

// Event listener for when the cursor is moved
$(document).on('mousemove', function(event){
    // Tracks the current position of the cursor
    cursorX = event.clientX;
    cursorY = event.clientY;

    // Centers the cursor-pointer around the cursor
    centerPointerCircle(cursorX, cursorY);
});



// Hides cursor pointer until mouse is moved
$('.cursor-pointer').css({  
    left: window.innerWidth + 'px',
    top: window.innerHeight + 'px'
});

// Sets up the canvas
setUpCanvas();

// Runs the animation loop
animationLoop();

// Event listener that waits for the document to be fully loaded
$(document).ready(function() {
    // Initializes the color selector menu
    initColorSelector();

    // Event listener that listens for clicks outside of the color selector menu
    $(document).on('click', function(event) {
        // Checks if the click is outside the expanded color selector menu
        if (!$(event.target).closest('.color-selector').length) {
            // Closes the expanded color selection menu
            closeColorSelector();
        }
    });
});








// Function for Running the animation loop on JS Canvas
function animationLoop(){
    // Clears the canvas
    clear();

    // Draws all the generated letters on the canvas
    for(var i=0; i < allCharacters.length; i++){
        drawSvgPath(allCharacters[i], svgDimensions);
    }
    
    // Updates the position of all the generated letters
    updateData(allCharacters, svgDimensions);

    // Repeats the animationLoop functiion
    requestAnimationFrame(animationLoop);
}

// Function for updating the position of all generated letters
function updateData(arr, arrDimensions){

    // Repeats function for each of the generated letters
    for(var i = 0; i < arr.length; i++){

        // Boolean that indicates whether or not the function can be moved
        let canMove = true;

        // Variable that indicates whether or not the letter should be shifted, to the left or the right
        let horizontalMoveDirection = 0; 

        // Checks if the letter reaches the bottom of the viewport
        if (arr[i].y + arrDimensions[arr[i].id].halfHeight >= window.innerHeight) {
            // Stops the letter from moving
            canMove = false;
        }

        // Checks for intersections between letters
        if(canMove){
            // Runs the code for each generated letter
            for (var j = 0; j < arr.length; j++) {
                // Checks if the letter intersects with any other generated letter
                if (i !== j && intersects(arr[i], arr[j], arrDimensions)) {
                    // Calculates the overlapped section between the two letters 
                    const overlap = calculateOverlap(arr[i], arr[j], arrDimensions);
                    // Stops movement of the letter if overlapped section is greater than half of the intersected letter's width
                    if (overlap > arrDimensions[arr[i].id].halfWidth) {
                        canMove = false;
                        break;
                    } else {
                        // Shifts and tilts the letter if overlapped section is not greater than half of the intersected letter's width
                        if (arr[i].x < arr[j].x) {
                            // Shifts and tilts to the left
                            horizontalMoveDirection = -2; 
                        } else {
                            // Shifts and tilts to the right
                            horizontalMoveDirection = 2;
                        }
                    }
                }
            }
        }

        // Moves the letter if no intersection is detected and letter is not at the bottom of the viewport
        if (canMove) {
            // Moves the letter downward
            arr[i].y += arr[i].moveSpeed;
            // Accelerates the falling speed of the letter
            arr[i].moveSpeed += gravitySpeed;

            // Tilts the letter 
            arr[i].horizontalMoveDirection = horizontalMoveDirection; 
            // Shifts the horizontal position of the letter
            if (horizontalMoveDirection !== 0) {
                arr[i].x += horizontalMoveDirection;
            }

        } else {
            // Resets horizontal movement if letter is not moving
            arr[i].horizontalMoveDirection = 0; 
        }
    }
}

// Function to calculate the overlapped section of the passed letters
function calculateOverlap(svg1, svg2, dimensions) {
    
    // Defines the area of the first letter
    const rect1 = {
        x: svg1.x - (dimensions[svg1.id].halfWidth * svg1.scaleFactor),
        y: svg1.y - (dimensions[svg1.id].halfHeight * svg1.scaleFactor),
        rw: dimensions[svg1.id].width * svg1.scaleFactor,
        rh: dimensions[svg1.id].height * svg1.scaleFactor,
    };
    // Defines the area of the second letter
    const rect2 = {
        x: svg2.x - dimensions[svg2.id].halfWidth * svg2.scaleFactor,
        y: svg2.y - dimensions[svg2.id].halfHeight * svg2.scaleFactor,
        rw: dimensions[svg2.id].width * svg2.scaleFactor,
        rh: dimensions[svg2.id].height * svg2.scaleFactor,
    };

    // Determines which of the two left sides has a larger value
    const left = Math.max(rect1.x, rect2.x);
    // Determines which of the two right sides has a smaller value
    const right = Math.min(rect1.x + rect1.rw, rect2.x + rect2.rw);
    // Returns the width of the overlapped area
    return right - left; 
}

// Function to calculate whether the passed letters are intersecting 
function intersects(svg1, svg2, dimensions) {

    // Defines the area of the first letter
    const rect1 = {
        x: svg1.x - (dimensions[svg1.id].halfWidth * svg1.scaleFactor),
        y: svg1.y - (dimensions[svg1.id].halfHeight * svg1.scaleFactor),
        rw: dimensions[svg1.id].width * svg1.scaleFactor,
        rh: dimensions[svg1.id].height * svg1.scaleFactor,
    };
    // Defines the area of the second letter
    const rect2 = {
        x: svg2.x - dimensions[svg2.id].halfWidth * svg2.scaleFactor,
        y: svg2.y - dimensions[svg2.id].halfHeight * svg2.scaleFactor,
        rw: dimensions[svg2.id].width * svg2.scaleFactor,
        rh: dimensions[svg2.id].height * svg2.scaleFactor,
    };

    // Returns true if letters are intersected
    return !(rect2.x > rect1.x + rect1.rw ||
             rect2.x + rect2.rw < rect1.x ||
             rect2.y > rect1.y + rect1.rh ||
             rect2.y + rect2.rh < rect1.y);
}

// Draws the passed letter
function drawSvgPath(o, dimensions) {
    // Defines the path of the letter that will be drawn
    const path = new Path2D(o.svgPathData);

    // Calculates the center offset, so that the letter is placed at the center of the indicated position
    const offsetX = (dimensions[o.id].width * o.scaleFactor) / 2;
    const offsetY = (dimensions[o.id].height * o.scaleFactor)  / 2;

    // Saves current state of the canvas prior to movement of the origin point and rotation
    ctx.save();

    // Centers the letter around the indicated position
    ctx.translate(o.x - offsetX, o.y - offsetY);

    // Indicates what angle the letter should be drawn at, if there is a tilt direction
    if (o.horizontalMoveDirection !== 0) {
        o.angle += o.horizontalMoveDirection * Math.PI/32;
        
    }
    
    // Rotates the letter
    ctx.rotate(o.angle);

    // Scales the letter
    const scaleX = o.scaleFactor; 
    const scaleY = o.scaleFactor; 
    ctx.scale(scaleX, scaleY);

    // Fills the letter with the indicated color
    ctx.fillStyle = "hsla(" + o.color + ", 80%, 50%, 0.7)";
    ctx.fill(path);

    // Restores the original state of the canvas
    ctx.restore();
}

// Function to handle assignment of properties for pressed keys to be drawn. Also handles adjustment of scaleFactor on number key press
async function keyPush(key){
    if(key === "1"){
        currentScaleFactor = 0.25;
        $('.cursor-pointer').css({width: '0.75rem', height: '0.75rem'});
        centerPointerCircle(cursorX, cursorY);
        
    }
    else if(key === "2"){
        currentScaleFactor = 0.5;
        $('.cursor-pointer').css({width: '1.5rem', height: '1.5rem'});
        centerPointerCircle(cursorX, cursorY);
    }
    else if(key === "3"){
        currentScaleFactor = 0.75;
        $('.cursor-pointer').css({width: '2.25rem', height: '2.25rem'});
        centerPointerCircle(cursorX, cursorY);
        
    }
    else if(key === "4"){
        currentScaleFactor = 1;
        $('.cursor-pointer').css({width: '3rem', height: '3rem'});
        centerPointerCircle(cursorX, cursorY);
    }
    else if(key === "5"){
        currentScaleFactor = 2;
        $('.cursor-pointer').css({width: '6rem', height: '6rem'});
        centerPointerCircle(cursorX, cursorY);
    }
    else if(key === "6"){
        currentScaleFactor = 3;
        $('.cursor-pointer').css({width: '9.5rem', height: '9.5rem'});
        centerPointerCircle(cursorX, cursorY);
    }
    else if(key === "7"){
        currentScaleFactor = 4;
        $('.cursor-pointer').css({width: '12.5rem', height: '12.5rem'});
        centerPointerCircle(cursorX, cursorY);
    }
    else if(key === "8"){
        currentScaleFactor = 5;
        $('.cursor-pointer').css({width: '16rem', height: '16rem'});
        centerPointerCircle(cursorX, cursorY);
    }
    else if(key === "9"){
        currentScaleFactor = 6;
        $('.cursor-pointer').css({width: '18.5rem', height: '18.5rem'});
        centerPointerCircle(cursorX, cursorY);
    }
    else if(key === "a"){
        const svgPathData = "M6.05,24.24c-3.5,0-6.05-2.11-6.05-5.38,0-4.18,3.12-6.19,9.55-7.34l3.94-.72v-3.41c0-3.65-1.87-4.46-5.52-4.46-1.39,0-2.35.24-2.93.53v.19c1.2.34,2.02,1.58,2.02,2.93,0,1.63-1.34,2.83-3.12,2.83-1.97,0-3.26-1.44-3.26-3.46C.67,1.82,6.05,0,10.42,0c6.19,0,9.55,2.4,9.55,10.8v8.21c0,1.49.48,1.68,3.22,1.87v1.68c-1.06.67-2.64,1.58-4.9,1.58-2.93,0-4.8-1.58-4.8-4.32-1.49,2.11-4.22,4.42-7.44,4.42ZM8.98,20.35c1.82,0,3.26-.96,4.51-2.54v-5.23l-3.26,1.15c-2.93,1.01-3.7,1.92-3.7,3.94s.86,2.69,2.45,2.69Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "a",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "b"){
        const svgPathData = "M16.47,36.53c-3.02,0-6.1-1.15-8.59-3.84l-2.45,3.46h-1.68V6.29l-3.75-1.73v-1.3L8.74,0h1.49v12.34l-1.06,5.62.1.05c2.26-3.17,5.04-5.71,8.98-5.71,4.85,0,9.07,4.56,9.07,12,0,7.97-5.04,12.24-10.85,12.24ZM10.23,19.44v12.53c1.39,1.15,2.74,1.78,4.51,1.78,1.58,0,2.88-.48,3.75-1.34,1.1-1.2,1.68-3.89,1.68-8.11,0-3.7-.48-6.19-1.54-7.2-.72-.67-1.87-.91-2.78-.91-2.54,0-3.98,1.39-5.62,3.26Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "b",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "c"){
        const svgPathData = "M11.76,24.24C3.89,24.24,0,18.24,0,12.19S4.51,0,12.38,0c4.94,0,8.3,2.16,8.3,6.1,0,1.73-1.25,3.5-3.41,3.5-1.87,0-3.36-1.39-3.36-3.17,0-1.68,1.01-2.74,2.26-3.17v-.19c-.53-.24-1.44-.48-2.98-.48-3.7,0-6.05,1.49-6.05,8.98s2.59,9.17,6.62,9.17c2.4,0,3.94-.53,5.76-1.15l.82,1.58c-2.11,1.63-4.8,3.07-8.59,3.07Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "c",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "d"){
        const svgPathData = "M9.6,36.58c-5.38,0-9.6-4.51-9.6-12.19s4.99-12.05,10.66-12.05c2.74,0,4.8,1.06,6.38,2.69V6.33l-3.79-1.73v-1.3L21.99.04h1.54v30.77l3.65,1.3v1.39l-8.35,2.93h-1.44l.72-5.47-.1-.05c-2.26,3.6-4.9,5.66-8.4,5.66ZM11.33,33.26c2.59,0,4.27-1.82,5.71-3.65v-12.24c-1.3-1.06-2.74-1.68-4.75-1.68-1.54,0-2.69.48-3.5,1.39-1.1,1.2-1.63,3.84-1.63,7.78s.67,6.48,1.73,7.49c.77.67,1.58.91,2.45.91Z"
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "d",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "e"){
        const svgPathData = "M11.28,24.24C3.65,24.24,0,18.91,0,12.43,0,5.52,4.75,0,11.57,0c5.57,0,9.84,3.46,10.08,11.81H7.01v.05c0,7.01,1.63,8.79,6.24,8.79,2.59,0,4.56-.58,6.53-1.34l.82,1.54c-2.16,1.78-5.38,3.41-9.31,3.41ZM11.52,2.5c-2.4,0-4.08.96-4.46,6.72h8.02c-.24-5.28-1.06-6.72-3.55-6.72Z"
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "e",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "f"){
        const svgPathData = "M0,16.66v-1.63l3.84-1.39v-2.26C3.84,2.54,9.6,0,14.07,0s7.34,2.45,7.34,5.9c0,2.02-1.44,3.55-3.36,3.55s-3.17-1.34-3.17-2.88c0-1.92,1.15-3.02,2.69-3.22v-.19c-.38-.29-1.15-.62-2.45-.62-3.31,0-4.8,1.49-4.8,5.9v4.99h5.76v3.22h-5.76v17.47h4.37v2.4H.48v-2.4h3.36v-17.47H0Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "f",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "g"){
        
        const svgPathData = "M10.8,35.33c-5.86,0-10.8-2.3-10.8-6.1,0-2.4,1.87-3.98,4.66-4.85-2.11-.72-2.93-1.92-2.93-3.75,0-2.5,1.97-4.27,3.65-5.52-2.35-1.49-3.75-3.79-3.75-6.38C1.63,4.61,5.38.96,11.04.96s6.91,3.07,10.13,3.07v-.24c-.53-.34-.82-.91-.82-1.63,0-1.06.77-2.16,2.35-2.16s2.74,1.34,2.74,2.74c0,2.16-1.49,3.22-3.17,3.22-1.39,0-2.59-.29-3.55-.86l-.14.19c.91.91,1.87,1.92,1.87,4.03,0,3.65-3.7,7.3-9.41,7.3-1.58,0-3.02-.29-4.27-.82-.43.67-.86,1.39-.86,2.21,0,1.25.77,1.34,8.74,1.73,6.14.34,9.02,2.59,9.02,6.14,0,6.58-5.86,9.46-12.87,9.46ZM12.91,25.25c-2.59,0-4.66-.14-6.24-.38-.96,1.15-1.49,2.3-1.49,4.08,0,2.06.91,3.79,5.42,3.79,6.34,0,7.92-1.73,7.92-4.51,0-2.5-.96-2.98-5.62-2.98ZM11.04,14.59c2.5,0,3.22-1.06,3.22-5.86s-.72-5.57-3.22-5.57-3.17.82-3.17,5.57.72,5.86,3.17,5.86Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "g",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "h"){
        const svgPathData = "M.48,36.15v-2.4h3.26V6.29l-3.74-1.73v-1.3L8.74,0h1.49v12.34l-.96,5.71.1.05c2.54-3.36,5.28-5.81,8.98-5.81,4.27,0,6.67,3.22,6.67,7.83v13.63h2.78v2.4h-11.81v-2.4h2.54v-14.21c0-2.16-.77-2.78-2.69-2.78-2.02,0-3.65.77-5.62,2.64v14.35h2.59v2.4H.48Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "h",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "i"){
        const svgPathData = "M.38,35.19v-2.4h3.5v-14.88l-3.89-1.73v-1.3l8.88-3.26h1.49v21.17h3.17v2.4H.38ZM7.01,8.06c-2.21,0-4.03-2.02-4.03-4.03S4.8,0,7.01,0s4.03,2.02,4.03,4.03-1.82,4.03-4.03,4.03Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "i",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "j"){
        const svgPathData = "M6.53,45.7c-4.32,0-6.53-2.06-6.53-4.46,0-1.82,1.39-3.12,3.07-3.12s2.88,1.1,2.88,2.78c0,.96-.34,1.73-1.25,2.21v.19c.1.05.53.14,1.01.14,2.06,0,2.93-1.25,2.93-4.37v-21.17l-3.94-1.73v-1.3l8.88-3.26h1.54v23.67c0,7.83-4.22,10.42-8.59,10.42ZM11.71,8.06c-2.21,0-4.03-2.02-4.03-4.03S9.5,0,11.71,0s4.03,2.02,4.03,4.03-1.82,4.03-4.03,4.03Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "j",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "k"){
        const svgPathData = "M15.27,36.15v-2.4h2.64l-5.57-8.26h-2.11v8.26h2.59v2.4H.48v-2.4h3.26V6.34l-3.74-1.82v-1.15L8.74,0h1.49v23.09h2.45l6.14-7.68h-3.02v-2.35h10.56v2.35h-2.88l-6.67,6.48,8.54,11.86h2.59v2.4h-12.67Z"
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "k",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });

    }
    else if(key === "l"){
        const svgPathData = "M.48,36.15v-2.4h3.5V6.29l-3.98-1.73v-1.3L8.98,0h1.49v33.75h3.17v2.4H.48Z"
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "l",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "m"){
        const svgPathData = "M.38,23.86v-2.4h3.26V6.58l-3.65-1.73v-1.3L8.45.29h1.39l-.67,5.52.1.05C11.71,2.74,14.3,0,17.81,0s5.23,2.06,6.14,5.18c2.45-3.02,4.99-5.18,8.11-5.18,4.18,0,6.58,3.17,6.58,7.78v13.68h2.78v2.4h-11.67v-2.4h2.4V7.15c0-2.06-.82-2.69-2.69-2.69-1.54,0-3.12.72-5.09,2.16v14.83h2.45v2.4h-11.33v-2.4h2.4V7.15c0-2.06-.82-2.69-2.69-2.69-1.73,0-3.17.82-5.09,2.64v14.35h2.45v2.4H.38Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "m",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "n"){
        const svgPathData = "M.38,23.86v-2.4h3.26V6.58l-3.65-1.73v-1.3L8.45.29h1.39l-.62,5.47.1.05C11.86,2.45,14.54,0,18.24,0c4.27,0,6.67,3.07,6.67,7.82v13.63h2.78v2.4h-11.81v-2.4h2.54V7.25c0-2.16-.77-2.78-2.69-2.78-2.02,0-3.65.77-5.62,2.64v14.35h2.59v2.4H.38Z"
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "n",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "o"){
        const svgPathData = "M12.24,24.24C5.14,24.24,0,18.24,0,12.1S5.14,0,12.24,0s12.19,5.95,12.19,12.1-5.09,12.14-12.19,12.14ZM12.24,21.65c2.93,0,5.04-1.44,5.04-9.55S15.12,2.59,12.24,2.59s-5.09,1.3-5.09,9.5,2.16,9.55,5.09,9.55Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "o",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "p"){
        const svgPathData = "M.38,33.94v-2.4h3.26V6.58l-3.65-1.73v-1.3L8.45.29h1.39l-.72,5.38.1.05C11.52,2.59,14.26,0,18.15,0c4.9,0,9.07,4.56,9.07,12,0,7.97-4.99,12.24-10.8,12.24-2.45,0-4.61-.96-6.29-2.59v9.89h4.13v2.4H.38ZM10.13,7.06v12.62c1.25,1.01,2.69,1.78,4.51,1.78,1.58,0,2.93-.43,3.79-1.3,1.1-1.2,1.63-3.94,1.63-8.16,0-3.7-.43-6.14-1.49-7.15-.77-.67-1.87-.91-2.83-.91-2.54,0-3.94,1.34-5.62,3.12Z"
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "p",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "q"){
        const svgPathData = "M13.44,33.94v-2.4h3.5v-7.06l1.06-5.76-.1-.05c-2.21,3.5-4.9,5.57-8.45,5.57C4.13,24.24-.1,19.78-.1,12.1S4.9,0,10.66,0c3.22,0,6,1.2,8.5,4.22l2.59-3.94h1.68v31.25h3.12v2.4h-13.11ZM11.18,20.83c2.59,0,4.22-1.68,5.76-3.7V5.04c-1.44-1.15-2.88-1.73-4.75-1.73-1.44,0-2.64.43-3.5,1.3-1.1,1.2-1.63,3.84-1.63,8.11,0,3.7.62,6.24,1.73,7.25.72.67,1.58.86,2.4.86Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "q",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "r"){
        const svgPathData = "M.38,23.86v-2.4h3.31V6.58l-3.7-1.73v-1.3L8.45.29h1.39l-.72,5.95.1.05C11.23,2.35,14.02,0,16.99,0c2.64,0,4.42,1.92,4.42,4.22s-1.68,4.08-3.7,4.08c-2.21,0-3.36-1.44-3.36-3.12,0-.82.38-1.34.67-1.68l-.05-.14c-1.54.24-3.31,1.92-4.8,4.46v13.63h3.89v2.4H.38Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "r",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "s"){
        const svgPathData = "M10.46,24.24c-3.41,0-5.62-1.1-7.3-2.45l-.82,2.06H.62l-.62-8.35,1.39-.34c2.88,4.9,5.09,6.53,8.83,6.53,2.88,0,3.94-1.25,3.94-2.88,0-2.06-1.44-2.74-5.57-3.94C2.06,13.01.38,10.42.38,6.82.38,2.35,4.27,0,8.54,0c2.4,0,4.37.67,5.9,1.82l.86-1.54h1.68l.43,7.01-1.25.38c-2.59-3.98-4.8-5.04-7.49-5.04-2.35,0-3.55.82-3.55,2.45,0,1.87,1.15,2.54,4.8,3.6,6.43,1.92,9.36,3.98,9.36,8.45,0,4.22-3.07,7.1-8.83,7.1Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "s",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "t"){
        const svgPathData = "M0,11.62v-1.63l3.6-1.34L7.54,0h2.4v8.4h5.9v3.22h-5.9v14.69c0,1.3.53,1.87,2.5,1.87,1.2,0,2.54-.29,3.31-.53l.72,1.44c-1.39,1.25-3.79,2.78-6.86,2.78-4.7,0-6.19-2.78-6.19-7.87v-12.38H0Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "t",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "u"){
        const svgPathData = "M9.94,23.47c-4.32,0-6.67-3.07-6.67-7.87V2.35H0V0h9.75v16.46c0,2.11.77,2.74,2.69,2.74,2.06,0,3.6-.86,5.62-2.83V2.35h-3.41V0h9.89v17.71l3.65,1.3v1.39l-8.35,2.98h-1.44l.58-5.57-.1-.05c-2.54,3.17-5.23,5.71-8.93,5.71Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "u",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "v"){
        const svgPathData = "M11.71,23.47L2.45,2.35H0V0h13.06v2.35h-3.26l5.71,14.98,5.14-14.98h-2.78V0h8.93v2.35h-2.26l-9.02,21.12h-3.79Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "v",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "w"){
        const svgPathData = "M10.37,23.47L2.5,2.35H0V0h12.62v2.35h-2.93l4.42,13.63,4.08-13.63h-2.64V0h11.42v2.35h-2.83l5.14,13.87,4.18-13.87h-2.93V0h8.74v2.35h-2.26l-8.21,21.12h-3.12l-6-16.27-5.95,16.27h-3.36Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "w",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "x"){
        const svgPathData = "M0,23.09v-2.4h2.54l7.1-8.88L2.5,2.35H.38V0h13.11v2.35h-3.07l4.56,6.58,4.03-6.58h-2.78V0h8.74v2.35h-2.06l-6.72,8.3,7.58,10.03h2.16v2.4h-13.15v-2.4h3.07l-4.95-7.15-4.51,7.15h2.93v2.4H0Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "x",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "y"){
        const svgPathData = "M11.33,23.09L2.45,2.35H0V0h13.06v2.35h-3.26l5.42,15.17,5.14-15.17h-2.83V0h8.83v2.35h-2.21l-10.37,24.67c-2.11,4.99-4.42,6.58-7.58,6.58-2.83,0-4.71-1.73-4.71-4.03,0-1.78,1.34-3.22,3.02-3.22s2.83,1.15,2.83,2.83c0,.82-.24,1.54-.82,1.97l.05.19c1.73-.1,3.26-1.68,4.56-5.14l1.15-3.12h-.96Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "y",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "z"){
        const svgPathData = "M0,23.09v-1.78L13.59,2.06l-6.96.53-3.94,5.9h-1.15L2.35,0h18.67v1.68L7.39,21.03l8.3-.58,4.22-6.82h1.3l-.86,9.46H0Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "z",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "A"){
        const svgPathData = "M0,33.51v-1.73l3.94-1.15L17.52,0h3.98l12.82,30.63,3.65,1.15v1.73h-15.84v-1.73l4.03-1.15-3.46-8.79h-11.47l-3.46,8.79,4.18,1.15v1.73H0ZM16.99,7.34l-4.61,11.67h9.17l-4.56-11.67Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "aCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "B"){
        const svgPathData = "M0,33.03v-1.73l4.18-1.15V2.88L0,1.73V0h15.79c6.77,0,12.43,2.54,12.43,8.3,0,4.08-3.46,6.38-7.63,7.1v.24c5.33.58,9.46,3.12,9.46,8.5,0,5.76-5.33,8.88-13.2,8.88H0ZM11.81,14.35h2.45c5.14,0,6.58-1.34,6.58-5.66,0-4.75-1.54-5.76-6.14-5.76h-2.88v11.42ZM11.81,30.1h4.18c4.66,0,6.29-1.34,6.29-6.24s-1.73-6.82-6.77-6.82h-3.7v13.06Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "bCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            horizontalMoveDirection: 0,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "C"){
        const svgPathData = "M16.71,33.79C6.83,33.79,0,26.11,0,16.9S7.02,0,16.62,0c4.46,0,6.82,1.39,8.79,2.79l1.25-2.4h1.49l1.01,12.53-1.3.29c-4.75-8.45-7.15-10.22-11.09-10.22-5.47,0-8.16,2.88-8.16,14.4,0,10.9,3.07,13.44,9.12,13.44,4.46,0,7.97-2.54,10.22-6l1.97,1.39c-2.83,4.85-7.3,7.58-13.2,7.58Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "cCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "D"){
    
        const svgPathData = "M0,33.03v-1.73l4.18-1.15V2.88L0,1.73V0h16.27c11.42,0,18.29,7.54,18.29,16.51s-6.86,16.51-18.29,16.51H0ZM11.95,30.15h3.5c8.45,0,10.9-3.26,10.9-13.63,0-10.9-2.83-13.58-10.9-13.58h-3.5v27.22Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "dCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "E"){  
        const svgPathData = "M0,33.03v-1.73l4.18-1.15V2.88L0,1.73V0h27.41l.96,10.46-1.2.24-5.33-7.83-9.89-.86v13.01l5.09-.43,2.02-5.23h1.54v13.2h-1.54l-2.02-4.9-5.09-.38v13.58l11.42-.72,5.76-9.36,1.34.24-1.25,12H0Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "eCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "F"){
        const svgPathData = "M0,33.03v-1.73l4.18-1.15V2.88L0,1.73V0h27.94l.96,11.62-1.25.24-5.86-9.07-9.84-.77v13.54l5.57-.43,1.97-5.57h1.58v13.83h-1.58l-1.97-5.14-5.57-.43v12.34l4.37,1.15v1.73H0Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "fCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "G"){
        const svgPathData = "M28.27,33.41l-2.3-4.22c-2.3,2.69-5.57,4.61-9.94,4.61C6.34,33.79,0,26.11,0,16.9S7.06,0,16.71,0c4.56,0,6.82,1.39,8.74,2.88l1.2-2.5h1.44l1.06,11.47-1.3.29c-4.32-7.1-6.77-9.12-11.09-9.12-5.33,0-8.5,2.93-8.5,14.35,0,10.75,3.22,13.44,9.17,13.44,2.16,0,3.94-.72,5.42-1.82v-7.92l-4.22-1.2v-1.73h14.74v1.73l-3.26,1.2v12.34h-1.82Z"
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "gCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "H"){
        const svgPathData = "M0,33.03v-1.73l4.18-1.15V2.88L0,1.73V0h15.89v1.73l-3.94,1.15v12.15h13.68V2.88l-3.98-1.15V0h15.89v1.73l-4.13,1.15v27.27l4.13,1.15v1.73h-15.89v-1.73l3.98-1.15v-12.24h-13.68v12.24l3.94,1.15v1.73H0Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "hCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "I"){
        const svgPathData = "M0,33.03v-1.73l4.46-1.15V2.88L0,1.73V0h16.75v1.73l-4.51,1.15v27.27l4.51,1.15v1.73H0Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "iCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "J"){
        const svgPathData = "M7.97,42.1c-5.47,0-7.97-2.64-7.97-5.52,0-2.26,1.54-3.84,3.6-3.84s3.5,1.58,3.5,3.41c0,1.58-.86,2.59-2.26,2.98v.24c.38.14,1.1.29,1.73.29,2.26,0,3.89-.86,3.89-4.61V2.88l-4.71-1.15V0h16.56v1.73l-4.13,1.15v28.23c0,8.26-5.18,10.99-10.22,10.99Z"
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "jCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "K"){
        const svgPathData = "M0,33.03v-1.73l4.18-1.15V2.88L0,1.73V0h15.46v1.73l-3.5,1.15v12.62h3.46L25.01,2.83l-3.26-1.1V0h11.62v1.73l-3.5,1.1-9.84,10.9,12.24,16.51,2.83,1.06v1.73h-14.45v-1.73l2.83-1.06-8.45-12.05h-3.07v11.95l3.5,1.15v1.73H0Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "kCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "L"){
        const svgPathData = "M0,33.03v-1.73l4.18-1.15V2.88L0,1.73V0h16.27v1.73l-4.32,1.15v28.08l9.75-.91,6-9.75,1.3.24-1.49,12.48H0Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "lCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "M"){
        const svgPathData = "M0,33.03v-1.73l4.18-1.15V2.88L0,1.73V0h12.77l8.64,22.18L29.33,0h13.49v1.73l-4.18,1.15v27.27l4.18,1.15v1.73h-15.65v-1.73l3.7-1.15V4.75l-10.18,27.12h-3.17L6.48,4.75l1.3,25.39,3.7,1.15v1.73H0Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "mCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "N"){
        const svgPathData = "M27.6,33.51L6.58,4.94l1.49,25.2,4.46,1.15v1.73H0v-1.73l4.08-1.15V2.88L0,1.73V0h12.1l16.37,22.37-1.25-19.49-4.42-1.15V0h12v1.73l-3.75,1.15v30.63h-3.46Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "nCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "O"){
        const svgPathData = "M17.19,33.79C7.25,33.79,0,25.97,0,17.04S7.49,0,17.19,0s17.38,8.07,17.38,17.04-7.58,16.75-17.38,16.75ZM17.19,30.82c5.81,0,9.12-3.41,9.12-13.78s-3.12-14.02-9.12-14.02-8.93,3.26-8.93,14.02,2.98,13.78,8.93,13.78Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "oCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "P"){
        const svgPathData = "M0,33.03v-1.73l4.22-1.15V2.88L0,1.73V0h16.23c8.26,0,13.68,3.65,13.68,10.13s-4.7,10.32-11.28,10.32c-1.49,0-3.07-.24-4.7-.62l-1.97-.43v10.75l4.37,1.15v1.73H0ZM11.95,2.83v14.35l2.93.19c.67.05,1.3.1,1.82.1,4.46,0,5.28-1.87,5.28-7.34,0-6.14-1.44-7.3-6.43-7.3h-3.6Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "pCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "Q"){
        const svgPathData = "M27.27,42.58c-5.86,0-9.07-2.64-13.25-9.07C5.71,32.07,0,25.01,0,17.04,0,8.07,7.49,0,17.19,0s17.38,8.07,17.38,17.04c0,7.39-5.18,14.02-12.48,16.08,1.39,2.59,2.59,4.37,3.65,5.57,1.34,1.44,2.45,1.58,7.49,1.58v1.73c-1.68.29-4.18.58-5.95.58ZM17.19,30.82c5.81,0,9.12-3.41,9.12-13.78s-3.12-14.02-9.12-14.02-8.93,3.26-8.93,14.02,2.98,13.78,8.93,13.78Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "qCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "R"){
        const svgPathData = "M25.2,33.03c-1.58,0-2.26-.43-2.64-1.58-3.94-12-4.18-12.91-8.4-12.91h-2.3v11.62l4.13,1.15v1.73H0v-1.73l4.08-1.15V2.88L0,1.73V0h16.13c7.82,0,13.34,3.02,13.34,9.17,0,4.75-3.89,7.3-9.55,8.21v.19c3.46.43,5.71,1.87,7.58,5.86l3.17,6.72,2.98,1.15v1.73h-8.45ZM11.86,2.88v12.96h2.93c5.57,0,6.82-1.15,6.82-6.62s-1.3-6.34-6.14-6.34h-3.6Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "rCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "S"){
        const svgPathData = "M13.49,33.79c-4.18,0-7.1-1.49-9.07-3.21l-1.2,2.83H1.1l-1.1-12.19,1.39-.43c4.75,7.82,6.91,9.94,11.95,9.94,3.6,0,6.05-1.29,6.05-4.42,0-3.36-1.58-4.56-7.78-6.43C4.9,17.81.91,14.93.91,9.07.91,3.75,4.85,0,11.14,0c3.41,0,6.1,1.44,7.44,2.64l1.1-2.26h1.92l.82,9.89-1.2.29c-3.89-5.71-5.86-7.49-10.08-7.49-3.22,0-4.99,1.3-4.99,3.84,0,2.98,1.58,3.84,7.58,5.57,6.53,1.92,11.38,5.09,11.38,10.9,0,6.29-4.51,10.42-11.62,10.42Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "sCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "T"){
        const svgPathData = "M7.01,33.03v-1.73l4.85-1.15V1.97l-5.14.77L1.39,12.72l-1.39-.29L.72,0h29.96l.77,12.43-1.39.29-5.33-9.98-5.14-.77v28.18l4.85,1.15v1.73H7.01Z"
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "tCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "U"){
        const svgPathData = "M17.95,33.41c-8.4,0-13.97-3.79-13.97-11.86V2.88L0,1.73V0h15.46v1.73l-3.74,1.15v19.35c0,6.19,2.02,7.97,8.02,7.97,5.28,0,7.49-1.97,7.49-8.16V2.88l-4.22-1.15V0h11.9v1.73l-3.5,1.15-1.01,20.31c-.34,6.48-3.98,10.22-12.43,10.22Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "uCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "V"){
        const svgPathData = "M16.08,33.51L3.51,2.88,0,1.73V0h15.79v1.73l-3.79,1.15,8.64,23.04L28.76,2.88l-4.46-1.15V0h12v1.73l-3.55,1.15-12.48,30.63h-4.18Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "vCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "W"){
        const svgPathData = "M14.59,33.51L3.26,2.88,0,1.73V0h15.12v1.73l-3.75,1.15,7.44,21.7,5.14-16.03-2.06-5.67-3.12-1.15V0h14.88v1.73l-4.13,1.15,7.87,22.13,6.48-22.13-4.03-1.15V0h11.62v1.73l-3.7,1.15-10.61,30.63h-3.89l-7.73-20.79-7.11,20.79h-3.84Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "wCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "X"){
        const svgPathData = "M0,33.03v-1.73l3.6-1.15,9.7-13.44L3.65,2.88.72,1.73V0h15.89v1.73l-3.74,1.15,6.67,10.42,5.95-10.42-3.65-1.15V0h11.47v1.73l-3.55,1.15-8.83,12.53,10.32,14.74,3.07,1.15v1.73h-15.89v-1.73l3.55-1.15-7.2-11.23-6.91,11.23,3.6,1.15v1.73H0Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "xCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "Y"){
        const svgPathData = "M9.27,33.03v-1.73l4.56-1.15v-10.27L3.36,3.02,0,1.73V0h15.99v1.73l-4.13,1.3,8.06,13.78,7.25-13.92-4.32-1.15V0h12.1v1.73l-3.7,1.15-9.7,16.32v10.95l4.56,1.15v1.73H9.27Z";
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "yCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }
    else if(key === "Z"){
        const svgPathData = "M0,33.03v-1.87L20.31,2.02l-11.67.86-5.23,7.73-1.2-.38L3.22,0h25.92v1.63L8.74,31.01l12.77-.91,5.86-9.26,1.3.34-1.3,11.86H0Z"
        
        allCharacters.push({
            x: cursorX,
            y: cursorY,
            svgPathData: svgPathData,
            id: "zCapital",
            color: currentColorSelection,
            moveSpeed: 1,
            angle: 0,
            scaleFactor: currentScaleFactor,
        });
    }


}

// Function to find the svg path of the indicated svg
async function loadSvgPath() {
    const response = await fetch('../fonts/farnham-text-capital-Z.svg');
    const svgPathData = await response.text();
    console.log(svgPathData);
}

// Function to fill the color selector div
function fillColorSelector() {
    // Retrieves the color selector menu div
    const colorSelectorDiv = $('.color-selector');

    // Empties all pre-existing content with the color selector div
    colorSelectorDiv.empty(); 

    // Creates an area for each menu item to occupy and the menu items
    colors.forEach(color => {
        const parentDiv = $('<div>')
            .addClass('area-color-instance')
            
        const childDiv = $('<h1>')
            .html(color.name) 
            .addClass('color-instance-' + (colorDivs.length + 1))

        // Sets the menu items as children of their respective area divs
        parentDiv.append(childDiv);

        // Sets the areas as childs of the color selector menu div
        parentDiv.appendTo(colorSelectorDiv);
        
        // Tracks all created menu items
        colorDivs.push(childDiv);
    });

    // Handles event listeners for color selection menu
    for(let i=1; i < colorDivs.length+1; i++){

        // Assigns an id to each menu item
        $('.color-instance-'+i).first().attr('id', i);

        // Highlights the color text with its respective colour when hovered over
        $('.color-instance-'+i).mouseenter(function(){
            let id = $(this).first()[0].id;
            $('.color-instance-' + id).css('color', "hsla(" + colors[id-1].color + ", 80%, 50%, 0.7)");
        })

        // Returns the color text back to normal unless it is selected
        $('.color-instance-'+i).mouseleave(function(){
            let id = $(this).first()[0].id;
            if(colors[id-1].color !== currentColorSelection){
                $('.color-instance-' + id).css('color', '#FFFAF1');
            }
        })

        // Sets the clicked menu item as the currently selected color
        $('.color-instance-'+i).on('click', function(){
            let id = $(this).first()[0].id;
            currentColorSelection = colors[id- 1].color;
            for(let j=1; j < colorDivs.length+1; j++){
                if(colors[j-1].color !== currentColorSelection){
                    $('.color-instance-' + j).css('color', '#FFFAF1');
                }
            }
        })
    }

    // Highlights which color is initially selected
    for(let i=1; i < colorDivs.length+1; i++){
        if(colors[i-1].color === currentColorSelection){
            $('.color-instance-' + i).css('color', "hsla(" + currentColorSelection + ", 80%, 50%, 0.7)");
        }
    }
}

// Function to center the cursor pointer in the middle of the circle
function centerPointerCircle(x, y){
    
    
    // Retreives the width and height of the pointer div
    var pointerWidth = $('.cursor-pointer').outerWidth();
    var pointerHeight = $('.cursor-pointer').outerHeight();

    // Calculates position of the div if the div was to be centered around the cursor
    var leftPosition = x - pointerWidth / 2;
    var topPosition = y - pointerHeight / 2;

    // Centers the pointer div around the cursor
    $('.cursor-pointer').css({
        top: topPosition + 'px',
        left: leftPosition + 'px'
    });
}

// Function to clear the canvas
function clear(){
    ctx.clearRect(0,0,w,h);
}

// Function to set up the canvas
function setUpCanvas(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    resizeCanvas(); 

    // Resizes the canvas if size of the view changes
    window.addEventListener('resize', function() {
        resizeCanvas();
    });
}

// Function to resize the canvas
function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    w = window.innerWidth;
    h = window.innerHeight;
}

// Function to initialize the color selector menu
function initColorSelector() {

    // Retrieves the color selector menu div
    const colorSelectorDiv = $('.color-selector');

    // Event listener to toggle the color selector when menu icon is clicked
    colorSelectorDiv.click(function(event){
        // Stops the event from being repeated
        event.stopPropagation(); 

        // Checks if the color selector menu is already expanded
        if (!$(this).hasClass('expanded')){
            // Expands the color selector menu
            $(this).addClass('expanded');

            // Adds the menu items to the color selector menu
            fillColorSelector();
        }
    });
}

// Function to close the color selector menu
function closeColorSelector() {
    // Retrieves the color selector menu div
    const colorSelectorDiv = $('.color-selector');

    // Checks if the menu is expanded
    if (colorSelectorDiv.hasClass('expanded')){
        // Removes the 'expanded' class to revert to the initial circular form
        colorSelectorDiv.removeClass('expanded');

        // Removes event listeners from color instances
        colorDivs.forEach((div, index) => {
            // Retrieves the individual menu item div
            const selector = '.color-instance-' + (index + 1);

            // Removes event listeners attached to the specified menu item div
            $(selector).off('mouseenter mouseleave click');
        });

        // Empties the trackers for the color selector menu div
        colorSelectorDiv.empty();

        // Empties the trackers for the color selector menu items divs
        colorDivs = [];
    }
}


