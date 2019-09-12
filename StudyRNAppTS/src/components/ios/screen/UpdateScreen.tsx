/**
 * UpdateScreen
 * リストの更新
 * 
 * @package Component
 * @since XXXX/XX/XX
 */
import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "native-base";
import { NavigationProps } from "@Types/navigation";

/**
 * @var {string} SCREEN_ID 画面ID
 */
export const SCREEN_ID = "UpdateScreen";

/**
 * UpdateScreenProps
 */
type UpdateScreenProps = NavigationProps;

/**
 * UpdateScreen
 */
export class UpdateScreen extends React.Component<UpdateScreenProps> {

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
