var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var pickColor = pickedColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numSquares = 3;

    colors = generateRandomColors(numSquares);
    pickColor = pickedColor();
    colorDisplay.textContent = pickColor;

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
        squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});
hardbtn.addEventListener("click", function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numSquares = 6;

    colors = generateRandomColors(numSquares);
    pickColor = pickedColor();
    colorDisplay.textContent = pickColor;

    for(var i = 0; i < squares.length; i++){
        
        squares[i].style.backgroundColor = colors[i];
        
        squares[i].style.display = "block";
        
    }
});


resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);

     pickColor = pickedColor();

    colorDisplay.textContent = pickColor;
    h1.style.backgroundColor = "#232323";

   
     for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i]; 
    
    }

    
})
colorDisplay.textContent = pickColor;

for (var i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor= colors[i];

    squares[i].addEventListener("click", function(){
        var squareColor = this.style.backgroundColor;

        if(squareColor === pickColor){
            messageDisplay.textContent = "Correct!!";
            colorchanged(squareColor);
            resetButton.textContent = "Play Again";
            h1.style.backgroundColor = squareColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
    
}


function colorchanged(color){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickedColor(){
   var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
 function generateRandomColors(num){
     //make an array
     var arr = []
     //repeat num times
     for(var i = 0; i < num; i++){
         //get random color and push into arr
         arr.push(randomColor());
     }
     // return that array
     return arr;

 }

 function randomColor(){
     var r = Math.floor(Math.random() * 256);
     var g = Math.floor(Math.random() * 256);
     var b = Math.floor(Math.random() * 256);
     return "rgb(" + r + ", " + g + ", " + b + ")";
 }
