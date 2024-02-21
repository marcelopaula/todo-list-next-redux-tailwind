import React from 'react'
import { ItemState, completeItem } from '@/core/store/slices/list'
import { useDispatch } from 'react-redux'


const ListItem = (props: ItemState) => {
  const dispatch = useDispatch()

  const {description, completed} = props
  // const handleComplete = () => {
  //   dispatch(completeItem())
  // }

  return(
    <div>
      {description}
      {
        !completed &&
          <button className='border-2 rounded p-1'>Completar</button>
      }
    </div>
  )
}

export default ListItem