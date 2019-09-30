/**
 * TextInputParts
 * TextInputパーツ
 * 
 * @package Component
 * @since XXXX/XX/XX
 */
import React from "react";
import { StyleSheet, TextInput } from "react-native";

/**
 * TextInputPartsProps
 * @interface
 */
interface TextInputPartsProps {
    /** @property {string} placeholder placeholder */
    placeholder: string;

    /** @property {any} value value */
    value: any;

    /** @property {Function} onChangeText onChangeText */
    onChangeText: (text: string) => void;
}

/**
 * TextInputParts
 * 
 * @param {TextInputPartsProps} props 
 */
const TextInputParts: React.FC<TextInputPartsProps> = (props: TextInputPartsProps) => (
    <TextInput
        placeholder={ props.placeholder }
        autoCorrect={ false }
        value={ props.value }
        style={ styles.inputStyle }
        onChangeText={ props.onChangeText }
        underlineColorAndroid="transparent"
    />
);

/**
 * style
 */
const styles = StyleSheet.create({
    inputStyle: {
        color: "#000",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 30,
        height: 50,
        borderWidth: 1,
        borderColor: "#333",
    },
});

export default TextInputParts;
