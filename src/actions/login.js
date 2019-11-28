import * as loginConstans from "../constants/login"

export const loginTypeFun = (data) => {
  return {
    type: loginConstans.LOGIN_TYPE,
    data: data
  }
};

export const changeCurrentFun = (data) => {
  return {
    type: loginConstans.UPDATE_CURRENT,
    data: data
  }
};

//更改登录状态
export const changeAppOnLaunch = () => ({
  type : loginConstans.CHANGE_APP_ON_LAUNCH
});

//写入请求token
export const insertToken = (authorize) => ({
  type : loginConstans.INSERT_AUTHORIZE ,
  authorize
});
