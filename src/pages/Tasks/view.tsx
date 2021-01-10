import React, { useMemo } from 'react'

import Layout from '@common/Layout'

import TaskCard from './parts/TaskCard'

interface Props {
  isLoading?: boolean
  tasks: Task[]
  user: User | null
}

const View: React.FC<Props> = ({ isLoading, tasks }) => {
  const tasksNode = useMemo(
    () => tasks.map((task) => <TaskCard key={task.id} task={task} />),
    [tasks]
  )

  return <Layout showLoader={isLoading}>{tasksNode}</Layout>
}

export default View
