import { Texture } from "pixi.js";
import { Result } from "./global.types";

export type RootState = {
    game: Result | null;
    isLoading: boolean;
}

export type GameAction = {
    type: string,
    payload: Result
}

export type AssetStore = {
    imageAssets: Texture[];
}

export type AssetAction = {
    type: string,
    payload: Texture[]
}