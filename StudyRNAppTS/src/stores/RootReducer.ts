/**
 * RootReducer
 * 
 * @package Store
 */
import { combineReducers } from "redux";
import { RootState } from "@Store/RootState";
import { counterReducer as counter } from "@Store/counter/CounterReducer";

/**
 * RootReducer
 */
export const rootReducer = combineReducers<RootState>({
    counter,
});
