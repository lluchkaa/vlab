import React from 'react'

interface Props {
  task: Task
  canRedirect?: boolean
}

const TaskCard: React.FC<Props> = ({ task, canRedirect = false }) => {
  console.log('task', task)
  console.log('canRedirect', canRedirect)

  return null
}

export default TaskCard
