import React from 'react'
import { useFormik } from 'formik'

import Input from '@components/Input'

import { UserType } from '@typings/enums/User'

import Values from './values'

interface Props {
  onSubmit: (values: Values) => void
}

const Form: React.FC<Props> = ({ onSubmit }) => {
  const {
    values: { firstName, lastName, email, password },
    handleChange,
    handleSubmit,
  } = useFormik<Values>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      avatar: '',
      type: UserType.student,
    },
    onSubmit,
  })

  return (
    <form onSubmit={handleSubmit}>
      <Input name="firstName" value={firstName} onChange={handleChange} />
      <Input name="lastName" value={lastName} onChange={handleChange} />
      <Input name="email" value={email} onChange={handleChange} />
      <Input
        name="password"
        value={password}
        onChange={handleChange}
        type="password"
      />
      <button type="submit">signup</button>
    </form>
  )
}

export default Form
