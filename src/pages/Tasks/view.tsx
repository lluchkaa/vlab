import React, { useMemo } from 'react'
import clsx from 'clsx'

import Layout from '@common/Layout'

import TaskCard from './parts/TaskCard'
import { UserType } from '@typings/enums/User'

import styles from './styles.module.scss'

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
        const taskResult = taskResults.find(
          (taskResult) =>
            taskResult.userId === user?.id && taskResult.taskId === task.id
        )

        const canRedirect = isStudent && !taskResult
        const mark = taskResult?.mark

        return (
          <TaskCard
            key={task.id}
            task={task}
            canRedirect={canRedirect}
            mark={mark}
          />
        )
      }),
    [tasks, isStudent]
  )

  return (
    <Layout showLoader={isLoading}>
      <div className={clsx(styles['tasks-list-wrapper'])}>{tasksNode}</div>
    </Layout>
  )
}

export default View
