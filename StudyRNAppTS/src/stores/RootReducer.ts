/**
 * RootReducer
 * 
 * @package Store
 */
import { combineReducers } from "redux";
import { RootState } from "@Store/RootState";
import { counterReducer as counter } from "@Store/counter/CounterReducer";
import { inputFormReducer as inputForm } from "@Store/InputForm/InputFormReducer";

/**
 * RootReducer
 */
export const rootReducer = combineReducers<RootState>({
    counter,
    inputForm,
});
