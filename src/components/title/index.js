import {Component,Config} from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

export default class Index extends Component {
  constructor(props){
    super(props);
    console.log(props,'props')
    this.state={

    }
  }

  render() {
    return (
        <View className='index'>
            限时抢购
        </View>
    )
  }
}
