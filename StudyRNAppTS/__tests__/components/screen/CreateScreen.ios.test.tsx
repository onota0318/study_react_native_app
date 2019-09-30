/**
 * CreateScreen[ios]のtest
 * 
 * @package Components
 * @since XXXX/XX/XX
 */
import "react-native";
import React from "react";
import { getMockConnectedComponent } from "../../utils/TestUtil";
import { initialState } from "@Store/RootState";
import { CreateScreen } from "@Component/ios/screen/CreateScreen";

/**
 * 一番外側（？）のscreenはsnapshotのみ
 */
describe("CreateScreen[ios]のテスト", () => {
    
    it("スナップショットテスト", () => {
        const component = getMockConnectedComponent(CreateScreen, initialState);
        expect(component).toMatchSnapshot();
    });
});
