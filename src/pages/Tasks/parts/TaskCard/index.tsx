import React from 'react'
import clsx from 'clsx'

import styles from './styles.module.scss'

interface Props {
  task: Task
  canRedirect?: boolean
}

const TaskCard: React.FC<Props> = ({ task, canRedirect = false }) => (
  <div className={styles['task-card-wrapper']}>
    <p
      className={clsx(
        styles['task-card-title'],
        canRedirect && styles['task-card-title-margin']
      )}
    >
      {task.title}
    </p>
    <p className={styles['task-card-desc']}>{task.description}</p>
    {canRedirect && (
      <a href={`tasks/${task.id}`} className={styles['task-card-btn-link']}>
        {'Виконати'}
      </a>
    )}
  </div>
)

export default TaskCard
