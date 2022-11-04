// @ts-nocheck

import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { AnyAction, createStore } from "redux";
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

const initStore = () => createStore(masterReducer)

export const wrapper = createWrapper(initStore)