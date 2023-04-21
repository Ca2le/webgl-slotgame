import { combineReducers } from "@reduxjs/toolkit";
import { game } from "../reducers/game.reducer";
import { screenSize } from "../reducers/screen_size.reducer";


export const rootReducer = combineReducers({
    // language: language.reducer,
    game,
    screenSize
    // settings: settings.reducer,
})