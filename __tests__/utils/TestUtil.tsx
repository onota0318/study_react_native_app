/**
 * ComponentTestUtils
 * 
 * @package Components
 * @since XXXX/XX/XX
 */
import React from "react";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import thunk from "redux-thunk";
import { RootState } from "@Store/RootState";
import { Dispatch } from "@Types/dispatch";
import { shallow, ShallowWrapper } from "enzyme";

/**
 * Redux ConnectされたComponentのmockを作る
 * 
 * @param Component 
 * @param initState 
 * @param options
 * 
 * @returns {ShallowWrapper}
 */
type ComponentType = typeof React.Component | React.FC | React.ElementType;
export function getMockConnectedComponent(
        Component: ComponentType, 
        initState: RootState,
    ): ShallowWrapper {

    const store = getMockStore(initState);
    store.dispatch = jest.fn();

    return shallow(
        <Provider store={ store }>
            <Component />
        </Provider>,
    ); 
}

/**
 * connectしないcomponentのmock
 * 
 * @param Component 
 * @returns {ShallowWrapper}
 */
export function getMockComponent(Component: ComponentType): ShallowWrapper {
    return shallow(<Component />);
}

/**
 * storeのmockを作る
 * 
 * @param initState 
 * 
 * @returns {MockStoreEnhanced}
 */
export function getMockStore(initState: RootState): MockStoreEnhanced<RootState, {}> {

    type DispatchExts = Dispatch;

    const mockStore = configureStore<RootState, DispatchExts>([thunk]);
    return mockStore(initState);
}
