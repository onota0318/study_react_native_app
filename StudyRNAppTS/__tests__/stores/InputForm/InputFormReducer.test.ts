/**
 * InputFormReducerのtest
 * 
 * @package Store
 * @since XXXX/XX/XX
 */
import { inputFormReducer } from "@Store/InputForm/InputFormReducer";
import { initialInputFormState } from "@Store/InputForm/InputFormState";
import { InputFormActionType } from "@Store/InputForm/InputFormAction";

/**
 * InputFormReducerのtest
 */
describe("InputFormReducerのtest", () => {

    it("何も渡さない場合にinitialStateを返すこと", () => {
        const dummyAction = {
            type: "",
        };

        expect(inputFormReducer(undefined, dummyAction)).toEqual(initialInputFormState);
    });

    it("InputFormActionType.LOADING_STARTを渡すとisLoadingがtrueを返す事", () => {

        const dummyAction = {
            type: InputFormActionType.LOADING_START,
            payload: {
                isLoading: false,
                hasError: true,
                errors: { hoge: "fuga" },
            },
        };

        const expected = initialInputFormState;
        expected.isLoading = true;
        expected.hasError = false;
        expected.errors = {};
        
        const actual = inputFormReducer(undefined, dummyAction);
        expect(actual).toEqual(expected);
    });
    
    it("InputFormActionType.LOADING_ENDを渡すとisLoadingがfalseを返す事", () => {

        const dummyAction = {
            type: InputFormActionType.LOADING_END,
            payload: {
                isLoading: true,
            },
        };

        const expected = initialInputFormState;
        expected.isLoading = false;
        
        const actual = inputFormReducer(undefined, dummyAction);
        expect(actual).toEqual(expected);
    });

    it("InputFormActionType.REGISTER_SUCCESSを渡すとhasErrorがfalseを返す事", () => {

        const dummyAction = {
            type: InputFormActionType.REGISTER_SUCCESS,
            payload: {
                hasError: true,
                errors: { hoge: "fuga" },
            },
        };

        const expected = initialInputFormState;
        expected.hasError = false;
        
        const actual = inputFormReducer(undefined, dummyAction);
        expect(actual).toEqual(expected);
    });

    it("InputFormActionType.REGISTER_FAILEDを渡すとhasErrorがtrueを返す事", () => {

        const dummyAction = {
            type: InputFormActionType.REGISTER_FAILED,
            payload: {
                hasError: false,
                errors: { hoge: "fuga" },
            },
        };

        const expected = initialInputFormState;
        expected.hasError = true;
        expected.errors = { hoge: "fuga" };
        
        const actual = inputFormReducer(undefined, dummyAction);
        expect(actual).toEqual(expected);
    });
});
