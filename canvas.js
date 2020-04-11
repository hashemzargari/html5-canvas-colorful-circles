const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight


function Circle(x, y, r, dx, dy){
    this.x=x;
    this.y=y;
    this.r=r;
    this.dx=dx;
    this.dy=dy;
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)]
    this.minR = minR;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function(){

        if(this.x+this.r>innerWidth || this.x-this.r<0){
            this.dx=-this.dx;
        }
        if(this.y+this.r>innerHeight || this.y-this.r<0){
            this.dy=-this.dy;
        }

        this.x+=this.dx;
        this.y+=this.dy;

        // interavtivity
         if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
             if(this.r<maxR){
                 this.r+=3;
             }
         }else if(this.r>this.minR){
             this.r-=1;
         }


        this.draw();
    }
}

// Mouse x, y
var mouse = {
    x: undefined,
    y: undefined,
}

// MAX and MIN radious
maxR = 40;
minR = 3;

// Colors
var colorArray =[
    '#ffaa33',
    '#99ffaaa',
    '#00ff00',
    '#4411aa',
    '#ff1100',
]

// add listener to mouse move
window.addEventListener('mousemove',
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;   
});

var circleArray =[];

for (var i=0; i<800;i++){
    var x = Math.random()*(innerWidth-r*2)+r;
    var y = Math.random()*(innerHeight-r*2)+r;
    var r = (Math.random()*3)+1;
    var dx = (Math.random()-0.5)*6;
    var dy = (Math.random()-0.5)*6;
    circleArray.push(new Circle(x, y, r, dx, dy));
}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i=0; i<circleArray.length;i++){
        circleArray[i].update();
    }

}

animate();