import React, {useEffect, useState} from 'react'
import { RootState } from '@/core/store'
import { useSelector } from 'react-redux'
import { getCompleted, getInProgress } from '@/core/utils'

const Resume = () => {
  const list = useSelector((state:RootState) => state.list)
  const [totalCompleted, setTotalCompleted] = useState<number>();
  const [totalInProgress, setTotalInProgress] = useState<number>();

  useEffect(() => {
    setTotalCompleted(getCompleted(list.data))
    setTotalInProgress(getInProgress(list.data))
  }, [list])

  return(
    <div>
      <div>
        <h2>Total de Tarefas</h2>
        <p>{list.data.length}</p>
      </div>
      <div>
        <h2>Concluídas</h2>
        <p>{totalCompleted}%</p>
      </div>
      <div>
        <h2>Pendentes</h2>
        <p>{totalInProgress}%</p>
      </div>
    </div>
  )
}
export default Resume