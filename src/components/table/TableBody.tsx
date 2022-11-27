import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LavelFive } from '../../icons/lavelFive';
import { LavelFour } from '../../icons/lavelFour';
import { LavelOne } from '../../icons/lavelOne';
import { LavelThree } from '../../icons/lavelThree';
import { LavelTwo } from '../../icons/lavelTwo';
import { getContentRow, getEmptyRow } from '../../utils/getTable';
import './styles/tableBody.scss';

export function TableBody ({result}: any) {
  //получаем масив тасок
  // @ts-ignore next-line
  const array = useSelector((state) => state.addData).taskArray
  const [tasks, setTasks] = useState(array)

  //добавляем каждой таске иконку уровня
  tasks.map((task: { lavel: number; icon: JSX.Element; }) => {
    if(task.lavel === 1) task.icon = <LavelOne />
    if(task.lavel === 2) task.icon = <LavelTwo />
    if(task.lavel === 3) task.icon = <LavelThree />
    if(task.lavel === 4) task.icon = <LavelFour />
    if(task.lavel === 5) task.icon = <LavelFive />
  })
  
  const onHandler = (e: any) => {
    //получаем id строки по которой был клик
    let idRow = e.target.closest('.fullRow').id // id приходит
    let item = tasks.filter((el: any) => el.id == idRow)[0]
    let child = item.subtasks
    let newArray = tasks.map((task: {
      display: boolean; id: any; 
      }) => {
      //если родитель открыт а дочерний скрыт то открываем дочерний
      if(child.includes(task.id) && task.display === false && item.display === true) {
        task.display = true
        return task
      } 
      //иначе если и родитель и дочерний открыты то скрываем дочерний
      else if(child.includes(task.id) && task.display === true && item.display === true) { 
        task.display = false
        return task
      } 
      else return task //иначе просто возвращаем элемент без изменений
    })
    setTasks(newArray)


      // for(let i = 0; i < childID.length; i++) {
      //   if(document.getElementById(childID[i])?.classList.contains('displayNone') 
      //   && !document.getElementById(item[0].id)?.classList.contains('displayNone')) {
      //     document.getElementById(childID[i])?.classList.remove('displayNone')
      //     if(childID.length === 1) {
      //       return
      //     }
      //   } else {
      //     document.getElementById(childID[i])?.classList.add('displayNone')
      //   }
      //   getDisplay(childID[i])
      // }
  }

  
  console.log('ререндер')
  return(
    <tbody className='tbody'>
      {getEmptyRow(result)}
      {getContentRow(result, tasks, onHandler)}
      {getEmptyRow(result)}
    </tbody>
  )
}
