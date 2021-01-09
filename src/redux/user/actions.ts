import action from '@redux/action'
import ActionType from './types'

import { UserType } from '@typings/enums/User'

const loading = (isLoading = true): AppThunk => (dispatch) =>
  dispatch(action(ActionType.LOADING, isLoading))

const error = (error: ErrorType): AppThunk => (dispatch) =>
  dispatch(action(ActionType.ERROR, error))

const reset = (): AppThunk => (dispatch) => dispatch(action(ActionType.RESET))

const login = (
  email: string,
  password: string,
  _remember: boolean = false,
  onSuccess?: (user: User) => void,
  onError?: ErrorCallback
): AppThunk<User> => async (dispatch) => {
  dispatch(action(ActionType.LOGIN_BEGIN))

  try {
    // todo: replace with user
    const user: User = {
      id: 0,
      firstName: 'Admin',
      lastName: '',
      email: email,
      avatar: '',
      type: UserType.student,
    }

    onSuccess?.(user)
    dispatch(action(ActionType.LOGIN_SUCCESS, user))
    return user
  } catch (error) {
    dispatch(action(ActionType.LOGIN_ERROR, error))
    onError?.(error)
  }
}

const logout = (
  onSuccess?: Callback,
  onError?: ErrorCallback
): AppThunk => async (dispatch) => {
  dispatch(action(ActionType.LOGOUT_BEGIN))

  try {
    onSuccess?.()
    dispatch(action(ActionType.LOGOUT_SUCCESS))
  } catch (error) {
    dispatch(action(ActionType.LOGOUT_ERROR, error))
    onError?.(error)
  }
}

const userActions = {
  loading,
  error,
  reset,
  login,
  logout,
}

export default userActions
