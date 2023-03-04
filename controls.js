 export default function Constrols({
    buttonPlaY,
    buttonPause,
    buttonSet,
    buttonStop
 }){

    function pause(){
        buttonPlaY.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    function play(){
        buttonPlaY.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }

    function reset(){
        buttonPlaY.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonSet.classList.remove('hide')
        buttonStop.classList.add('hide')
    }

    function getMinutes(){
        let newMinutes = prompt('Quantos minutos?') 
        if(!newMinutes){
            return false
        }
        return newMinutes
    }

    return{
        reset,
        play,
        pause,
        getMinutes
    }

 }
 


