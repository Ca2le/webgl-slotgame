import { Result } from "./global.types";

export type RootState = {
    game: Result | null;
    isLoading: boolean;
}

export type GameAction = {
    type: string,
    payload: Result
}