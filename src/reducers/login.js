import * as loginConstans from "../constants/login"

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
  ],
  //请求接口域名地址
  baseURL : 'https://xx.xxx.xx/' ,
  //应用首次加载
  appOnLaunch : true ,
  //请求token
  authorize : ''
};

export default function login (state = INITIAL_STATE, action) {
  switch (action.type) {
    case loginConstans.LOGIN_TYPE:
      return {
        ...state,
        loginType: action.data
      };
    case loginConstans.UPDATE_CURRENT:
      return {
        ...state,
        current: action.data
      };
    case loginConstans.CHANGE_APP_ON_LAUNCH :
      return {
        ...state ,
        appOnLaunch : false
      };
    case loginConstans.INSERT_AUTHORIZE :
      return {
        ...state ,
        authorize : action.authorize
      };
    default:
      return state
  }
}
