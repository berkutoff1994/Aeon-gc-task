export interface TableName {
  value: string,
}

//создаем перечисление, которое будет содержать в себе все типы экшенов (на случай масштабирования приложения)
export enum tableActionsTypes {
  ADD_DATA = 'ADD_DATA',
}

export interface AddData {
  type: tableActionsTypes.ADD_DATA,
}

export interface tableDataAction {
  type: string;
  payload?: any;
}

