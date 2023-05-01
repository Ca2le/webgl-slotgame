import { GameEconomy } from "../types/global.types"
import { GameEconomyAction } from "../types/reducer.types"

const initialEconomy: GameEconomy = {
    bet: 1,
    coinValue: {
        value: 1,
        dec_locked: true,
        inc_locked: false
    },
    coins: 1_000,
    win: 0,
}

export function gameEconomy(state: GameEconomy = initialEconomy, action: GameEconomyAction) {
    switch (action.type) {
        case "ADD_COINS": {
            const currentCoins = state.coins
            const priceMoney = action.payload
            const coins = currentCoins + priceMoney
            return {...state, coins}
        }
        case "REMOVE_COINS": {
            const currentCoins = state.coins
            const amount = state.bet * 9
            const coins = currentCoins - amount
            return {...state, coins}
        }
        case "INCREMENT_COINVALUE": {
            let value = state.coinValue.value
            let inc_locked = state.coinValue.inc_locked
            let dec_locked = state.coinValue.dec_locked
            let coins = state.coins
            let win = state.win
            if (value < 3 && !inc_locked) {
                value += 1
                coins = state.coins * value
                win = state.win * value
                dec_locked = false
            }
            if (value === 3) {
                inc_locked = true
            }

            return { ...state, coinValue: { dec_locked, inc_locked, value }, coins, win }
        }

        case "DECREMENT_COINVALUE": {
            let value = state.coinValue.value
            let inc_locked = state.coinValue.inc_locked
            let dec_locked = state.coinValue.dec_locked
            let coins = state.coins
            let win = state.win

            if (value > 1 && !dec_locked) {
                coins = state.coins / value
                win = state.win / value
                value -= 1
                inc_locked = false
            }
            if (value === 1) {
                dec_locked = true
            }

            return { ...state, coinValue: { dec_locked, inc_locked, value }, coins, win }
        }
        case "INCREMENT_BET": {
            let bet = state.bet
            if (bet === 1) {
                bet = 2
            }
            return { ...state, bet }
        }

        case "DECREMENT_BET": {
            let bet = state.bet
            if (bet === 2) {
                bet = 1
            }
            return { ...state, bet }
        }

        default:
            return state
    }
}