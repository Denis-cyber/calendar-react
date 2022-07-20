import { IUser } from "../../../models/IUser";
import {
  AuthActionEnum,
  SetUserAction,
  SetAuthAction,
  SetIsLoadingAction,
  SetErrorAction,
} from "./types";
import { AppDispatch } from "../../index";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload }),
  login: (username: string, password: string) => async (dispath: AppDispatch) => {
    try {
    } catch (e) {}
  },
  logout: () => async (dispath: AppDispatch) => {
    try {
    } catch (e) {}
  },
};
