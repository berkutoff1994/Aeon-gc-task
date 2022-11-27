import { tableActionsTypes, tableDataAction } from '../../types/tableName'

export const addDataAction = (data: any): tableDataAction => ({
  type: tableActionsTypes.ADD_DATA,
  payload: data,
})
