import { ArrowIcon } from "../icons/arrow"

//функция возвращает пустые строки вверху и внизу таблицы
export function getEmptyRow(result: string[]) {
  return(
    <tr className='emptyRow'>
        <td className='headcol'></td>
        {result.map(() => <td></td>)}
      </tr>
  )
}

//функция возвращает контентное наполнение таблицы
export function getContentRow(result: string[], array: any[], onHandler: any) {
  return(
    array.map((item) => 
      <tr key={item.id} className='fullRow' id={item.id} style={{display: item.display ? '' : 'none'}}>
        <td className='headcol'>
          <div className='headcol__block' style={{paddingLeft: `calc(${item.lavel} * 10px)`}}>
            <div className='headcol__arrow-icon' onClick={onHandler}>{item.child > 0 ? <ArrowIcon /> : ''}</div>
            <div className='headcol__lavel-icon'>{item.icon}</div>
            <div className='headcol__child-count'>{item.child}</div>
            <div className='headcol__title'>{item.title}</div>
          </div>
        </td>
        {result.map((col: string) => 
        col === item.period_start 
        ? 
        <td key={col} className='progress-td'>
          <div className='progress-block'>
            <div className='progress-line' style={{width: `calc(31.5px * ${item.fullPeriod.length})`, background: item.background, border: `1px solid ${item.border}`}}></div>
            <div className='progress-title'>{item.title}</div>
          </div> 
        </td>
        : 
        <td></td>
        )}
      </tr>)
  )
}