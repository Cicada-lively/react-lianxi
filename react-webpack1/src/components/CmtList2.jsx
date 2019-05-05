import React from 'react'

// 导入列表组件的样式表
// 问题：这个样式表是只在List组件中生效吗？
// 经过试验发现，直接导入css样式表，默认是在全局中，整个项目都生效
import cssObj from '@/css/style.css'
console.log(cssObj)

import CmtItem from '@/components/CmtItem2.jsx'

export default class CmtList extends React.Component {
  constructor() {
    super()
    this.state = {
      commonList: [
        {id:1,user:'张三',content: '哈哈，很好'},
        {id:2,user:'李四',content: '哈哈，很好'},
        {id:3,user:'王五',content: '哈哈，很好'},
        {id:4,user:'赵柳',content: '哈哈，很好'},
        {id:5,user:'田七',content: '哈哈，很好'}
      ]
    }
  }
  render(){
    return <div>
      {/* 注意：在JSX中，如果想写行内样式了，不能为 style设置 字符串的值 */}
      {/* 而是应该这么写  style={{color: 'red'}} */}
      {/* <h1></h1> */}
      {/* 在行内样式中，如果是数值类型的样式，则可以不用引号包裹，如果是字符串类型的样式值，必须使用引号包裹 */}
      {/* <h3 className={[cssObj.title , 'test'].join(' ')}>我是评论列表</h3> */}
      <h3 className={cssObj.title+ ' test'}>我是评论列表</h3>
      
      { this.state.commonList.map(item=>{ return <CmtItem {...item} key={item.id}>
          </CmtItem>
        })
      }
    </div>
  } 
}
