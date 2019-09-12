/**
 * ReadScreen
 * リストの読み込み・一覧表示
 * 
 * @package Component
 * @since XXXX/XX/XX
 */
import React from "react";
import { StyleSheet } from "react-native";
import { View, Container, Card, CardItem, Body, Text } from "native-base";
import { NavigationProps } from "@Types/navigation";

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
export class ReadScreen extends React.Component<ReadScreenProps> {

    /**
     * render
     * 
     * @returns {React.ReactNode} 
     */
    public render(): React.ReactNode {
        return (
            <View style={{
                flex: 5,
                justifyContent: "center",
                alignItems: "center",                
            }}>
            <Text>{this.props.navigation.state.routeName}</Text>
            </View>                    
        );
    }
}
