import { getPeriodDate } from "./getDate";

interface Task {
  id: number,
  title: string,
  period_start: string,
  period_end: string,
  fullPeriod: string [],
  subtasks: [],
  child: number,
  lavel: number,
  parent: number | string,
  background: string,
  border: string,
  icon: any,
  display: boolean,
}

export function getArrayTasks(obj: any, parent: number | string, lavel: number){
  //создаем массив с объектами задач
  let array: any[] = [];

  function getTasks(obj: any, parent: number | string, lavel: number) {
    
    for(let i = 0; i < obj.length; i++) {
      let task: Task = {
        id: 0,
        title: '',
        period_start: '',
        period_end: '',
        fullPeriod: [],
        subtasks: [],
        child: 0,
        lavel: 1,
        parent: '',
        background: '',
        border: '',
        icon: null,
        display: true
      }
      task.id = obj[i].id;
      task.title = obj[i].title;
      task.period_start = obj[i].period_start;
      task.period_end = obj[i].period_end;
      //записываем в объект задачи период ее выполнения
      task.fullPeriod = task.period_start !== task.period_end ? getPeriodDate(new Date(task.period_start), new Date(task.period_end)) : [task.period_start]

      //если у таски есть child то помещаем их длину в объект таски
      if(obj[i].hasOwnProperty('sub')) {
        task.child = obj[i].sub.length
        task.lavel = lavel + 1
      } else task.lavel = lavel + 1

      //указываем родителя для строки таски
      task.parent = parent 
      if(task.parent === '') return
      
      //стилизуем отображение выполнения таски
      if(task.lavel === 1) {
        task.background = '#E2EBFF'
        task.border = '#497CF6'
      }
      else
      if(task.lavel === 2 || task.lavel === 5) {
        task.background = '#FFF2E0'
        task.border = '#FFA530'
      }
      else
      if(task.lavel === 3 || task.lavel === 4) {
        task.background = '#CFF0D6'
        task.border = '#2DB77B'
      }

      //пушим таску в массив
      array.push(task)
      if(obj[i].sub) {
        getTasks(obj[i].sub, task.id, task.lavel)
      }
    }

    //перебираем готовый массив чтобы положить в таску id дочерних строк
    array.map((item) => 
      array.filter((el) => el.parent === item.id ? item.subtasks.push(el.id) : null)
    )
    //очищаем от неуникальных зачений
    for(let i = 0; i < array.length; i++) {
      array[i].subtasks = array[i].subtasks.filter(function(item: any, pos: any) {
        return array[i].subtasks.indexOf(item) == pos;
    })
    }
  }
  getTasks(obj, parent, lavel)
  return array
}