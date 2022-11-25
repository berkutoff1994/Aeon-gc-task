import  {tableRowsAction, homePageActionsTypes}  from '../../types/tableName'
export type { Reducer } from 'redux'

// инициализируем и описываем тип дефолтного состояния
const defaultState = {
  objectParams: []
}

export const HomePageReducer = (
  state = defaultState,
  action: tableRowsAction
) => {
  switch (action.type) {
    case homePageActionsTypes.ADD_GAME_PARAMS:
      return Object.assign({}, state, {
        objectParams: action.payload
      }); 
    default:
      return state
  }
}