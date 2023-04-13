
import { Result } from "../types/global.types"
import { GameAction } from "../types/reducer.types"


export function game(state: Result | null = null, action: GameAction) {
    switch (action.type) {
        case "UPDATE_DATA": {
            return state = action.payload
        }
        default:
            return state
    }
}