enum ActionType {
  LOADING = '[user]: loading',
  ERROR = '[user]: error',
  RESET = '[user]: reset',

  LOGIN_BEGIN = '[user]: login begin',
  LOGIN_SUCCESS = '[user]: login success',
  LOGIN_ERROR = '[user]: login error',

  LOGOUT_BEGIN = '[user]: logout begin',
  LOGOUT_SUCCESS = '[user]: logout success',
  LOGOUT_ERROR = '[user]: logout error',
}

type LoadingAction = ReduxAction<ActionType.LOADING, boolean>

type ErrorAction = ReduxAction<ActionType.ERROR, ErrorType>

type ResetAction = ReduxAction<ActionType.RESET>

type LoginBeginAction = ReduxAction<ActionType.LOGIN_BEGIN>

type LoginSuccessAction = ReduxAction<ActionType.LOGIN_SUCCESS, User>

type LoginErrorAction = ReduxAction<ActionType.LOGIN_ERROR, ErrorType>

type LogoutBeginAction = ReduxAction<ActionType.LOGOUT_BEGIN>

type LogoutSuccessAction = ReduxAction<ActionType.LOGOUT_SUCCESS>

type LogoutErrorAction = ReduxAction<ActionType.LOGOUT_ERROR, ErrorType>

export type Action =
  | LoadingAction
  | ErrorAction
  | ResetAction
  | LoginBeginAction
  | LoginSuccessAction
  | LoginErrorAction
  | LogoutBeginAction
  | LogoutSuccessAction
  | LogoutErrorAction

export default ActionType
