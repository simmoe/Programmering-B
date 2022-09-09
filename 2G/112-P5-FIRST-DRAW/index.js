console.log('scriptet loaded')

let go = false

function setup(){
    frameRate(60)
    console.log('setup')
    createCanvas(windowWidth, windowHeight)
    background('green')
}

function draw(){
    //mouseX mouseY frameCount map

    select('#info').html(frameCount % 60)

    let xColor = map(mouseX, 0, windowWidth, 0, 255)

    if(go){
        noStroke()
        fill(xColor, 0, 255)
        ellipse(mouseX, mouseY, frameCount % 60)
        ellipse(mouseX+20, mouseY+20, frameCount % 20)
        ellipse(mouseX-20, mouseY-20, frameCount % 20)
    }
}

function mousePressed(){
    go = true
}
function mouseReleased(){
    go = false
}