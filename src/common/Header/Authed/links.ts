import links from '@routes/links'
import { LinkProps } from 'react-router-dom'

const defaultLinks: LinkProps[] = [
  {
    to: links.hash(),
    children: 'Результати',
  },
]

export default defaultLinks
