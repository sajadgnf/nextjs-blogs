import axios from "axios";
import toast from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";
import React, { createContext, useContext, useEffect } from "react";
import Router from "next/router";

type ActionType = { type: string; payload: object; error?: string };

const AuthContext = createContext<any | null>(null);
const AuthContextDispatcher = createContext<any | null>(null);

const initialState = { user: null, loading: false, error: null };

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "SIGNIN_PENDING":
      return { loading: true };
    case "SIGNIN_SUCCESS":
      return { user: action.payload, loading: false, error: null };
    case "SIGNIN_REJECT":
      return { user: null, loading: false, error: action.error };
    default:
      return { state };
  }
};

const asyncActionHandlers: any = {
  SIGNIN:
    ({ dispatch }: any) =>
    (action: any) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post(`${process.env.BACKEND_URL}/api/user/signin`, action.payload, {
          withCredentials: true,
        })
        .then(({ data }) => {
          toast.success(`${data.name} خوش آمدید`);
          dispatch({ type: "SIGNIN_SUCCESS", payload: { data } });
          Router.push("/");
        })
        .catch((err) => {
          dispatch({ type: "SIGNIN_REJECT", error: err.response.data.message });
          toast.error(err.response.data.message);
        });
    },
  SIGNUP:
    ({ dispatch }: any) =>
    (action: any) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post(`${process.env.BACKEND_URL}/api/user/signup`, action.payload, {
          withCredentials: true,
        })
        .then(({ data }) => {
          toast.success("ثبت نام شما با موفقیت انجام شد");
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
          Router.push("/");
        })
        .catch((err) => {
          dispatch({ type: "SIGN_REJECT", error: err.response.data.message });
          toast.error(err.response.data.message);
        });
    },
  LOAD_USER:
    ({ dispatch }: any) =>
    (action: any) => {
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .get(`${process.env.BACKEND_URL}/api/user/load`, {
          withCredentials: true,
        })
        .then(({ data }) => {
          dispatch({ type: "SIGNIN_SUCCESS", payload: data });
        })
        .catch();
    },
  SIGNOUT:
    ({ dispatch }: any) =>
    (action: any) => {
      axios
        .get(`${process.env.BACKEND_URL}/api/user/logout`, {
          withCredentials: true,
        })
        .then(({ data }) => {
          window.location.href = "./";
        })
        .catch();
    },
};

const AuthProvider = ({ children }: any) => {
  const [user, dispatch] = useReducerAsync<any, { type: string }>(
    reducer,
    initialState,
    asyncActionHandlers
  );

  useEffect(() => {
    dispatch({ type: "LOAD_USER" });
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthAction = () => useContext(AuthContextDispatcher);
