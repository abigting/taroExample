import {GET_LIST} from "../constants/me"

export const loginTypeFun = (data) => {
  return {
    type: GET_LIST,
    data: data
  }
}
