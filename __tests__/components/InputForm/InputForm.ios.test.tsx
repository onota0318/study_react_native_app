/**
 * InputForm[ios]のtest
 * 
 * @package Components
 * @since XXXX/XX/XX
 */
import "react-native";
import React from "react";
import { ShallowWrapper } from "enzyme";
import { getMockComponent } from "../../utils/TestUtil";
import { InputForm } from "@Component/ios/InputForm"; // ← Redux Connectしてない状態のComponent

/**
 * InputForm[ios]のテスト
 */
describe("InputForm[ios]のテスト", () => {
    let component: ShallowWrapper;

    beforeEach(() => {
        component = getMockComponent(InputForm);
    });

    describe("スナップショットテスト", () => {
        it("スナップショットテスト", () => {
            expect(component).toMatchSnapshot();
        });    
    });

    describe("要素のテスト", () => {
        it("props.isLoading=trueだとspinnerが表示・submitボタンが非表示になる", () => {
            component.setProps({
                isLoading: true,
            });

            // spinner : 存在する
            expect(component.find({ "test-id": "input-form__spinner" }).exists()).toBeTruthy();

            // submit : 存在しない
            expect(component.find({ "test-id": "input-form__submit" }).exists()).toBeFalsy();

            component.setProps({
                isLoading: false,
            });

            // spinner : 存在しない
            expect(component.find({ "test-id": "input-form__spinner" }).exists()).toBeFalsy();

            // submit : 存在する
            expect(component.find({ "test-id": "input-form__submit" }).exists()).toBeTruthy();
        });

        it("props.errorsが存在する時にエラー表示要素が表示される", () => {

            // 初期：存在しない
            expect(component.find({ "test-id": "input-error__id" }).exists()).toBeFalsy();
            expect(component.find({ "test-id": "input-error__image_url" }).exists()).toBeFalsy();
            expect(component.find({ "test-id": "input-error__body" }).exists()).toBeFalsy();

            component.setProps({
                errors: {
                    id: "error_id",
                    imageUrl: "error_url",
                    body: "error_body",
                },
            });

            // 存在する
            expect(component.find({ "test-id": "input-error__id" }).exists()).toBeTruthy();
            expect(component.find({ "test-id": "input-error__image_url" }).exists()).toBeTruthy();
            expect(component.find({ "test-id": "input-error__body" }).exists()).toBeTruthy();
        });

        it("SubmitButtonParts.onPress()でprops.onRegisterが実行される事", () => {
            const mockFn = jest.fn();

            component.setProps({
                onRegister: mockFn,
            });

            component.find({ "test-id": "input-form__submit" }).props().onPress();
            expect(mockFn).toHaveBeenCalled();
        });
    });
});
