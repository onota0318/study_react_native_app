/**
 * CounterAction
 * 
 * @package Store
 * @since XXXX/XX/XX
 */
import { AnyAction, Dispatch } from "redux";

/**
 * Action Type
 */
export enum CounterActionType {
    /**
     * 加算
     */
    ADD_COUNT = "COUNTER_ADD_COUNT",

    /**
     * リセット
     */
    RESET_COUNT = "COUNTER_RESET_COUNT",
}

/**
 * CounterAction
 */
export interface CounterAction extends AnyAction {
    type: CounterActionType;
    payload: {
        value: number,
    };
}

/**
 * 加算のAction
 * 
 * @param value 
 */
export const addCountAction = (val: number) => {
    return async (dispatch: Dispatch<CounterAction>) => {
        dispatch({
            type: CounterActionType.ADD_COUNT,
            payload: {
                value: val,
            },
        });
    };
};

/**
 * resetのAction
 * 
 * @param value 
 */
export const resetCountAction = () => {
    return async (dispatch: Dispatch<CounterAction>) => {
        dispatch({
            type: CounterActionType.RESET_COUNT,
            payload: {
                value: 0,
            },
        });
    };
};
