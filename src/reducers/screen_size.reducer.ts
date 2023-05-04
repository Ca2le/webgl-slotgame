
import { GameDimensions, ScreenSize } from "../types/global.types"
import { ScreenAction } from "../types/reducer.types"


const size = window.innerHeight / window.innerWidth
const square = 150 * size

const initialScreen: ScreenSize = {

    max: {
        width: (window.innerWidth / 10) * 8,
        height: (window.innerWidth / 10) * 7 * GameDimensions.aspectRatio
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
            const height = (action.payload.width / 10) * 7 * GameDimensions.aspectRatio
            const width = (action.payload.width / 10) * 8 
            const max = { width, height }
            console.log(max, "gameratio")
            const newSize = { ...state, max }
            return newSize



        }
        default:
            return state
    }
}