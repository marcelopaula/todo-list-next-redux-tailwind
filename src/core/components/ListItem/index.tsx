import React from 'react'
import { ItemState, completeItem, hideTask } from '@/core/store/slices/list'
import { useDispatch } from 'react-redux'


const ListItem = (props: ItemState) => {
  const dispatch = useDispatch()

  const {description, completed} = props
  const handleComplete = () => {
    dispatch(completeItem(props.id))
    setTimeout(() => {
      dispatch(hideTask(props.id))
    }, 30000)
  }

  return(
    <div className='rounded-lg border !border-slate-300 border-1 py-2 px-4 flex flex-row justify-between'>
      <p className={`self-center ${completed ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
      {
        !completed &&
          <button 
            className='border-2 rounded-lg p-1 bg-green-600 text-white text-sm py-2 px-4 font-bold uppercase'
            onClick={handleComplete}
          >
            Completar
          </button>
      }
    </div>
  )
}

export default ListItem