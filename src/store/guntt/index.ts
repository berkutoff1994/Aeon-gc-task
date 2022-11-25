import { combineReducers } from 'redux'
import { HomePageReducer } from './reducer'

export const rootReducer = combineReducers({
  tableRows: HomePageReducer,
})

export type RootState = ReturnType<typeof rootReducer>