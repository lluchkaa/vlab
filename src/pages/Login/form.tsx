import React from 'react'
import { useFormik } from 'formik'

import Input from '@components/Input'
import Button from '@components/Button'

import Values from './values'

interface Props {
  onSubmit: (values: Values) => void
}

const Form: React.FC<Props> = ({ onSubmit }) => {
  const {
    values: { email, password },
    handleChange,
    handleSubmit,
  } = useFormik<Values>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
  })

  return (
    <form onSubmit={handleSubmit}>
      <Input name="email" value={email} onChange={handleChange} type="email" />
      <Input
        name="password"
        value={password}
        onChange={handleChange}
        type="password"
      />
      <Button type="submit">{'Login'}</Button>
    </form>
  )
}

export default Form
