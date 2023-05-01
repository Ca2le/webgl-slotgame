import { Texture } from "pixi.js";
import { Autobet, GameEconomy, LoadingStatus, ScreenSize } from "./global.types";
import { GameStatus } from "../network/slot_simulator";

export type RootState = {
    game: GameStatus;
    screenSize: ScreenSize;
    gameEconomy: GameEconomy;
    autobet: Autobet;
    loading: LoadingStatus;
}

export type GameAction = {
    type: string,
    payload: GameStatus
}

export type ScreenAction = {
    type: string,
    payload: ScreenSize
}

export type GameEconomyAction = {
    type: string,
    payload: number
}

export type AutobetAction = {
    type: string,
    bets: number,
    status: boolean
}


export type LoadingAction = {
    type: string,
    payload: boolean
}