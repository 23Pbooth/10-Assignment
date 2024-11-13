const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



const rocket = new Image();
rocket.src = "images/rocket.jpg"

let position = {
    x: 100,
    y: 275,
}


function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "cyan"
    ctx.fillRect(0, 0, canvas.width, 350)
    ctx.fillStyle = "green";
    ctx.fillRect(0, 350, canvas.width, 50)

    ctx.drawImage(rocket, position.x, position.y)
}


function update(){
    if(position.y < -76){
        draw()
        cancelAnimationFrame(gameLoop)
        clearTimeout(timer)
        return
    }
    position.y -= 1
}
function gameLoop(){
    draw()
    update()
    requestAnimationFrame(gameLoop)
}



document.body.onload = function(){
    draw();
}

document.getElementById("btnLaunch").onclick = function(){
    position.x = 100;
    position.y = 275;
    let timer = setTimeout(DisplayTimer, 10000)
    ctx.font = "20px serif";
    ctx.fillText(`Lift Off in: ${timer}`, 200, 20)
    function DisplayTimer(){
    requestAnimationFrame(gameLoop)
    
    }
    
    
    
}