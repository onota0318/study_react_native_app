/**
 * RootState
 * 
 * @package Store
 */
import { 
    CounterState as Counter, 
    initialCounterState,
} from "@Store/counter/CounterState";
import { 
    InputFormState as InputForm,
    initialInputFormState,
} from "@Store/InputForm/InputFormState";

/**
 * RootState
 */
export interface RootState {
    counter: Counter;
    inputForm: InputForm;
}

/**
 * initialState
 */
export const initialState: RootState = {
    counter: initialCounterState,
    inputForm: initialInputFormState,
};
