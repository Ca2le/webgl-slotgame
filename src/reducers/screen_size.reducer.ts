
import { ScreenSize } from "../types/global.types"
import { ScreenAction } from "../types/reducer.types"



const square = 130

const initialScreen: ScreenSize = {

    max: {
        width: 7 * square,
        height: 5 * square
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

            const newSquare = action.payload * 150

            const newSize = { ...state, max: { width: 7 * newSquare, height: 5 * newSquare } }
            return newSize
        }
        default:
            return state
    }
}