/**
 * CounterState
 * 
 * @package Store
 * @since XXXX/XX/XX
 */

/**
 * CounterState Interface
 * @interface
 */
export interface CounterState {
    /**
     * @property {number} value 値
     */
    value: number;
}

/**
 * 初期値
 */
export const initialCounterState: CounterState = {
    value: 0,
};
