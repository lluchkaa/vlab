import React from 'react'
import {
  Input as MaterialInput,
  InputProps as MaterialInputProps,
} from '@material-ui/core'

type Props = MaterialInputProps

const Input: React.FC<Props> = (props) => {
  return <MaterialInput {...props} />
}

export default Input
