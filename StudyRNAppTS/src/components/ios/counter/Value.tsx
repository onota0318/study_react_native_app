/**
 * CounterValue
 * 
 * @package Component
 * @since XXXX/XX/XX
 */
import React from "react";
import { Text, StyleSheet } from "react-native";

/**
 * CounterValueProps
 * @interface
 */
export interface CounterValueProps {
    value: number;
}

/**
 * CounterValue
 * 
 * @param props 
 */
export const CounterValue: React.FC<CounterValueProps> = (props: CounterValueProps) => {
    return (
        <>
        <Text style={styles.countText}>
            {(props.value === undefined) ? 0 : props.value}
        </Text>
        </>
    );
};

/**
 * style
 */
const styles = StyleSheet.create({
    countText: {
        flex: 0.2,
        fontSize: 90,
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "bottom",
        color: "black",
    },
});
