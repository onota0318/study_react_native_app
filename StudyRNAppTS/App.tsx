/**
 * App EntryPoint
 * 
 * ./index.jsに呼ばれてる
 * 拡張子でdevice分けられるが、Redux Storeを流す処理をここで纏めてやるつもり
 * 分けずに頑張る
 * 
 * @package App
 * @since XXXX/XX/XX
 */
import "reflect-metadata";
import React from "react";
import { Provider } from "react-redux";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { initializeStore } from "@Store/InitializeStore";
import { Routes as IOSRoutes } from "@Component/ios/routes";
import { Routes as AndroidRoutes } from "@Component/android/routes";
import ErrorBoundary from "@Component/common/error/ErrorBoundary";

// Native Error Handling
// 何も試してないけど忘れない様においておく
const defaultHandler = ErrorUtils.getGlobalHandler();
ErrorUtils.setGlobalHandler((error: Error, isFatal: boolean = false) => {
    //
    defaultHandler(error, isFatal);
});

// Route
const Route = Platform.select({
    ios: IOSRoutes,
    android: AndroidRoutes,
});

// Container（型エラーうるさいからanyにキャストして黙らせる）
const Container = createAppContainer(Route as any);

// store
const store = initializeStore();

// App
const App = () => (
    <Provider store={store}>
        <ErrorBoundary>
            <Container />
        </ErrorBoundary>
    </Provider>
);

export default App;
