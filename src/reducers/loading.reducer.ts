import { LoadingStatus } from "../types/global.types"
import { LoadingAction } from "../types/reducer.types"

const initialLoading: LoadingStatus = {
    status: false
}

export function loading(state: LoadingStatus = initialLoading, action: LoadingAction) {
    switch (action.type) {
        case "LOADING": {
            const status = true
            return { status }
        }
        case "NOT_LOADING": {
            const status = false
            return { status }
        }
        default:
            return state
    }
}
