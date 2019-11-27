import {LOGIN_TYPE,UPDATE_CURRENT} from "../constants/login"

export const loginTypeFun = (data) => {
  return {
    type: LOGIN_TYPE,
    data: data
  }
}

export const changeCurrentFun = (data) => {
  return {
    type: UPDATE_CURRENT,
    data: data
  }
}
