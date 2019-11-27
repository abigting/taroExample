import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton, AtInput } from 'taro-ui'
import './index.less'
export default class Index extends Component {

  render () {
    return (
        <View className='index'>
          <AtInput
              name='telephone'
              title='手机号'
              type='text'
              placeholder='手机号'
          />
          <AtInput
              name='password'
              title='密码'
              type='text'
              placeholder='密码'
          />
          <AtButton type='primary' className='loginBtn'>登录</AtButton>
          <view className='iconfont iconleimupinleifenleileibie'></view>
        </View>
    )
  }
}
