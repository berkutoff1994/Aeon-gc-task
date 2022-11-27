import { combineReducers } from 'redux'
import { addDataReducer } from './reducer'

export const rootReducer = combineReducers({
  addData: addDataReducer,
})

export type RootState = ReturnType<typeof rootReducer>