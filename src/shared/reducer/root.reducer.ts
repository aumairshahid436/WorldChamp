import { combineReducers } from "redux";
import { appReducer } from "./app.reducer";

export const rootReducer = combineReducers({
    appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
