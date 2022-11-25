import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LavelFive } from '../../icons/lavelFive';
import { LavelFour } from '../../icons/lavelFour';
import { LavelOne } from '../../icons/lavelOne';
import { LavelThree } from '../../icons/lavelThree';
import { LavelTwo } from '../../icons/lavelTwo';
import { addTasks } from '../../store/guntt/action';
import { getContentRow, getEmptyRow } from '../../utils/getTable';
import { getArrayTasks } from '../../utils/getTasks';
import './styles/tableBody.scss';

export function TableBody ({chart, result}: any) {
  const dispatch = useDispatch()
  let obj = [chart]
  let parent = 0; 
  let lavel = 0

  //получаем масив тасок
  let array = getArrayTasks(obj, parent, lavel)
  console.log(array)

  //добавляем каждой таске иконку уровня
  array.map((task) => {
    if(task.lavel === 1) task.icon = <LavelOne />
    if(task.lavel === 2) task.icon = <LavelTwo />
    if(task.lavel === 3) task.icon = <LavelThree />
    if(task.lavel === 4) task.icon = <LavelFour />
    if(task.lavel === 5) task.icon = <LavelFive />
  })

  dispatch(addTasks(array))

  // const data = useSelector((state) => state.tableName)
  
  //скрываем и раскрываем строки по клику на иконку
  const onHandler = (e: any) => {

    //получаем id строки по которой был клик
    let idRow = e.target.closest('.fullRow').id
    
    function getDisplay(idRow: number) {

      //получаем объект у которого id == id строки по которой был клик
      let item = array.filter((el: any) => el.id == idRow)
      
      //находим id дочерних элементов объекта
      let childID = item[0].subtasks

      for(let i = 0; i < childID.length; i++) {
        if(document.getElementById(childID[i])?.classList.contains('displayNone') 
        && !document.getElementById(item[0].id)?.classList.contains('displayNone')) {
          document.getElementById(childID[i])?.classList.remove('displayNone')
          if(childID.length === 1) {
            return
          }
        } else {
          document.getElementById(childID[i])?.classList.add('displayNone')
        }
        getDisplay(childID[i])
      }
    }
    getDisplay(idRow)
  }

  return(
    <tbody className='tbody'>
      {getEmptyRow(result)}
      {getContentRow(result, array, onHandler)}
      {getEmptyRow(result)}
    </tbody>
  )}