import React, { useMemo } from 'react'

import Layout from '@common/Layout'

import TaskCard from './parts/TaskCard'
import { UserType } from '@typings/enums/User'

interface Props {
  isLoading?: boolean
  tasks: Task[]
  taskResults: TaskResult[]
  user: User | null
}

const View: React.FC<Props> = ({ isLoading, tasks, taskResults, user }) => {
  const isStudent = useMemo(() => user?.type === UserType.student, [user])

  const tasksNode = useMemo(
    () =>
      tasks.map((task) => {
        const canRedirect =
          isStudent &&
          !taskResults.find(
            (taskResult) =>
              taskResult.userId === user?.id && taskResult.taskId === task.id
          )
        return <TaskCard key={task.id} task={task} canRedirect={canRedirect} />
      }),
    [tasks, isStudent]
  )

  return <Layout showLoader={isLoading}>{tasksNode}</Layout>
}

export default View
