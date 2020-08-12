var no_of_squares = 6;
var colors = [];
var pickedColor;

var boxes = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons()
{
    for (var i=0; i < modeButtons.length; i++)
    {
        //Mode Button Event Listeners
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            no_of_squares = (this.textContent === "Easy") ? 3 : 6;
            reset();
        });
    }
}

function setupSquares()
{
    for(var i=0;i < boxes.length; i++)
    {
        //Adding Click Listeners
        boxes[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor)
            {
                resetBtn.textContent = "Play Again"
                messageDisplay.textContent = "Correct";
                changeColors(clickedColor);
                header.style.backgroundColor = clickedColor;   
            }
            else
            {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset()
{
    colors = randomColorArrayGenerator(no_of_squares);
    pickedColor = pickColor();
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < boxes.length ; i++){
        if(colors[i])
        {
            boxes[i].style.display = "block";
            boxes[i].style.backgroundColor = colors[i];
        }
        else
            boxes[i].style.display = "none";
    }
    header.style.backgroundColor = "steelblue";
    resetBtn.textContent = "New Colors";
}

resetBtn.addEventListener("click", function(){
    reset();
});

function randomColorArrayGenerator(num)
{
    var arr = [];

    for(var i=0; i<num ; i++)
        arr.push(randomColorGenerator());
    return arr;
}

function randomColorGenerator()
{
    //Generates a random color in the RGB Channel
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " +blue +")";
}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function changeColors(color)
{
    //all squares change to the given color
    for(var i=0; i < boxes.length; i++)
    {
        boxes[i].style.backgroundColor = color;
    }
}