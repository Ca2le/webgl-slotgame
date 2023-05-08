
import { initialState } from "../const/const"
import { GameStatus } from "../network/slot_simulator"
import { Result } from "../types/global.types"
import { BobsMsgAction, GameAction } from "../types/reducer.types"


export interface BobsMsg {
    toggle: boolean
}

const initialGameStatus: BobsMsg = {
    toggle: true
}

export function bobsMsg(state: BobsMsg = initialGameStatus, action: BobsMsgAction) {
    switch (action.type) {
        case "TURN_ON_BOBSMSG": {
            const update = { toggle: true }
            return update
        }
        case "TURN_OFF_BOBSMSG": {
            const update = { toggle: false }
            return update
        }
        default:
            return state
    }
}