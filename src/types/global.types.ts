import { Sprite } from "pixi.js"

export enum Icons {
    A_10 = "../assets/asset_1.png",
    A_J = "../assets/asset_2.png",
    A_Q = "../assets/asset_3.png",
    A_K = "../assets/asset_4.png",
    A_A = "../assets/asset_5.png",
    A_Scatter = "../assets/asset_6.png",
    A_Wild = "../assets/asset_7.png",
    A_Bonus = "../assets/asset_8.png",
}

export type Value = "10" | "J" | "Q" | "K" | "A" | "SCATTER" | "WILD" | "BONUS"

export type Result = Value[][]

export type SpriteGrid = Sprite[][]

export interface GameState {
    result: Result
}

export interface Action {
    type: "",
    payload: ""
}

export interface ScreenSize {
    fullView: {
        readonly width: number,
        readonly height: number
    },
    maskSize: {
        readonly width: number,
        readonly height: number
    },
    gridSize: {
        readonly width: number,
        readonly height: number
    },
    UI_Size: {
        readonly width: number,
        readonly height: number
    },
    symbolSize: {
        readonly width: number,
        readonly height: number
    }


}

export enum GameDimensions {
    aspectRatio = 8 / 10,
    maxWidth = 1000,
    maxHeight = maxWidth * aspectRatio,
    minWidth = 500,
    minHeight = minWidth * aspectRatio,

}

export interface MakeReelsSpinProps {
    
}