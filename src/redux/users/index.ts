import ActionType, { Action } from './types'

export interface State {
  isLoading: boolean
  users: UserModel[]
  error: ErrorType | null
}

const initialState: State = {
  isLoading: false,
  users: [],
  error: null,
}

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      }
    }
    case ActionType.RESET: {
      return {
        ...initialState,
      }
    }
    case ActionType.LOADING_BEGIN: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case ActionType.LOADING_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      }
    }
    case ActionType.ERROR:
    case ActionType.LOADING_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    }
    default:
      return state
  }
}

export default reducer
