
import { Autobet } from "../types/global.types"
import { AutobetAction } from "../types/reducer.types"

const initialAutoState = {
    numbersOfBets: 0,
    autoLoading: false,
}

export function autobet(state: Autobet = initialAutoState, action: AutobetAction) {
    switch (action.type) {
        case "SET_AMOUNT_OF_BETS": {
            let numbersOfBets = action.bets
            return { numbersOfBets, autoLoading: true }
        }
        case "DECREMENT_AUTOBET": {
            let numbersOfBets = state.numbersOfBets
            if (numbersOfBets > 0) {
                numbersOfBets -= 1
                return { ...state, numbersOfBets }
            }
            else return state
        } case "SET_AUTO_LOADING": {
            const status = action.status
            return { numbersOfBets: 0, autoLoading: status }
        }
        default:
            return state
    }
}