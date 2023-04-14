import { combineReducers } from "@reduxjs/toolkit";
import { game } from "../reducers/game.reducer";
import { isLoading } from "../reducers/is_loading.reducer";


export const rootReducer = combineReducers({
    // language: language.reducer,
    // sound: sound.reducer,
    game,
    isLoading
    // settings: settings.reducer,
})