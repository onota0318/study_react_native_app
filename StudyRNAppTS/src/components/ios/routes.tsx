/**
 * iOS routes
 * 
 * @package Component
 * @since XXXX/XX/XX
 */
import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/Entypo";

import { 
    CreateScreen, 
    SCREEN_ID as CREATE_SCREEN_ID,
} from "@Component/ios/screen/CreateScreen";

import ReadScreen, { SCREEN_ID as READ_SCREEN_ID } from "@Component/ios/screen/ReadScreen";

import { 
    UpdateScreen, 
    SCREEN_ID as UPDATE_SCREEN_ID,
} from "@Component/ios/screen/UpdateScreen";

import { 
    DeleteScreen, 
    SCREEN_ID as DELETE_SCREEN_ID,
} from "@Component/ios/screen/DeleteScreen";

/**
 * Routing
 * 実運用では全包含的に作らない
 * @see https://reactnavigation.org/docs/en/stack-navigator.html
 * @see https://oblador.github.io/react-native-vector-icons/ [Entypo]
 * 
 * （createBottomTabNavigatorの型定義が公式docと違う・・・？）
 */
export const Routes = createBottomTabNavigator({
    [CREATE_SCREEN_ID]: {
        screen: CreateScreen,
        navigationOptions: {
            title: "Create",
            tabBarIcon: ({ focused }) => (
                <BottomTabIcon name={"pencil"} focused={focused} />
            ),
        },
    },
    [READ_SCREEN_ID]: {
        screen: ReadScreen,
        navigationOptions: {
            title: "Read",
            tabBarIcon: ({ focused }) => (
                <BottomTabIcon name={"open-book"} focused={focused} />
            ),
        },
    },
    [UPDATE_SCREEN_ID]: {
        screen: UpdateScreen,
        navigationOptions: {
            title: "Update",
            tabBarIcon: ({ focused }) => (
                <BottomTabIcon name={"upload"} focused={focused} />
            ),
        },
    },
    [DELETE_SCREEN_ID]: {
        screen: DeleteScreen,
        navigationOptions: {
            title: "Delete",
            tabBarIcon: ({ focused }) => (
                <BottomTabIcon name={"trash"} focused={focused} />
            ),
        },
    },
}, {});

/**
 * BottomTabIconProps
 * @interface
 */
interface BottomTabIconProps {
    focused: boolean;
    name: string;
}

/**
 * BottomTabIcon
 * @param {BottomTabIconProps} props 
 */
const BottomTabIcon = (props: BottomTabIconProps) => (
    <Icon 
        name={props.name}
        style={props.focused
            ? styles.focusedIcon
            : styles.unfocusedIcon
        }
    />
);

/**
 * style
 */
const styles = StyleSheet.create({
    focusedIcon: { 
        fontSize: 20, 
        color: "black",
    },
    unfocusedIcon: { 
        fontSize: 20, 
        color: "gray",
    },
});
