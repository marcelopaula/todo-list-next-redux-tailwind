import React, {useEffect, useState} from 'react'
import { RootState } from '@/core/store'
import { useSelector } from 'react-redux'
import { getCompleted, getInProgress } from '@/core/utils'

const Resume = () => {
  const list = useSelector((state:RootState) => state.list)
  const [totalCompleted, setTotalCompleted] = useState<number>(0);
  const [totalInProgress, setTotalInProgress] = useState<number>(0);

  useEffect(() => {
    setTotalCompleted(getCompleted(list.data))
    setTotalInProgress(getInProgress(list.data))
  }, [list])

  return(
    <div className='flex flex-row justify-between gap-20 mb-10'>
      <div className='text-center'>
        <h2 className='text-slate-400 pb-2'>Total de Tarefas</h2>
        <p className='text-4xl font-bold'>{list.data.length}</p>
      </div>
      <div className='text-center'>
        <h2 className='text-slate-400 pb-2'>Concluídas</h2>
        <p 
          className={
            `text-4xl font-bold
            ${totalCompleted >= 50 ?
            'text-green-600':
            'text-red-600'}`}
          >
            {totalCompleted}%
        </p>
      </div>
      <div className='text-center'>
        <h2 className="text-slate-400 pb-2">Pendentes</h2>
        <p 
          className={
            `text-4xl font-bold 
            ${totalInProgress >= 50 ? 
            'text-red-600' : 'text-green-600'}`}
          >
            {totalInProgress}%
        </p>
      </div>
    </div>
  )
}
export default Resume