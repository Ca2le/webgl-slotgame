import { Texture } from "pixi.js";
import { Result, ScreenSize } from "./global.types";
import { GameStatus } from "../network/slot_simulator";

export type RootState = {
    game: GameStatus;
    screenSize: ScreenSize;
}

export type GameAction = {
    type: string,
    payload: GameStatus
}


export type ScreenAction = {
    type: string,
    payload: ScreenSize
}