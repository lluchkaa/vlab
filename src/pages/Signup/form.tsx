import React from 'react'
import { useFormik } from 'formik'

import Input from '@components/Input'
import Button from '@components/Button'

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
      <Input name="email" value={email} onChange={handleChange} type="email" />
      <Input
        name="password"
        value={password}
        onChange={handleChange}
        type="password"
      />
      <Button type="submit">{'Signup'}</Button>
    </form>
  )
}

export default Form
