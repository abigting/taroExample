import {Component,Config} from '@tarojs/taro'
import { Swiper, SwiperItem,View, Image,   } from '@tarojs/components'
import { AtCountdown, AtIcon } from 'taro-ui'
import './index.less'
import Title from '../../components/title'

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  render() {
    const imgSrc=require('../../assets/imgs/timg.jpg');
    const list=[
      {
        id:0,
        text:'蔬菜豆制品',
        imgSrc:require('../../assets/imgs/timg.jpg')
      },
      {
        id:1,
        text:'肉禽蛋',
        imgSrc:require('../../assets/imgs/timg.jpg')
      },
      {
        id:2,
        text:'水产海鲜',
        imgSrc:require('../../assets/imgs/timg.jpg')
      },
      {
        id:3,
        text:'水果',
        imgSrc:require('../../assets/imgs/timg.jpg')
      },
      {
        id:4,
        text:'烘焙',
        imgSrc:require('../../assets/imgs/timg.jpg')
      }
    ];
    const goods=[
      {
        id:0,
        price:1.99,
        imgSrc:require('../../assets/imgs/timg.jpg')
      },
      {
        id:1,
        price:1.99,
        imgSrc:require('../../assets/imgs/timg.jpg')
      },
      {
        id:2,
        price:1.99,
        imgSrc:require('../../assets/imgs/timg.jpg')
      },
      {
        id:3,
        price:1.99,
        imgSrc:require('../../assets/imgs/timg.jpg')
      },
      {
        id:4,
        price:1.99,
        imgSrc:require('../../assets/imgs/timg.jpg')
      },
      {
        id:5,
        price:1.99,
        imgSrc:require('../../assets/imgs/timg.jpg')
      },
      {
        id:6,
        price:1.99,
        imgSrc:require('../../assets/imgs/timg.jpg')
      },
    ];

    const recommend=[
      {
        id:0,
        name:'土豆（黄心）',
        weight:'约500g',
        limitTime: true
      },
      {
        id:1,
        name:'土豆（黄心）',
        weight:'约500g',
        limitTime: true
      },
      {
        id:2,
        name:'土豆（黄心）',
        weight:'约500g',
        limitTime: true
      },
      {
        id:3,
        name:'土豆（黄心）',
        weight:'约500g',
        limitTime: true
      }
    ];
    return (
        <View className='index'>
          <Swiper
              className='test-h'
              indicatorColor='#999'
              indicatorActiveColor='#333'
              circular
              indicatorDots
              autoplay>
            <SwiperItem>
              <View className='demo-text-1'>1</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-2'>2</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-3'>3</View>
            </SwiperItem>
          </Swiper>
           <View className='kindBox'>
             {
               list.map(s=>
                   <View className='kind' key={s.id}>
                     <Image  className='circle' src={s.imgSrc} alt=""/>
                     {s.text}
                   </View>
               )
             }
           </View>
          <View className='kindBox'>
            {
              list.map(s=>
                  <View className='kind' key={s.id}>
                    <Image  className='circle' src={s.imgSrc} alt=""/>
                    {s.text}
                  </View>
              )
            }
          </View>
          <View className='shop'>
            <View className='title'>
              限时抢购
              <AtCountdown
                  format={{ hours: ':', minutes: ':', seconds: '' }}
                  seconds={10}
                  // onTimeUp={this.onTimeUp.bind(this)}
              />
              <View className='more'>
               更多
              </View>
            </View>
            <View className='goodBox'>
              {
                goods.map(s=>
                    <View className='discountGood'>
                      <Image src={s.imgSrc} className='illustration' alt=""/>
                      <View className='price'>
                        {s.price}
                        <View className='car'>
                          <AtIcon value='shopping-cart' size='12' color='#FFF'></AtIcon>
                        </View>
                      </View>
                    </View>
                )
              }
            </View>
          </View>
          <View className='recommend'>
            <View className='title'>
              猜你喜欢
            </View>
            <View className='favourite'>
              {
                recommend.map(s=>
                    <View className='good'>
                      <Image src={imgSrc} className='goodImg' alt=""/>
                      {s.name} {s.weight}
                      {
                        s.limitTime&&
                        <View className='limitTime'>
                          限时
                        </View>
                      }
                    </View>
                )
              }
            </View>
          </View>
        </View>
    )
  }
}
