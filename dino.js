


document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino')
    let pulando = false



    function control (e){
        if (e.keyCode === 32){
            if (pulando == false){
                pulando = true
                jump()   
            }   
        }
        
        
    }
    
    document.addEventListener("keydown", control)
    


    function jump (){
        let position = 0
        let timerId = setInterval(function(){
            // DOWN
            if (position === 150){
                clearInterval(timerId)
                console.log('down')
                let downTimerId = setInterval(function(){
                    position -= 30
                    dino.style.bottom = position + 'px'
                    if (position=== 0 ){
                        clearInterval(downTimerId)
                        pulando = false
                    }
                },20)
                
            }
            
            
            // UP
            console.log('up')
            position += 30
            dino.style.bottom = position + 'px'


        },40)
        
    }
})    