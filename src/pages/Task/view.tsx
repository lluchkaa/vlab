import React from 'react'

import Button from '@components/Button'

import Layout from '@common/Layout'

interface Props {
  isLoading?: boolean
  task: Task | null
  onSubmit: Callback
  children?: React.ReactNode
}

const View: React.FC<Props> = ({ isLoading, onSubmit, children }) => (
  <Layout showLoader={isLoading}>
    {children}
    <Button onClick={onSubmit}>{'Підтвердити'}</Button>
  </Layout>
)

export default View
