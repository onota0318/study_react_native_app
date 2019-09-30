/**
 * Collection
 * 
 * @package Logic
 * @since XXXX/XX/XX
 */
import firestore, { Firestore } from "@react-native-firebase/firestore";

/**
 * Collectionの親
 */
export abstract class Collection {

    /** @property {string} collectionKey */
    protected abstract collectionKey: string;

    /**
     * collection getter
     * 
     * @returns {Firestore.CollectionReference}
     */
    protected get collection(): Firestore.CollectionReference {
        return firestore().collection(this.collectionKey);
    }
}
