/**
 * InputFormActionのtest
 * 
 * @package Store
 * @since XXXX/XX/XX
 */
import { MockStoreEnhanced } from "redux-mock-store";
import { getMockStore } from "../../utils/TestUtil";
import { initialState, RootState } from "@Store/RootState";
import { registerAction, InputFormActionType } from "@Store/InputForm/InputFormAction";

/**
 * InputFormActionのテスト
 */
describe("InputFormActionのテスト", () => {

    describe("registerActionのテスト", () => {

        let store: MockStoreEnhanced<RootState, {}>;

        beforeEach(() => {
            store = getMockStore(initialState);
        });

        describe("正常系", () => {
            it("正常値を渡したら[INPUT_FORM_REGISTER_SUCCESS]が返る", async () => {

                const id = "id1";
                const imageUrl = "http://yahoo.co.jp/";
                const body = "body1";

                await store.dispatch(registerAction(id, imageUrl, body) as any);
                const actions = store.getActions();
        
                expect(actions.length).toBe(3);
                expect(actions[0].type).toBe(InputFormActionType.LOADING_START);
                expect(actions[1].type).toBe(InputFormActionType.REGISTER_SUCCESS);
                expect(actions[2].type).toBe(InputFormActionType.LOADING_END);
            });    
        });

        describe("準正常系", () => {
            it("idが空文字だと[REGISTER_FAILED]が返る", async () => {
                const id = "";
                const imageUrl = "http://yahoo.co.jp/";
                const body = "body1";

                await store.dispatch(registerAction(id, imageUrl, body) as any);
                const actions = store.getActions();

                expect(actions.length).toBe(3);
                expect(actions[0].type).toBe(InputFormActionType.LOADING_START);
                expect(actions[1].type).toBe(InputFormActionType.REGISTER_FAILED);
                expect(actions[1].payload.errors.id).toBe("[id] は必須です。");
                expect(actions[2].type).toBe(InputFormActionType.LOADING_END);
            });
            
            it("imageUrlがURL形式以外だと[REGISTER_FAILED]が返る", async () => {
                const id = "";
                const imageUrl = "hoge://yahoo.co.jp/";
                const body = "body1";

                await store.dispatch(registerAction(id, imageUrl, body) as any);
                const actions = store.getActions();

                expect(actions.length).toBe(3);
                expect(actions[0].type).toBe(InputFormActionType.LOADING_START);
                expect(actions[1].type).toBe(InputFormActionType.REGISTER_FAILED);
                expect(actions[1].payload.errors.imageUrl).toBe("[imageUrl] はURL形式で入力してください。");
                expect(actions[2].type).toBe(InputFormActionType.LOADING_END);
            });

            it("bodyが空文字だと[REGISTER_FAILED]が返る", async () => {
                const id = "id";
                const imageUrl = "http://yahoo.co.jp/";
                const body = "";

                await store.dispatch(registerAction(id, imageUrl, body) as any);
                const actions = store.getActions();

                expect(actions.length).toBe(3);
                expect(actions[0].type).toBe(InputFormActionType.LOADING_START);
                expect(actions[1].type).toBe(InputFormActionType.REGISTER_FAILED);
                expect(actions[1].payload.errors.body).toBe("[body] は必須です。");
                expect(actions[2].type).toBe(InputFormActionType.LOADING_END);
            });

            test.todo("＼(^o^)／TODOコメント機能だー＼(^o^)／");
            test.todo("＼(^o^)／絶対後でもやらないやつやー＼(^o^)／");
        });
    });
});
