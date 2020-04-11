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

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
        c.strokeStyle="blue";
        c.stroke();
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


        this.draw();
    }
}



var circleArray =[];

for (var i=0; i<100;i++){
    x = Math.random()*innerWidth;
    y = Math.random()*innerHeight;
    r = 30;
    dx = (Math.random()-0.5)*8;
    dy = (Math.random()-0.5)*8;
    circleArray.push(new Circle(x, y, r, dx, dy));
}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i=0; i<100;i++){
        circleArray[i].update();
    }

}

animate();