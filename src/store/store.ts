import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

const config = {
    reducer: rootReducer
}

export const store = configureStore(config)



