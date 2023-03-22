import { LOGIN_USER, SAVE_USER } from "../types/LoginActionTypes"

export const saveUserDetails=(data: any)=> {
  return {
    type: SAVE_USER,
    payload : data
  }
}

export const logoutUser= () => {
    return {
        type:LOGIN_USER,
        payload:{}
    }
}