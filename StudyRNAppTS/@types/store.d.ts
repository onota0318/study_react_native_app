//
// @types/store.d.ts
//
import { ThunkDispatch } from "redux-thunk";
import { AnyAction, Store } from "redux";

/**
 * A store applied redux-thunk
 *
 * @template S State object type.
 */
export interface StoreWithThunk<S> extends Store<S> {
    dispatch: ThunkDispatch<S, null, AnyAction>;
}
