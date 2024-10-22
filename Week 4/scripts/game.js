var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var fps = 1000/60;
var timer = setInterval(game, fps);

var x = 50;
var y = canvas.height/2;
var w = 100;
var h = 100;
var moveAmountX = 10;
var moveAmountY = 10;


function game(){
    //Clear the canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);
    //update the canvas

    x += moveAmountX;
    y += moveAmountY;

    //draw our GameObjects
    //ctx.fillRect(x, y, w, h);
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI, false);
    ctx.fillStyle = "magenta";

    ctx.closePath();
    ctx.fill();

    if(x > canvas.width - 50){
        //make square come out other side
        moveAmountX *= -1;

    }

    //stay in boundary of canvas
    if(x < 50){
        moveAmountX *= -1;
    }

    if(y < 50){
        moveAmountY *= -1;
    }

    if(y > canvas.height - 50){
        moveAmountY *= -1;
    }

};

game();