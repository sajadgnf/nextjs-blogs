import { signinUserReducer, signupUserReducer } from "./user/userReducer";
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    signinReducer: signinUserReducer,
    signupReducer: signupUserReducer
})

export default rootReducer



