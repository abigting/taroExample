import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton  } from 'taro-ui'
import './index.less'
import Footer from '../layout/footer';
import { connect } from '@tarojs/redux'
import { loginTypeFun } from '../../actions/login';
import Me from '../me';
import Login from '../login';
import Home from '../home';


@connect(({ login }) => ({
  login
}), (dispatch) => ({
  changeLoginType(data) {
    dispatch(loginTypeFun(data))
}
}))

export default class Index extends Component {
  constructor () {
    super(...arguments);
    this.state = ({

    })
  }
  config = {
    navigationBarTitleText: '首页'
  };
  toChangeLogin = (e) => {
    this.props.changeLoginType(true)
  };



  render () {
    const {current}= this.props.login;
    return (
        <View className='index'>
          <View className='content'>
            {current===4&&<Me />}
            {current===0&&<Home />}
          </View>

          {/*{*/}
          {/*  this.renderContent(current)*/}
          {/*}*/}
          {/*<AtButton type='primary' className='loginBtn' onClick={this.toHome}>登录</AtButton>*/}
          {/*<AtButton type="primary" onClick={this.toChangeLogin}>改变状态loginType</AtButton>*/}
          <Footer/>
        </View>
    )
  }
}
