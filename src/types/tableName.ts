export interface TableName {
  value: string,
}

//создаем перечисление, которое будет содержать в себе все типы экшенов
export enum homePageActionsTypes {
  ADD_GAME_PARAMS = ' ADD_GAME_PARAMS',
}

//описываем кейс доставая из перечисления имя переменной
export interface AddTableName {
  type: homePageActionsTypes.ADD_GAME_PARAMS,
}

//описываем экшен
export interface tableRowsAction {
  type: string;
  payload?: any;
}