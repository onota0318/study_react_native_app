/**
 * SampleListCollection
 * 
 * @package Logic
 * @since XXXX/XX/XX
 */
import firestore from "@react-native-firebase/firestore";
import { Collection } from "@Logic/models/Collection";

/**
 * SampleListCollection
 */
export class SampleListCollection extends Collection {

    /** @property {string} collectionKey */
    protected collectionKey: string = "sample_list";

    /**
     * form data を set する
     * 
     * @param id 
     * @param imageUrl 
     * @param body 
     */
    public setFormData(id: string, imageUrl: string, body: string): void {
        
        const ts = firestore.FieldValue.serverTimestamp();

        // sampleだしTransactionとかdoc idのコリジョンとか気にしない
        this.collection.doc().set({
            id,
            imageUrl,
            body,
            createdAt: ts,
            updatedAt: ts,
        });
    }
}
