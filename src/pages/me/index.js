import {Component, Config} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {AtAvatar, AtList, AtListItem} from 'taro-ui'
import './index.less'

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state={
      avatar:require('../../assets/imgs/favicon.png')
    }
  }

  render() {
    return (
        <View className='index'>
          <View className='header'>
            <View>
              <AtAvatar circle={true} image={this.state.avatar}/>
            </View>
            <View>
              立即登录
            </View>
            <View className=' arrows'>
              <View className='at-icon at-icon-chevron-right'></View>
            </View>
          </View>
          <View className='userInfo'>
            <AtList>
              <AtListItem
                  thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                  title='我的订单'
                  extraText='查看全部订单'
                  arrow='right'
                  onClick={this.handleClick}/>
            </AtList>
            <View className='model'>
              <View >
                <View className='at-icon at-icon-file-code iconStyle'></View>
                待支付
              </View>
              <View>
                <View className='at-icon at-icon-file-code iconStyle'></View>
                待收货
              </View>
              <View>
                <View className='at-icon at-icon-file-code iconStyle'></View>
                待评价
              </View>
              <View>
                <View className='at-icon at-icon-file-code iconStyle'></View>
                售后/退货
              </View>
            </View>
            <View className='reward'>

            </View>
            <View className='info'>
              <AtList>
                <AtListItem
                    thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                    title='我的优惠券'
                    arrow='right'
                    onClick={this.handleClick}/>
                <AtListItem
                    thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                    title='我的收货地址'
                    arrow='right'
                    onClick={this.handleClick}/>
              </AtList>
            </View>
            <View className='info'>
              <AtList>
                <AtListItem
                    thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                    title='我的绿卡'
                    arrow='right'
                    onClick={this.handleClick}/>
              </AtList>
            </View>
            <View>
              <AtList>
                <AtListItem
                    thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                    title='联系客服'
                    extraText='客服时间 07:00-22:00'
                    arrow='right'
                    onClick={this.handleClick}/>
              </AtList>
            </View>
          </View>

        </View>
    )
  }
}
