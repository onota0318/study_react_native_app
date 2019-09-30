/**
 * CreateScreen[android]のtest
 * 
 * @package Components
 * @since XXXX/XX/XX
 */
import "react-native";
import React from "react";
import { getMockConnectedComponent } from "../../utils/TestUtil";
import { initialState } from "@Store/RootState";
import { CreateScreen } from "@Component/android/screen/CreateScreen";

/**
 * 一番外側（？）のscreenはsnapshotのみ
 */
describe("CreateScreen[android]のテスト", () => {
    
    it("スナップショットテスト", () => {
        const component = getMockConnectedComponent(CreateScreen, initialState);
        expect(component).toMatchSnapshot();
    });
});
