import React from 'react'

import Layout from '@common/Layout'

interface Props {
  isLoading?: boolean
  task: Task | null
  children?: React.ReactNode
}

const View: React.FC<Props> = ({ isLoading, children }) => (
  <Layout showLoader={isLoading}>{children}</Layout>
)

export default View
