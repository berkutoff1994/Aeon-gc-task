import { useEffect, useState } from 'react';
import { MyGantt } from './components/MyGantt';
import { useDispatch } from 'react-redux';
import { addDataAction } from './store/taskArray/action';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch()
  
  // получаем входные данные для рендера
  useEffect(() => {
    fetch("http://82.202.204.94/tmp/test.php")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
      )}, [])
  if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    dispatch(addDataAction(data))
  return (
    <div className="App">
      <MyGantt data={data}/>
    </div>
    );
  }
}
export default App;
