import React, { useMemo } from 'react'
import clsx from 'clsx'

import Layout from '@common/Layout'

import TaskCard from './parts/TaskCard'
import { UserType } from '@typings/enums/User'

import styles from './styles.module.scss'

interface Props {
  isLoading?: boolean
  tasks: Task[]
  user: User | null
}

const View: React.FC<Props> = ({ isLoading, tasks, user }) => {
  const canRedirect = useMemo(() => user?.type === UserType.student, [user])

  const tasksNode = useMemo(
    () =>
      tasks.map((task) => (
        <TaskCard key={task.id} task={task} canRedirect={canRedirect} />
      )),
    [tasks, canRedirect]
  )

  return (
    <Layout showLoader={isLoading}>
      <div className={clsx(styles['tasks-list-wrapper'])}>{tasksNode}</div>
    </Layout>
  )
}

export default View
