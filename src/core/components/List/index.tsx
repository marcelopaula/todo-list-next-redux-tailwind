import React from 'react'
import ListItem from '../ListItem'
import { useSelector } from 'react-redux'
import { RootState } from '@/core/store'
import { ItemState } from '@/core/store/slices/list'

const  List = () => {
  const {data} = useSelector((state:RootState) => state.list);

  return (
    <div>
      {
        data.map((item: ItemState, i: number) => 
          item.visible &&
            <ListItem key={i} {...item} />
        )
      }
    </div>
  )
}

export default List