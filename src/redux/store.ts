import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { ActionType } from "./user/userReducer";

const masterReducer = (state: any, action: ActionType) => {
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

const initStore = createStore(masterReducer)

export const wrapper = createWrapper(initStore)