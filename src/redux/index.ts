import { Action, combineReducers } from 'redux'

import ActionType from './types'

import { isPrimitive } from '@services/utils'

import user from './user'

const rootReducer = combineReducers({ user })

const reducer = (state: ReduxState | undefined, action: AnyAction) => {
  switch (action.type) {
    case ActionType.RESET: {
      state = undefined
      break
    }
    case ActionType.UPDATE: {
      if (action.payload.path.length > 0) {
        let target: Record<string, unknown> = state as Record<string, unknown>
        const path = action.payload.path.join('.').split('.')
        for (const key of path.slice(0, -1)) {
          if (!target[key] || isPrimitive(target[key])) {
            target[key] = {}
          } else {
            target = target[key] as Record<string, unknown>
          }
        }
        target[path[path.length - 1]] = action.payload.value
      }
    }
  }
  return rootReducer(state, action as Action)
}

export { rootReducer }

export default reducer
