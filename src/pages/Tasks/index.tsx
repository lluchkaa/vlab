import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import useBindedActions from '@hooks/useBindedActions'
import tasksActions from '@redux/tasks/actions'

import View from './view'

type Props = RouteComponentProps

const Tasks: React.FC<Props> = () => {
  const { loadTasks, loadTaskResults } = useBindedActions({
    loadTasks: tasksActions.load,
    loadTaskResults: tasksActions.loadResults,
  })

  const isLoading = useSelector<ReduxState, boolean>(
    (state) => state.tasks.isLoading
  )

  const tasks = useSelector<ReduxState, Task[]>((state) => state.tasks.tasks)

  useEffect(() => {
    loadTasks()
    loadTaskResults()
  }, [])

  return <View isLoading={isLoading} tasks={tasks} />
}

export default Tasks
