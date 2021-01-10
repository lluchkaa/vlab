import React from 'react'
import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from '@material-ui/core'

type Props = MaterialButtonProps

const Button: React.FC<Props> = (props) => {
  return <MaterialButton {...props} />
}

export default Button
