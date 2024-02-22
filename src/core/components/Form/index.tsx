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
    <div>
      <input 
        type='text' 
        value={item} 
        style={{border: '2px solid'}} 
        onChange={inputChange}/>
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  )
}

export default Form