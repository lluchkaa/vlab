import React, { useEffect, useMemo, useRef } from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import * as go from 'gojs'

import { getId, isId } from '@services/id'
import links from '@routes/links'

import tasksActions from '@redux/tasks/actions'
import useBindedAction from '@hooks/useBindedAction'

import View from './view'
import DiagramWrapper from './DiagramWrapper'

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
    selectTask(id, undefined, () => replace(links.tasks()))
  }, [id])

  const linkNodes = useRef<go.ObjectData[]>(null)

  const child = useMemo(
    () =>
      task ? (
        <DiagramWrapper
          nodeDataArray={[
            { key: 0, text: 'Alpha', color: 'lightblue', loc: '0 0' },
            { key: 1, text: 'Beta', color: 'orange', loc: '150 0' },
            { key: 2, text: 'Gamma', color: 'lightgreen', loc: '0 150' },
            { key: 3, text: 'Delta', color: 'pink', loc: '150 150' },
          ]}
          links={linkNodes}
        />
      ) : null,
    [task]
  )

  return (
    <View isLoading={isLoading} task={task}>
      {child}
    </View>
  )
}

export default Task
