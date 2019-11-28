import {request} from '@tarojs/taro'

// 获取session消息
// export async function getSessionByArray(rooms, alertErr = true, throwErr = false) {
//   let res = await request({
//     url: '/IM-Module/IM/GroupUsers',
//     method: 'POST',
//     type: "json",
//     contentType: "application/json",
//     data: JSON.stringify({
//       "rooms": rooms
//     })
//   });
//   let packData = packRespnseData(res);
//   if (checkRespnseSuccess(res)) {
//     return packData || true;
//   } else {
//
//     if (throwErr) {
//       throw new Error(packData.Reason);
//     }
//     return false;
//   }
// }

export async function getList(){
  // let res = await fetch('http://47.97.154.245:8080/task-send-group/task-page',{
  //   method:'POST',
  //   body:JSON.stringify({
  //     pageNum:1,
  //     pageSize:20
  //   })
  // });
  // if(res){
  //
  // }
  const params = {
    url: "http://jsonplaceholder.typicode.com/comments",
    // data: {},
    method: "POST",
    success: (data) => {console.log(data)},
    fail: (data) => {console.log(data)}
  };
  request(params)
}
