import { Texture } from "pixi.js";
import { Autobet, GameEconomy, LoadingStatus, ScreenSize } from "./global.types";
import { GameStatus } from "../network/slot_simulator";
import { BobsMsg } from "../reducers/bobsmsg.reducer";

export type RootState = {
    game: GameStatus;
    screenSize: ScreenSize;
    gameEconomy: GameEconomy;
    autobet: Autobet;
    loading: LoadingStatus;
    bobsMsg: BobsMsg;
}

export type GameAction = {
    type: string,
    payload: GameStatus
}
export type BobsMsgAction = {
    type: string
}
export type ScreenAction = {
    type: string,
    payload: {
        height: number;
        width: number;
    }
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