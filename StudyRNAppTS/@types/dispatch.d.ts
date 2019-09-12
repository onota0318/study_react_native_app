/**
 * dispatch.d.ts
 * Redux Middleware系のdispatch型をalias取るだけ
 * 
 * @package Types
 */
import { ThunkDispatch } from "redux-thunk";

// dispatch
export declare type Dispatch = ThunkDispatch<any, void, any>;
