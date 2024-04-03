import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import Context from '../../context'
import './index.less'

const Today: React.FC = () => {
  const { store, prefixCls, todayStyle } = useContext(Context)
  const defaultTodayColor = '#F7BA1E'
  return (
    <div
      className={`${prefixCls}-today`}
      style={{
        backgroundColor: defaultTodayColor,
        transform: `translate(${store.todayTranslateX}px)`,
      }}
    >
      <div
        className={`${prefixCls}-today_line`}
        style={{
          backgroundColor: defaultTodayColor,
          height: store.bodyScrollHeight,
        }}
      />
    </div>
  )
}
export default observer(Today)
