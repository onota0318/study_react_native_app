/**
 * CounterReducer
 * 
 * @package Store
 */
import { Reducer, AnyAction } from "redux";
import { CounterState, initialCounterState } from "@Store/counter/CounterState";
import { CounterActionType as ActionType } from "@Store/counter/CounterAction";

/**
 * counterReducer
 * @returns {CounterState}
 */
export const counterReducer: Reducer<CounterState> 
    = (state: CounterState = initialCounterState, action: AnyAction): CounterState => {

        switch (action.type) {
        case ActionType.ADD_COUNT:
            return {
                ...state,
                value: state.value + action.payload.value,
            };
        
        case ActionType.RESET_COUNT:
            return {
                ...state,
                value: 0,
            };

        default:
            return state;
    }
};
