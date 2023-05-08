
import { GameDimensions, ScreenSize } from "../types/global.types"
import { ScreenAction } from "../types/reducer.types"


// const size = window.innerHeight / window.innerWidth
const square = 150 

const initialScreen: ScreenSize = {

    max: {
        height: square * 5 ,
        width: square * 7
       
    },
    gameContainer: {
        width: 7 * square,
        height: 5 * square
    },
    mask: {
        width: 5 * square,
        height: 3 * square
    },
    grid: {
        width: 5 * square,
        height: 19 * square
    },
    UI_: {
        width: 7 * square,
        height: square
    },
    symbol: {
        fullSize: square,
        graphSize: 0.93 * square,
        spriteSize: 0.83 * square,
    }
}
// graphSize: ((square / 10) * 9.5),
//((square / 10) * 8)

export function screenSize(state: ScreenSize = initialScreen, action: ScreenAction) {
    switch (action.type) {
        case "UPDATE_SCREEN": {
            const height = (action.payload.width / 10)* 5 
            const width = (action.payload.width / 10) * 7 
            const max = { width, height }

            const newSize = { ...state, max }
            return newSize



        }
        default:
            return state
    }
}