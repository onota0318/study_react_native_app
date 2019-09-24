/**
 * RootState
 * 
 * @package Store
 */
import { CounterState as Counter } from "@Store/counter/CounterState";
import { InputFormState as InputForm } from "@Store/InputForm/InputFormState";

/**
 * RootState
 */
export interface RootState {
    counter: Counter;
    inputForm: InputForm;
}
