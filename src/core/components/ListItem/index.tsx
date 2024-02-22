import React from 'react'
import { ItemState, completeItem } from '@/core/store/slices/list'
import { useDispatch } from 'react-redux'


const ListItem = (props: ItemState) => {
  const dispatch = useDispatch()

  const {description, completed} = props
  const handleComplete = () => {
    dispatch(completeItem(props.id))
  }

  return(
    <div>
      {description}
      {
        !completed &&
          <button 
            className='border-2 rounded p-1'
            onClick={handleComplete}
          >
            Completar
          </button>
      }
    </div>
  )
}

export default ListItem