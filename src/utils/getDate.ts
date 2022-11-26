//функция для получения даты
export function getDate(string: string) {
  let startDate = string.split('.')
  let month = startDate[1]
  startDate.unshift(month)
  startDate.splice(2, 1)
  return new Date(startDate.join('.'))
}

//функция для получения периода
export function getPeriodDate(startDate: any, endData: any) {
  let result = [] 
  function search(date: string | number){
    return ('00' + date).slice(-2)
  }

  while(startDate.getTime() <= endData.getTime()) {
    result.push( '' + startDate.getFullYear() +'-'+ search(startDate.getMonth() +1) +'-'+ search(startDate.getDate()));
    startDate.setDate(startDate.getDate() + 1);
  }
  return result
}

