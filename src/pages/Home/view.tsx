import React from 'react'
import { Redirect } from 'react-router-dom'

import links from '@routes/links'

type Props = {}

const View: React.FC<Props> = () => <Redirect to={links.tasks()} />

export default View
