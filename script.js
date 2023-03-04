import Constrols from "./controls.js"
import  Timer  from "./timer.js"  
import Sound from "./sounds.js"
import Events from "./events.js"

import {

    buttonPause,
    buttonPlaY,
    buttonSet,
    buttonStop,
    minutesDisplay,
    secondDisplay
} from "./elements.js"



const controls = Constrols({
    buttonPause,
    buttonPlaY,
    buttonSet,
    buttonStop
})

const sound = Sound()


const timer = Timer({
    minutesDisplay,
    secondDisplay,
    resetControls : controls.reset
    
})

Events({controls, timer, sound })
