/**
 * InputFormState
 * 
 * @package Store
 * @since XXXX/XX/XX
 */
import { ValidationErrorsType } from "@Types/error";

/**
 * InputFormState Interface
 * @interface
 */
export interface InputFormState {
    /** @property {boolean} isLoading 読み込み中？ */
    isLoading?: boolean;

    /** @property {boolean} hasError エラーあり？ */
    hasError?: boolean;

    /** @property {string} id id */
    id?: string;

    /** @property {string} imageUrl 画像url */
    imageUrl?: string;

    /** @property {string} body 本文 */
    body?: string;
    
    /** @property {ValidationErrorsType} errors エラーメッセージ配列（hasError=true） */
    errors?: ValidationErrorsType;
}

/**
 * 初期値
 */
export const initialInputFormState: InputFormState = {
    isLoading: false,
    hasError: false,
    id: "",
    imageUrl: "",
    body: "",
    errors: {},
};
