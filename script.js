var canvas = document.querySelector("canvas");

var c = canvas.getContext("2d");

canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;

var x = 5;
var y = 5;
var dx = 5 * Math.random(2, 5);
var dy = 5 * Math.random(2, 5);

   var colorArray = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
    '#80B300',
    '#809900',
    '#E6B3B3',
]
var minRadius = 10;
var maxRadius = 100;
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}





function Circle(x, y, dx, dy, radius, color){
 
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function(){
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 
            && mouse.y - this.y < 50 && mouse.y - this.y > -50)
            {
                if (this.radius < maxRadius){
                    this.radius += 1;
                }   
            } else if (this.radius > minRadius){
                this.radius -= 1;
            } 

        this.x += this.dx
        this.y += this.dy

        this.draw()
    }

}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

var circleArray = [];
var mouse = {
    x: undefined,
    y: undefined
}




    window.addEventListener('mousemove',

    function(event) { 

        mouse.x = event.x;
        mouse.y = event.y;
        console.log(mouse)
    })
    for (let i = 0; i < 500; i++){
        var radius = 5;
        var x = randomIntFromRange(radius, canvas.width - radius);
        var y = randomIntFromRange(radius, canvas.height - radius);
        var dx = 4 * randomIntFromRange(1, 3);
        var dy = dx;

 
    circleArray.push(new Circle(x, y, dx, dy, radius))
}
animate();