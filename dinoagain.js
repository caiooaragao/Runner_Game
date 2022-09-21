document.addEventListener('DOMContentLoaded', () => {
    

    
    let dino = document.querySelector('.dino')
    let pulando = false
    let gravity = 0.9
    const grid = document.querySelector('.grid')
    let gameOver = false
    let spacepress = false
    console.log(gameOver)
    document.addEventListener('keydown', control)
    function control(e){
        if(e.keyCode == 32){
            spacepress = true
            if (spacepress == true && gameOver == true){
                console.log('spacepress')
                location.reload()
            }
            console.log('pressing key')
            if (pulando === false){
                pulando = true
                jump()
            }
            
        }

    }


    let position = 0
    function jump (){
        jumpSound()
        let count = 0  
        let timerId = setInterval(function(){
            // up
            console.log('up')
            position += 35
            count++
            position = position*gravity
            dino.style.bottom = position + 'px'
            
            
            //down
            if (count === 7){
                clearInterval(timerId)
                let downTimerId = setInterval(function(){
                    console.log('down')
                    count--
                    position -= 35
                    position = position*gravity
                    dino.style.bottom = position + 'px'
                    if (count === 3  ){
                        clearInterval(downTimerId)
                        pulando = false
                    }
                },40)
            }
        },40)
        
    }

    function gerarObstaculo(){
        let randomTime = Math.random() * 4000
        let obstaculoPosition = 1200
        const obstaculo = document.createElement('div')
        if(!gameOver)obstaculo.classList.add('obstaculo')
        grid.appendChild(obstaculo)
        obstaculo.style.left = obstaculoPosition + 'px'
        let timerId = setInterval(function(){
            if(obstaculoPosition > 410 && obstaculoPosition < 445 && position <50 ){
                clearInterval(timerId)
                
                gameOver = true
                while(grid.firstChild){
                    grid.removeChild(grid.lastChild)
                }
                gameprompt = document.getElementById('gameover')
                principal = document.querySelector('.principal')
                gameprompt.innerHTML = 'Game Over '
                gameprompt.style.width = '400px'
                gameprompt.style.background = 'white'
                principal.style.display = 'flex'
                
                
                 
            }
 
            obstaculoPosition -= 10
            obstaculo.style.left = obstaculoPosition + 'px'
            
            
        },30)
    
        if (!gameOver) setTimeout(gerarObstaculo, randomTime)
        
    }
    gerarObstaculo() 

    // SCORE
    let scoreTime = 0
    let scoreInterval = setInterval(function cronometro(){
        score = document.getElementById('seg')
        scoreTime = scoreTime + 2
        score.innerHTML = scoreTime
        if (gameOver == true){
            clearInterval(scoreInterval)
            deathSound()
        }
    },40)

    jumpSound = function () {
        let audio = new Audio('jumpSound.mp3');
        audio.loop = false;
        audio.play(); 
    }
    deathSound = function () {
        let audio = new Audio('deathSound.mp3');
        audio.loop = false;
        audio.play(); 
    }
   


})
