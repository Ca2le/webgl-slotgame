
import { ScreenSize } from "../types/global.types"
import { ScreenAction } from "../types/reducer.types"


const square = 150

const initialScreen: ScreenSize = {
    max: {
        width: 1050,
        height: 750
    },
    mask: {
        width: 750,
        height: 450
    },
    grid: {
        width: 750,
        height: 2850
    },
    UI_: {
        width: 1050,
        height: 150
    },
    symbol: {
        fullSize: square,
        graphSize: 140,
        spriteSize: 125,
    }
}
 // graphSize: ((square / 10) * 9.5),
 //((square / 10) * 8)

export function screenSize(state: ScreenSize = initialScreen, action: ScreenAction) {
    switch (action.type) {
        case "UPDATE_SCREEN": {
            return state = action.payload
        }
        default:
            return state
    }
}