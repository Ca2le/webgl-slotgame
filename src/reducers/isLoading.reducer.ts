interface Action {
    type: string,
    payload: boolean
}

export function isLoading(state = false, action: Action) {
    switch (action.type) {
       case 'LOADING' : {
        action.payload 
        return state = action.payload
       }
        default:
            return state
    }
}