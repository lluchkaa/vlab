import React, { useMemo } from 'react'

import Layout from '@common/Layout'

import TaskCard from './parts/TaskCard'
import { UserType } from '@typings/enums/User'

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

  return <Layout showLoader={isLoading}>{tasksNode}</Layout>
}

export default View
