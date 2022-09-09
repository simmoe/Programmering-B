

 function setup(){
     createCanvas(windowWidth, windowHeight)
     background('green')
    }

function draw(){
    let green = map(mouseX, 0, windowWidth, 0, 255)
    fill(0, green, 0)
    ellipse(mouseX, mouseY, 20 )
}
