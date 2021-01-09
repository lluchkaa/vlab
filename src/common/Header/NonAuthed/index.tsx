import React from 'react'
import { ReactSVG } from 'react-svg'
import clsx from 'clsx'

import Link from '@components/Link'

import links from '@routes/links'

import Logo from '@assets/logo_wide_white.svg'

import styles from './styles.module.scss'

const NonAuthedHeader: React.FC = () => (
  <header className={clsx('fullwidth', styles['header'])}>
    <Link to={links.login()} title="Home">
      <ReactSVG src={Logo} className={clsx('svg', styles['logo'])} />
    </Link>
  </header>
)

export default NonAuthedHeader
