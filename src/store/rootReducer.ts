import { combineReducers } from "@reduxjs/toolkit";
import { game } from "../reducers/game.reducer";


export const rootReducer = combineReducers({
    // language: language.reducer,
    // sound: sound.reducer,
    game
    // settings: settings.reducer,
})