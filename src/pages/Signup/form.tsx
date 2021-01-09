import React from 'react'
import { useFormik } from 'formik'

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
      <input name="firstName" value={firstName} onChange={handleChange} />
      <input name="lastName" value={lastName} onChange={handleChange} />
      <input name="email" value={email} onChange={handleChange} />
      <input
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
