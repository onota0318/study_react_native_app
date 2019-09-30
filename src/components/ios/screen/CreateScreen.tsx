/**
 * CreateScreen
 * リストの作成
 * 
 * @package Component
 * @since XXXX/XX/XX
 */
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { H1 } from "native-base";
import { NavigationProps } from "@Types/navigation";
import InputForm from "@Component/ios/InputForm";

/**
 * @var {string} SCREEN_ID 画面ID
 */
export const SCREEN_ID = "CreateScreen";

/**
 * CreateScreen
 */
export const CreateScreen: React.FC<{}> = () => (
    <SafeAreaView style={ styles.container }>
        <InputForm />
    </SafeAreaView>
);

/**
 * style
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        margin: 10,
    },
    h1: {
        padding: 10,
        margin: 10,
    },
});
