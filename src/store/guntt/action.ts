import { tableRowsAction, homePageActionsTypes } from '../../types/tableName'

//экшен который мы кладем в диспатч внутри того компонента в котором меняется состояние (Table)
export const addTasks = (data: any): tableRowsAction => ({
  type: homePageActionsTypes.ADD_GAME_PARAMS,
  //внутри payload лежит то что мы передаем в экшене
  payload: data,
})

