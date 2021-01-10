import React, { useEffect, useMemo } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { getId, isId } from '@services/id'
import links from '@routes/links'

import View from './view'

interface PageParams {
  id: string
}

type Props = RouteComponentProps<PageParams>

const Task: React.FC<Props> = ({ match: { params }, history: { replace } }) => {
  const id = useMemo(() => getId(params.id), [params.id])

  useEffect(() => {
    if (!isId(id)) {
      replace(links.home())
    }
  }, [replace])

  console.log('id', id)

  return <View />
}

export default Task
