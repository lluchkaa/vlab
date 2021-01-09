import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import usersActions from '@redux/users/actions'

const useLoadUsers = (deps: unknown[] = []) => {
  const dispatch = useDispatch<ReduxDispatch>()

  const load = useCallback(() => {
    bindActionCreators<
      typeof usersActions.load,
      BindedAsyncAction<typeof usersActions.load>
    >(usersActions.load, dispatch)()
  }, [dispatch, ...deps])

  useEffect(load, deps)
}

export default useLoadUsers
