
import { Result } from "../types/global.types"
import { AssetStore, AssetAction } from "../types/reducer.types"


export function asset(state: AssetStore | null = null, action: AssetAction) {
    switch (action.type) {
        case "STORE_ASSET": {
            return state = { 
                ...state,
                imageAssets: action.payload
            }
        }
        default:
            return state
    }
}