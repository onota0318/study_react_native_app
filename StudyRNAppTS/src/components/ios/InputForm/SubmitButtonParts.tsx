/**
 * SubmitButtonParts
 * SubmitButtonParts
 * 
 * @package Component
 * @since XXXX/XX/XX
 */
import React from "react";
import { StyleSheet } from "react-native";
import { Text, Button } from "native-base";

/**
 * SubmitButtonPartsProps
 * @interface
 */
interface SubmitButtonPartsProps {
    /** @property {string} displayText displayText */
    displayText: string;

    /** @property {Function} onPress onPress */
    onPress: () => void;
}

/**
 * SubmitButtonPartsProps
 * 
 * @param {SubmitButtonPartsProps} props 
 */
const SubmitButtonParts: React.FC<SubmitButtonPartsProps> = (props: SubmitButtonPartsProps) => (
    <Button bordered 
        textStyle={ styles.textStyle }
        onPress={ props.onPress }
    >
        <Text>
        { props.displayText }
        </Text>
    </Button>

);

/**
 * style
 */
const styles = StyleSheet.create({
    textStyle: {
        alignSelf: "center",
        color: "#007aff",
        fontSize: 16,
        fontWeight: "600",
        paddingBottom: 10,
        paddingTop: 10,
    },
});

export default SubmitButtonParts;
