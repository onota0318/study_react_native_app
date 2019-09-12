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
import React from "react";
import { Provider } from "react-redux";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { initializeStore } from "@Store/InitializeStore";
import { Routes as IOSRoutes } from "@Component/ios/routes";
import { Routes as AndroidRoutes } from "@Component/android/routes";

// Route
const Route = Platform.select({
    ios: IOSRoutes,
    android: AndroidRoutes,
});

// Container
const Container = createAppContainer(Route);

// store
const store = initializeStore();

// App
const App = () => (
    <Provider store={store}>
        <Container />
    </Provider>
);

export default App;
