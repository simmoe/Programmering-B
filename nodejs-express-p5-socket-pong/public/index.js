let clientSocket
let paddle1, paddle2
let speed = 10

// 
function setup(){
    clientSocket = io.connect()
    createCanvas(windowWidth, windowHeight)
    background('orange')
    paddle1 = new Paddle(100, 12, 1)
    paddle2 = new Paddle(100, 12, 2)
}

function draw(){
    background('orange')
    paddle1.show()
    paddle2.show()
    if(keyIsDown(LEFT_ARROW)){
        paddle1.move(-speed)
    }
    if(keyIsDown(RIGHT_ARROW)) {
        paddle1.move(speed)
    }
}

function Paddle(w, h, p) {
    this.w = w
    this.h = h
    this.p = p
    if(p==1){
        this.y = 0
    }else{
        this.y = height - this.h
    }
    this.x = width/2 - this.w/2

    this.show = function(){
        fill('white')
        rect(this.x, this.y, this.w, this.h)
    }
    this.move = function(dir){
        this.x += dir
    }
}

