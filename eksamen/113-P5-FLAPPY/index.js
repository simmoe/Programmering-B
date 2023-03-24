//spillerens koordinater og størrelse
let playerX, playerY
let playerWidth = 100

//fysik kræfter
let gravity = 1
let friction = .97   
let velocity = 0
let updrift = 25

//forhindringens koordinater og størrelse
let wallX, wallY, wallW, wallH
let wallSpeed = 10

//point
let score = 0


function setup(){
    //fuldskærm canvas
    createCanvas(windowWidth, windowHeight)
    background('green')
    //spiller dumper ned på midten af skærmen
    playerX = windowWidth/2
    playerY = playerWidth/2
    wallW = 20
    wallH = 100
    wallX = windowWidth
    wallY = windowHeight - wallH
}

function showWall(){
    rect(wallX, wallY, wallW, wallH)
}

function updateWall(){
    if(frameCount > 60){
        wallX -= wallSpeed 
    }
    if(wallX <= 0){
        wallX = windowWidth
        wallH = random(100, 300)
        wallY = windowHeight - wallH  
    }
}

function showPlayer(){
    ellipse(playerX, playerY, playerWidth)
}

function updatePlayer(){
    //fysik til spiller
    velocity += gravity
    velocity *= friction
    playerY += velocity 

    if(playerY > windowHeight - playerWidth/2){
        playerY = windowHeight - playerWidth/2
        velocity = -velocity
    }

    if(playerY < playerWidth/2){
        playerY = playerWidth/2
        score += 4
        velocity = -velocity
    }
}

function collissionOrPoints(){
    if(playerX > wallX && playerX < wallX + wallW){
        if(playerY > windowHeight - wallH){
            score -= 1
        }else{
            score += 1
        }
    }
}

function draw(){
    background('green')
    showPlayer()
    updatePlayer()
    showWall()
    updateWall()
    collissionOrPoints()
    select('#info').html(score)
}

function keyPressed(key){
    if(key.key == ' '){
        velocity -= updrift
    }
}
