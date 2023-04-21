
import { ScreenSize } from "../types/global.types"
import { ScreenAction } from "../types/reducer.types"

const initialScreen: ScreenSize = {
    fullView: {
        width: 1000,
        height: 600
    },
    // 100px * 5 symbols = 500 width
    // 100px * 3 symbols = 300 height = 3 symbols showing
    maskSize: {
        width: 750,
        height: 450
    },
    // 100px * 8 symbols = 800 height
    // 100px * 5 symbols = 500 width
    gridSize: {
        width: 750,
        height: 1200
    },
    UI_Size: {
        width: 1000,
        height: 100
    },
    symbolSize: {
        width: 150,
        height: 150
    }
}

export function screenSize(state: ScreenSize = initialScreen, action: ScreenAction) {
        switch (action.type) {
        case "UPDATE_SCREEN": {
        return state = action.payload
    }
        default:
    return state
}
}