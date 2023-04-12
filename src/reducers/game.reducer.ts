import { Action } from "@reduxjs/toolkit"


export function game(state = 0, action: Action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}