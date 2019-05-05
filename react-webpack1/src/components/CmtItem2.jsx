import React from "react"

import itemStyle from '@/css/cmtItem.css'
console.log(itemStyle)

export default function CmtItem(props){
  return <div className={itemStyle.cmtbox}>
    <h3 className={itemStyle.title}>评论人：{props.user}</h3>
    <p className={itemStyle.content}>内容：{props.content}</p>
  </div>
}
