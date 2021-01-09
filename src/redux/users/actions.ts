import action from '@redux/action'
import ActionType from './types'

import usersJson from '@data/users.json'

const loading = (isLoading = true): AppThunk => (dispatch) =>
  dispatch(action(ActionType.LOADING, isLoading))

const error = (error: ErrorType): AppThunk => (dispatch) =>
  dispatch(action(ActionType.ERROR, error))

const reset = (): AppThunk => (dispatch) => dispatch(action(ActionType.RESET))

const load = (
  onSuccess?: Callback,
  onError?: ErrorCallback
): AppThunk => async (dispatch) => {
  dispatch(action(ActionType.LOADING_BEGIN))
  try {
    const users: UserModel[] = usersJson as UserModel[]

    dispatch(action(ActionType.LOADING_SUCCESS, users))
    onSuccess?.()
  } catch (error) {
    dispatch(action(ActionType.LOADING_ERROR, error))
    onError?.(error)
  }
}

const append = (
  newUser: UserModel,
  onSuccess?: (user: UserModel) => void,
  onError?: ErrorCallback
): AppThunk => async (dispatch, getState) => {
  dispatch(action(ActionType.APPEND_BEGIN))
  try {
    const {
      users: { users },
    } = getState()
    if (users.find((user) => user.email === newUser.email)) {
      throw Error('Email already exists')
    }
    dispatch(action(ActionType.APPEND_SUCCESS, newUser))
    onSuccess?.(newUser)
  } catch (error) {
    dispatch(action(ActionType.APPEND_ERROR, error))
    onError?.(error)
  }
}

const usersActions = {
  loading,
  error,
  reset,
  load,
  append,
}

export default usersActions
