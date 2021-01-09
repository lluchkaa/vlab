import { useEffect, useState } from 'react'

import usersActions from '@redux/users/actions'

import useBindedAction from './useBindedAction'

const useLoadUsers = (): boolean => {
  const [ready, setReady] = useState(false)

  const loadUsers = useBindedAction(usersActions.load)

  useEffect(() => {
    if (ready) {
      setReady(false)
    }
    const setIsEeady = () => setReady(true)
    loadUsers(setIsEeady, setIsEeady)
  }, [loadUsers])

  return ready
}

export default useLoadUsers
