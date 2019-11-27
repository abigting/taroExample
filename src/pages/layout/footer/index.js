import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'
import { connect } from '@tarojs/redux'
import {changeCurrentFun} from "../../../actions/login"
import '../../../iconfont/iconfont.css'
import { AtTabBar   } from 'taro-ui'

@connect(({ login }) => ({
  login
}), (dispatch) => ({
  changeCurrent(data) {
    dispatch(changeCurrentFun(data))
  }
}))

export default class Index extends Component {

  constructor () {
    super(...arguments);
    this.state = ({

    })
  }

  handleClick(type){
    this.props.changeCurrent(type);
    // switch (type) {
    //   case 0:
    //     Taro.navigateTo({
    //       url: '/pages/login/index'
    //     });
    //     break;
    //   case 1:
    //     Taro.navigateTo({
    //       url: '/pages/login/index'
    //     });
    //     break;
    //   case 2:
    //     Taro.navigateTo({
    //       url: '/pages/login/index'
    //     });
    //     break;
    //   case 3:
    //     Taro.navigateTo({
    //       url: '/pages/login/index'
    //     });
    //     break;
    //   case 4:
    //     Taro.navigateTo({
    //       url: '/pages/me/index'
    //     });
    //     break;
    //   default:
    //     break;
    // }
  }


  render () {
    const {menus, current}= this.props.login;
    return (
        <View className='index'>
          <View className='tabbar'>
            <AtTabBar
                fixed
                backgroundColor='#f5f5f5'
                tabList={menus}
                onClick={this.handleClick.bind(this)}
                current={current}
            />
          </View>

          {/*<View className='footer'>*/}
          {/*  {*/}
          {/*    menus.map(s=>*/}
          {/*        <View className='item' key={s.id} onClick={()=>this.goPage(s.id)}>*/}
          {/*          <View className={`iconfont ${s.icon} iconStyle`} />*/}
          {/*          {s.text}*/}
          {/*        </View>*/}
          {/*    )*/}
          {/*  }*/}
          {/*</View>*/}
        </View>
    )
  }
}
