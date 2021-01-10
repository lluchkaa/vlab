import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import { getId, isId } from '@services/id'
import links from '@routes/links'

import tasksActions from '@redux/tasks/actions'
import useBindedAction from '@hooks/useBindedAction'

import View from './view'

interface PageParams {
  id: string
}

type Props = RouteComponentProps<PageParams>

const Task: React.FC<Props> = ({ match: { params }, history: { replace } }) => {
  const id = useMemo(() => getId(params.id), [params.id])

  const selectTask = useBindedAction(tasksActions.select)

  const task = useSelector<ReduxState, Task | null>(
    (state) => state.tasks.currentTask
  )

  const isLoading = useSelector<ReduxState, boolean>(
    (state) => state.tasks.isLoading
  )

  useEffect(() => {
    if (!isId(id)) {
      replace(links.home())
    }
  }, [replace])

  useEffect(() => {
    selectTask(id)
  }, [id])

  return <View isLoading={isLoading} task={task} />
}

export default Task
