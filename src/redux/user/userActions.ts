import http from "@/services/httpService"
import { SIGNIN_USER_REQUEST, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE, SIGNUP_USER_REQUEST, SIGNUP_USER_SUCCESS, SIGNUP_USER_FAILURE } from "./userTypes"

export const signinUserRequest = () => {
    return { type: SIGNIN_USER_REQUEST }
}
export const signinUserSuccess = (user: []) => {
    return { type: SIGNIN_USER_SUCCESS, payload: user }
}
export const signinUserFailure = (error: []) => {
    return { type: SIGNIN_USER_FAILURE, payload: error }
}

export const signupUserRequest = () => {
    return { type: SIGNUP_USER_REQUEST }
}
export const signupUserSuccess = (user: []) => {
    return { type: SIGNUP_USER_SUCCESS, payload: user }
}
export const signupUserFailure = (error: []) => {
    return { type: SIGNUP_USER_FAILURE, payload: error }
}

export const signinUser = (data: {}) => (dispatch: any) => {
    dispatch(signinUserRequest())
    http.post(`/user/signin`, data)
        .then(({ user }: any) => dispatch(signinUserSuccess(user)))
        .catch(err => dispatch(signinUserFailure(err)))
}

export const signupUser = (data: {}) => (dispatch: any) => {
    dispatch(signupUserRequest())
    http.post(`/user/signup`, data)
        .then(({ user }: any) => dispatch(signupUserSuccess(user)))
        .catch(err => dispatch(signupUserFailure(err)))
}