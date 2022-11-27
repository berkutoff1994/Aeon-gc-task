import { getArrayTasks } from '../../utils/getTasks'
import {
  tableActionsTypes,
  tableDataAction,
} from '../../types/tableName'
export type { Reducer } from 'redux'


// инициализируем и описываем тип дефолтного состояния редьюсера
const defaultState = {
  taskArray: [],
}

export const addDataReducer = (
  state = defaultState,
  action: tableDataAction
) => {
  switch (action.type) {
    case tableActionsTypes.ADD_DATA:
      let obj = [action.payload.chart]
      let parent = 0; 
      let lavel = 0
      //получаем масив тасок
      let array: any = getArrayTasks(obj, parent, lavel)
      defaultState.taskArray = array;
      return {...defaultState}
    default:
      return state
  }
}