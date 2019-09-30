/**
 * ElementCardParts
 * Cardパーツ
 * 
 * @package Component
 * @since XXXX/XX/XX
 */
import React from "react";
import { StyleSheet } from "react-native";
import { 
    Card, 
    CardItem, 
    Body, 
    Text,
    Left,
    Thumbnail,
} from "native-base";

/**
 * ElementCardPartsProps
 * @interface
 */
interface ElementCardPartsProps {
    /** @property {number} id id */
    id: number;

    /** @property {string} imageUrl 画像URL */
    imageUrl: string;

    /** @property {string} body 本文 */
    body: string;
}

/**
 * ElementCardParts
 */
const ElementCardParts: React.FC<ElementCardPartsProps> = (props: ElementCardPartsProps) => (
    <Card style={ styles.cardContainer }>
        <CardItem style={ styles.cardItem }>
            <Left>
                <Thumbnail 
                    size={ 100 }
                    square={ true }
                    circular={ false }
                    source={{ uri: props.imageUrl }} 
                    style={ styles.thumbnail }
                />
                <Body>
                    <Text style={ styles.text }>
                        本文 { props.id }
                    </Text>
                </Body>            
            </Left>
        </CardItem>
    </Card>
);

/**
 * styles
 */
const styles = StyleSheet.create({
    cardContainer: {
        borderColor: "black", 
        borderWidth: 2, 
        borderRadius: 8,
    },
    cardItem: {
        borderRadius: 8,
    },
    thumbnail: {
        borderWidth: 0.5,
        borderColor: "gray",
    },
    text: {
        fontSize: 14,
    },
});

export default ElementCardParts;
