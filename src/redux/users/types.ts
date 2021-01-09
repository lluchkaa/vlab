enum ActionType {
  LOADING = '[users]: loading',
  ERROR = '[users]: error',
  RESET = '[users]: reset',

  LOADING_BEGIN = '[users]: loading begin',
  LOADING_SUCCESS = '[users]: loading success',
  LOADING_ERROR = '[users]: loading error',
}

type LoadingAction = ReduxAction<ActionType.LOADING, boolean>

type ErrorAction = ReduxAction<ActionType.ERROR, ErrorType>

type ResetAction = ReduxAction<ActionType.RESET>

type LoadingBeginAction = ReduxAction<ActionType.LOADING_BEGIN>

type LoadingSuccessAction = ReduxAction<ActionType.LOADING_SUCCESS, UserModel[]>

type LoadingErrorAction = ReduxAction<ActionType.LOADING_ERROR, ErrorType>

export type Action =
  | LoadingAction
  | ErrorAction
  | ResetAction
  | LoadingBeginAction
  | LoadingSuccessAction
  | LoadingErrorAction

export default ActionType
