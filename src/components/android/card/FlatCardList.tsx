/**
 * FlatCardList
 * Cardパーツのリスト化
 * 
 * @package Component
 * @since XXXX/XX/XX
 */
import React from "react";
import { FlatList } from "react-native";
import ElementCardParts from "@Component/android/card/ElementCardParts";

/**
 * ItemType
 * @interface
 */
interface ItemType {
    id: number;
    body: string;
}

// item
const items: ItemType[] = [];
for (let iii = 1; iii <= 20; ++iii) {
    items.push({
        id: iii,
        body: `本文${iii}`,
    });
}

/**
 * 画像URLの組み立て（slack絵文字のサイト拝借）
 * 
 * @param {number} id id
 */
const builtImageUrl = (id: number) => {
    return `https://emoji-gen.ninja/emoji?align=center&back_color=FFFFFF00&color=6E06943F&font=notosans-mono-bold&locale=ja&public_fg=true&size_fixed=false&stretch=true&text=Sample%0A%E3%82%B5%E3%83%A0%E3%83%8D%0A${id}`;
};    

/**
 * FlatList - renderItem
 * 
 * @param param0 
 */
const handleRenderItem = ({ item }: { item: ItemType }): React.ReactElement => (
    <ElementCardParts 
        id={ item.id } 
        imageUrl={ builtImageUrl(item.id) }
        body={ item.body }
    />
);

/**
 * FlatList - keyExtractor
 * 
 * @param item 
 */
const handleKeyExtractor = (item: { id: number }) => {
    return `flatcardlist_${item.id}`;
};

/**
 * FlatCardList
 */
const FlatCardList: React.FC<{}> = () => {

    return (
        <FlatList<ItemType>
            data={ items }
            // extraData={ こっちが更新時データ }
            renderItem={handleRenderItem}
            keyExtractor={handleKeyExtractor}
            // onEndReachedThreshold={ 10 }
            // onEndReached={}
        >
        </FlatList>
    );
};

export default FlatCardList;
