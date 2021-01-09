import React, { useMemo } from 'react'
import clsx from 'clsx'

import Header from '@common/Header'

interface Props {
  children?: React.ReactNode
  header?: React.ReactNode
  noHeader?: boolean
  className?: string
  contentClassName?: string
}

const Layout: React.FC<Props> = ({
  children,
  header,
  noHeader = false,
  className,
  contentClassName,
}) => {
  const headerNode = useMemo(() => (noHeader ? null : header || <Header />), [
    header,
    noHeader,
  ])

  return (
    <div className={clsx('page', className)}>
      {headerNode}
      <div className={clsx('page-content', contentClassName)}>{children}</div>
    </div>
  )
}

export default Layout
