import React, {useState, useEffect} from 'react'
import ListItem from '../ListItem'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/core/store'
import { ItemState, fetchLocalStorage } from '@/core/store/slices/list'

const  List = () => {
  const dispatch = useDispatch()

  const [tasks, setTasks] = useState<ItemState[]>([])
  const {data} = useSelector((state:RootState) => state.list)

  useEffect(() => {
    if (data) {
      const arrayForSort = [...data]
      const dataOrder: ItemState[] = arrayForSort.sort((a, b) => {
        return (a.completed === b.completed)? 0 : a.completed? 1 : -1;
      })
      setTasks(dataOrder);
    }
  }, [data])

  useEffect(() => {
    dispatch(fetchLocalStorage())
  }, [dispatch])


  return (
    <>
      {
        
          <div className='flex flex-col gap-6'>
            {
              tasks.map((item: ItemState, i: number) => 
                item.visible &&
                  <ListItem key={i} {...item} />
              )
            }
          </div>
      }
    </>
  )
}

export default List