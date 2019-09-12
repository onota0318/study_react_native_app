/**
 * RootState
 * 
 * @package Store
 */
import { CounterState as counter } from "@Store/counter/CounterState";

/**
 * RootState
 * 
 */
export interface RootState {
    /**
     * @property {string} hoge
     */
    counter: counter;
}
