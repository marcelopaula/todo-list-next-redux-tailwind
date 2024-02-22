import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ItemState, addItem } from '@/core/store/slices/list'
import { RootState } from '@/core/store'

const Form = () => {
  const dispatch = useDispatch()
  const list = useSelector((state:RootState) => state.list )

  const [item, setItem] = useState<string>('')

  const handleAdd = () => {
    const newItem: ItemState = {
      id: list.data.length + 1,
      description: item,
      completed: false,
      visible: true
    }
    dispatch(addItem(newItem))

    setItem('')
  }

  const inputChange = (e: any) => {
    setItem(e.target.value)
  }

  return(
    <div className='flex flex-row gap-2 mb-10'>
      <input 
        className='w-80 flex-auto border !border-slate-300 border-1 rounded px-2'
        placeholder='Escreva uma nova tarefa'
        type='text' 
        value={item} 
        style={{border: '2px solid'}} 
        onChange={inputChange}/>

      <button
        className='w-20 flex-auto bg-blue-600 text-white py-2 w-full rounded' 
        onClick={handleAdd}>
          Adicionar
      </button>
    </div>
  )
}

export default Form