
import { ScreenSize } from "../types/global.types"
import { ScreenAction } from "../types/reducer.types"

const windowSize = (window.innerWidth * window.innerHeight) * 150

const square = 130

const initialScreen: ScreenSize = {

    max: {
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
        // case "UPDATE_SCREEN": {

        //     const newSquare = action.payload * 150

        //     const newSize ={
        //         max: {
        //             width: 7 * newSquare,
        //             height: 5 * newSquare
        //         },
        //         mask: {
        //             width: 5 * newSquare,
        //             height: 3 * newSquare
        //         },
        //         grid: {
        //             width: 5 * newSquare,
        //             height: 19 * newSquare
        //         },
        //         UI_: {
        //             width: 7 * newSquare,
        //             height: newSquare
        //         },
        //         symbol: {
        //             fullSize: newSquare,
        //             graphSize: 0.93 * newSquare,
        //             spriteSize: 0.83 * newSquare,
        //         }
        //     }
        //     return newSize
        // }
        default:
            return state
    }
}