
import { initialState } from "../const/const"
import { GameStatus } from "../network/slot_simulator"
import { Result } from "../types/global.types"
import { GameAction } from "../types/reducer.types"

const initialGameStatus: GameStatus = {
    grid: initialState,
    win: {
        scatters: [],
        threeInARow: [],
        fourInARow: [],
        fiveInARow: [],
    }
}

export function game(state: GameStatus = initialGameStatus, action: GameAction) {
    switch (action.type) {
        case "UPDATE_DATA": {
            return state = action.payload
        }
        default:
            return state
    }
}