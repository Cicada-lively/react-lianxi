import React from "react"

// 第一层 封装
// const itemStyle = {border: '1px dashed #ccc', boxShadow: '0 0 10px #ccc', padding: '10px', margin:'10px'}
// const userStyle = { fontSize: '15px' }
// const contStyle = { fontSize: '13px' }

// 第二层封装
// const styles = {
//   item: {border: '1px dashed #ccc', boxShadow: '0 0 10px #ccc', padding: '10px', margin:'10px'},
//   user: { fontSize: '15px' },
//   cont: { fontSize: '13px' }
// }

// 第三层封装
import styles from '@/components/style.js'

export default function CmtItem(props){
  return <div style={styles.item}>
    <h3 style={styles.user}>评论人：{props.user}</h3>
    <p style={styles.cont}>内容：{props.content}</p>
  </div>
}
