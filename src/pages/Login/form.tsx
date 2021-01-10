import React from 'react'
import { useFormik } from 'formik'

import Input from '@components/Input'

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
      <Input name="email" value={email} onChange={handleChange} />
      <Input
        name="password"
        value={password}
        onChange={handleChange}
        type="password"
      />
      <button type="submit">aaa</button>
    </form>
  )
}

export default Form
