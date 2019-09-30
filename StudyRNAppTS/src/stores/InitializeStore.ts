/**
 * initialize store
 * 
 * @package Store
 */
import { createStore, applyMiddleware, AnyAction, Store } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
// import createLogger from "redux-logger";
import { RootState, initialState } from "@Store/RootState";
import { rootReducer } from "@Store/RootReducer";
import { StoreWithThunk } from "@Types/store";

// const logger = createLogger({});

/**
 * Storeを作成
 *
 * @export
 * @returns {Store}
 */
export function initializeStore(): Store<RootState> {

    const store: StoreWithThunk<RootState> = createStore<RootState, AnyAction, any, any>(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk, logger)),
    );

    // 最初の下準備系はここでやっとくぽい
    // store.dispatch();

    return store;
}
