import { LOGIN_USER, SAVE_USER,LOGOUT_USER } from "../types/LoginActionTypes"

const initialState = {
  userData : {},
  isLoggedIn: false
}

export default (state=initialState,action:any)=> {
  console.log('action',action)
  switch(action.type){
    case SAVE_USER:
        return {
            ...state,
            userData : action.payload,
            isLoggedIn: true
        }
    case LOGOUT_USER:
        return {
            ...state,
            userData : action.payload,
            isLoggedIn: false
        }    
    default:
        return state;    
  }
} 