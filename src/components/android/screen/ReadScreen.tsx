/**
 * ReadScreen
 * リストの読み込み・一覧表示
 * 
 * @package Component
 * @since XXXX/XX/XX
 */
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { H1 } from "native-base";
import { NavigationProps } from "@Types/navigation";
import FlatCardList from "@Component/ios/card/FlatCardList";

/**
 * @var {string} SCREEN_ID 画面ID
 */
export const SCREEN_ID = "ReadScreen";

/**
 * ReadScreenProps
 */
type ReadScreenProps = NavigationProps;

/**
 * ReadScreen
 */
class ReadScreen extends React.Component<ReadScreenProps> {

    /**
     * render
     * 
     * @returns {React.ReactNode} 
     */
    public render(): React.ReactNode {
        return (
            <SafeAreaView style={ styles.container }>
                <H1 style={ styles.h1 }>{ this.props.navigation.state.routeName }</H1>
                <FlatCardList />
            </SafeAreaView>           
        );
    }
}

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

export default ReadScreen;
