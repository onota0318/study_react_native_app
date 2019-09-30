/**
 * TextAreaParts
 * TextAreaParts
 * 
 * @package Component
 * @since XXXX/XX/XX
 */
import React from "react";
import { StyleSheet } from "react-native";
import { Textarea } from "native-base";

/**
 * TextAreaPartsProps
 * @interface
 */
interface TextAreaPartsProps {
    /** @property {string} placeholder placeholder */
    placeholder: string;

    /** @property {any} value value */
    value: any;

    /** @property {Function} onChangeText onChangeText */
    onChangeText: (text: string) => void;
}

/**
 * TextAreaParts
 * 
 * @param {TextAreaPartsProps} props 
 */
const TextAreaParts: React.FC<TextAreaPartsProps> = (props: TextAreaPartsProps) => (
    <Textarea bordered
        rowSpan={ 5 }
        placeholder={ props.placeholder }
        underline={ false }
        autoCorrect={ false }
        value={ props.value }
        onChangeText={ props.onChangeText }
        style={styles.textareaStyle}
    />
);

/**
 * style
 */
const styles = StyleSheet.create({
    textareaStyle: {
        borderColor: "#333",
    },
});

export default TextAreaParts;
