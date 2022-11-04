// @ts-nocheck

import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { AnyAction, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const masterReducer = (state: ReturnType<typeof rootReducer>, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }

        return nextState
    } else {
        return rootReducer(state, action)
    }
}

const initStore = () => createStore(masterReducer, applyMiddleware(thunk))

export const wrapper = createWrapper(initStore)