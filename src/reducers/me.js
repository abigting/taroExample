import {GET_LIST} from "../constants/me"
const INITIAL_STATE = {
  loginType: false
}

export default function me (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        loginType: action.data
      }
    default:
      return state
  }
}
