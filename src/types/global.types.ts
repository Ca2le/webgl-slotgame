import { Sprite } from "pixi.js"

export enum Icons {
    A_TEN = "../assets/asset_1.png",
    A_J = "../assets/asset_2.png",
    A_Q = "../assets/asset_3.png",
    A_K = "../assets/asset_4.png",
    A_A = "../assets/asset_5.png",
    A_Scatter = "../assets/asset_6.png",
    A_Wild = "../assets/asset_7.png",
    A_Bonus = "../assets/asset_8.png",
}
export type SimpleValue = "TEN" | "J" | "Q" | "K" | "A" | "WILD"
export type Value = "TEN" | "J" | "Q" | "K" | "A" | "SCATTER" | "WILD" | "BONUS" | "TEN__" | "J__" | "Q__" | "K__" | "A__" | "SCATTER__" | "WILD__" | "BONUS__"
export type Assets = "PAYLINES" | "TEN" | "J" | "Q" | "K" | "A" | "SCATTER" | "WILD" | "BONUS" | "BACKGROUND" | "ANVIL_1" | "ANVIL_2" | "SHIELD" | "SETTINGSDISPLAY" | "HAMMER" | "GOLD" | "DECREMENT" | "INCREMENT" | "BOARD" | "DISPLAY"
export type Result = Value[][]

export type SpriteGrid = Sprite[][]

export interface GameState {
    result: Result
}

export interface Action {
    type: "",
    payload: ""
}

export type Payline = number[][]

export interface ScreenSize {
    readonly max: {
        readonly width: number,
        readonly height: number
    },
    gameContainer: {
        readonly width: number,
        readonly height: number
    },
    readonly mask: {
        readonly width: number,
        readonly height: number
    },
    readonly grid: {
        readonly width: number,
        readonly height: number
    },
    readonly UI_: {
        readonly width: number,
        readonly height: number
    },
    readonly symbol: {
        readonly fullSize: number,
        readonly graphSize: number,
        readonly spriteSize: number,
    }
}

export enum GameDimensions {
    aspectRatio = 8 / 10,
    maxWidth = 1000,
    maxHeight = maxWidth * aspectRatio,
    minWidth = 500,
    minHeight = minWidth * aspectRatio,

}

export interface GameEconomy {
    readonly bet: number,
    readonly coinValue: {
        value: number,
        dec_locked: boolean,
        inc_locked: boolean
    }
    readonly coins: number,
    readonly win: number
}

export interface Autobet {
    readonly numbersOfBets: number,
    readonly autoLoading: boolean
}

export interface LoadingStatus {
    readonly status: boolean
}
