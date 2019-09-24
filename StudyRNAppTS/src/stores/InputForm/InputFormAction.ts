/**
 * InputFormAction
 * 
 * @package Store
 * @since XXXX/XX/XX
 */
import { AnyAction, Dispatch } from "redux";
import { InputFormState } from "@Store/InputForm/InputFormState";
import { ValidationException } from "@Lib/error/ValidationException";
import { 
    RegisterFormUseCaseFactory, 
    RegisterFormUseCase,
} from "@Logic/usecases/RegisterFormUseCase";

/**
 * Action Type
 */
export enum InputFormActionType {
    /**
     * loading
     */
    LOADING_START = "INPUT_FORM_LOADING_START",

    /**
     * loading
     */
    LOADING_END = "INPUT_FORM_LOADING_END",

    /**
     * 登録成功
     */
    REGISTER_SUCCESS = "INPUT_FORM_REGISTER_SUCCESS",

    /**
     * 登録失敗
     */
    REGISTER_FAILED = "INPUT_FORM_REGISTER_FAILED",
}

/**
 * InputFormAction
 */
export interface InputFormAction extends AnyAction {
    type: InputFormActionType;
    payload?: InputFormState;
}

/**
 * 登録Action
 * 
 * @param id 
 * @param imageUrl 
 * @param body 
 */
export const registerAction = (id: string, imageUrl: string, body: string) => {
    return async (dispatch: Dispatch<InputFormAction>) => {

        // 開始
        dispatch({ type: InputFormActionType.LOADING_START });

        // logic
        const usecase: RegisterFormUseCase 
            = RegisterFormUseCaseFactory.create({id, imageUrl, body});

        try {
            usecase.validate();
            usecase.execute();

            dispatch({ type: InputFormActionType.REGISTER_SUCCESS });

        } catch (e) {
            let errors = {};

            // validation error時は
            if (e instanceof ValidationException) {
                errors = e.errors;
            } else {
                // logging
                console.log(e);
            }

            dispatch({
                type: InputFormActionType.REGISTER_FAILED,
                payload: {
                    errors,
                },
            });
        } finally {
            dispatch({ type: InputFormActionType.LOADING_END });
        }
    };
};
