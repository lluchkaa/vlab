import React from 'react'

import Layout from '@common/Layout'

interface Props {
  onSignup: (newUser: UserModel) => void
}

const View: React.FC<Props> = () => <Layout />

export default View
