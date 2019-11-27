import {LOGIN_TYPE, UPDATE_CURRENT} from "../constants/login"
const INITIAL_STATE = {
  loginType: false,
  current: 0,
  menus:[
    {
      id:0,
      title:'首页',
      iconType:'bullet-list'
    },
    {
      id:1,
      title:'分类',
      iconType:'camera'
    },
    {
      id:2,
      title:'吃什么',
      iconType:'folder'
    },
    {
      id:3,
      title:'购物车',
      iconType:'folder'
    },
    {
      id:4,
      title:'我的',
      iconType:'folder'
    }
  ]
};

export default function login (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_TYPE:
      return {
        ...state,
        loginType: action.data
      };
    case UPDATE_CURRENT:
      return {
        ...state,
        current: action.data
      };
    default:
      return state
  }
}
