import action from '@redux/action'
import ActionType from './types'

import { modelToUser } from '@services/user'

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
): AppThunk<User> => async (dispatch, getState) => {
  dispatch(action(ActionType.LOGIN_BEGIN))

  const users = getState().users.users

  try {
    const findUser = users.find((user) => user.email === email)

    if (!findUser) {
      throw Error(`There are no user with email ${email}`)
    } else if (findUser.password !== password) {
      throw Error('Wrong credentials')
    }
    const user = modelToUser(findUser)

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
