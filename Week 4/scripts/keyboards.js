
//Canvas stuff
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');
var fps = 1000/60;
var timer = setInterval(gameLoop, fps);

//This is an event listener:
document.addEventListener('keydown',press);

var w = false;
var a = false;
var s = false;
var d = false;
var up = false;
var down = false;
var left = false;
var right = false;

//this is the function that gets called when we press the keys:
function press(event){
    //gives us the keycode of every keypress:
    console.log(event.keyCode);

    if(event.keyCode == 87){w = true}
    if(event.keyCode == 65){a = true}
    if(event.keyCode == 83){s = true}
    if(event.keyCode == 68){d = true}
    if(event.keyCode == 38){up = true}
    if(event.keyCode == 40){down = true}
    if(event.keyCode == 37){left = true}
    if(event.keyCode == 39){right = true}
}

document.addEventListener('keyup',release);
//The function gets called when we press the keys
function release(event){
    //gives us the keycode of every keypress
    console.log(event.keycode);

    if(event.keyCode == 87){w = true}
    if(event.keyCode == 65){a = true}
    if(event.keyCode == 83){s = true}
    if(event.keyCode == 68){d = true}
    if(event.keyCode == 38){up = true}
    if(event.keyCode == 40){down = true}
    if(event.keyCode == 37){left = true}
    if(event.keyCode == 39){right = true}
}

class GameObject{
    constructor(){
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.radius = 50;
        this.startAngle = 0;
        this.endAngle = 2 * Math.PI;
        this.vx = 0;
        this.vy = 0;
        this.color = "lightblue"
    }

    drawObj(){
        //Saves canvas position
        ctx.save();
        ctx.fillStyle = this.color;
        //Sets 0,0 cords in the middle of the canvas
        ctx.translate(this.x, this.y);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
        ctx.closePath();
        ctx.fill();
        //Restores canvas to original properties
        ctx.restore();
    }

    move(){
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }

    
}

var player = new GameObject();

    //This is our game loop
    function gameLoop(){
        //Clears canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.drawObj();
    }