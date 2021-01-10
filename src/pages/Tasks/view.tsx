import React from 'react'

import Layout from '@common/Layout'

interface Props {
  isLoading?: boolean
  tasks: Task[]
  user: User | null
}

const View: React.FC<Props> = ({ isLoading }) => (
  <Layout showLoader={isLoading} />
)

export default View
