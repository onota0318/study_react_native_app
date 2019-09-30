/**
 * Firestoreのmock
 * 
 * @package Test
 * @since XXXX/XX/XX
 */
const collection: any = jest.fn(() => {
    return {
        doc: jest.fn(() => {
            return {
                collection,
                update: jest.fn(() => Promise.resolve(true)),
                onSnapshot: jest.fn(() => Promise.resolve(true)),
                get: jest.fn(() => Promise.resolve(true)),
                set: jest.fn(() => Promise.resolve(true)),
            };
        }),
        where: jest.fn(() => {
            return {
                get: jest.fn(() => Promise.resolve(true)),
                onSnapshot: jest.fn(() => Promise.resolve(true)),
            };
        }),
    };
});
  
const Firestore = () => {
    return {
        collection,
    };
};
  
Firestore.FieldValue = {
    serverTimestamp: jest.fn(),
};
  
export default Firestore;
