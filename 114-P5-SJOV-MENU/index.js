let lukas, viktor
let balls = []

function setup(){
    noCanvas()
    for(student in students) {
        let b = new Ball(random(50), random(window.innerWidth - 50), random(window.innerHeight), 'red', students[student], student)
        balls.push(b)
    }
}

function draw(){
    balls.map( item => {
        item.show()
        item.update()
        if(frameCount % 23 == 0){
            item.up(random(5))
        }
    })
}

function keyPressed(key){
    if(key.key == ' '){
        balls.map(item => item.up())
    }
}
