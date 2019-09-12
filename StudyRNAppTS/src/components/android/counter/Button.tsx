/**
 * Button
 * 
 * @package Component
 * @since XXXX/XX/XX
 */
import React from "react";
import { Button, Text } from "native-base";

/**
 * CounterButtonProps
 * @interface
 */
export interface CounterButtonProps {
    title: string;
    onPressEvent: () => void;
}

/**
 * CounterButton
 * @param props 
 */
export const CounterButton: React.FC<CounterButtonProps> = (props: CounterButtonProps) => {
    return (
        <>
        <Button 
            bordered
            onPress={props.onPressEvent}>
            <Text>{props.title}</Text>
        </Button>
        </>
    );
};
