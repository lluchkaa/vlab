import React from 'react'

import styles from './styles.module.scss'

interface Props {
  task: Task
  canRedirect?: boolean
}

const TaskCard: React.FC<Props> = ({ task, canRedirect = false }) => {
  console.log('task', task)
  console.log('canRedirect', canRedirect)

  return (
    <div className={styles['task-card-wrapper']}>
      <p className={styles['task-card-title']}>{task.title}</p>
      <p className={styles['task-card-desc']}>{task.description}</p>
      {canRedirect && (
        <a href={`tasks/${task.id}`} className={styles['task-card-btn-link']}>
          {'Виконати'}
        </a>
      )}
    </div>
  )
}

export default TaskCard
