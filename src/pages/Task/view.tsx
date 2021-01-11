import React from 'react'

import Button from '@components/Button'

import Layout from '@common/Layout'

import styles from './styles.module.scss'

interface Props {
  isLoading?: boolean
  task: Task | null
  onSubmit: Callback
  children?: React.ReactNode
}

const View: React.FC<Props> = ({ isLoading, onSubmit, task, children }) => (
  <Layout
    showLoader={isLoading}
    className={styles['page']}
    contentClassName={styles['page-content']}
  >
    <h2 className={styles['title']}>{task?.title}</h2>
    <h6 className={styles['description']}>{task?.description}</h6>
    {children}
    <Button onClick={onSubmit}>{'Підтвердити'}</Button>
  </Layout>
)

export default View
