/**
 * inputFormReducer
 * 
 * @package Store
 */
import { Reducer, AnyAction } from "redux";
import { InputFormState, initialInputFormState } from "@Store/InputForm/InputFormState";
import { InputFormActionType as ActionType } from "@Store/InputForm/InputFormAction";

/**
 * inputFormReducer
 * @returns {InputFormState}
 */
export const inputFormReducer: Reducer<InputFormState> 
    = (state: InputFormState = initialInputFormState, action: AnyAction): InputFormState => {

        switch (action.type) {
            case ActionType.LOADING_START:
                return {
                    ...state,
                    isLoading: true,
                    hasError: false,
                    errors: {},
                };

            case ActionType.LOADING_END:
                return {
                    ...state,
                    isLoading: false,
                };
            
            case ActionType.REGISTER_SUCCESS:
                return {
                    ...state,
                    hasError: false,
                    errors: {},
                };

            case ActionType.REGISTER_FAILED:
                return {
                    ...state,
                    hasError: true,
                    errors: action.payload.errors,
                };
        
            default:
                return state;
    }
};
