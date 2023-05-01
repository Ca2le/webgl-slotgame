import { combineReducers } from "@reduxjs/toolkit";
import { game } from "../reducers/game.reducer";
import { screenSize } from "../reducers/screen_size.reducer";
import { gameEconomy } from "../reducers/game_economy.reducer";
import { autobet } from "../reducers/autobet.reducer";
import { loading } from "../reducers/loading.reducer";


export const rootReducer = combineReducers({
    // language: language.reducer,
    game,
    screenSize,
    gameEconomy,
    autobet,
    loading
    // settings: settings.reducer,
})