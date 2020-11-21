import './App.css';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import CssDrag from './Components/customDrag'


function App() {
  let boards = [{ serial: 'one' }, { serial: 'two' }, { serial: 'three' }]
  const [count, setCount] = useState(boards);
  const [reload, setReload] = useState(true);
  const [width, setWidth] = useState(350);
  const [height, setHeight] = useState(350);

  const addBoard = () => {

    let hold = count;
    //setCount(count.push({serial:'new'}))
    let key = Math.random().toString(36).substring(7);
    hold.push({ serial: key })
    setCount(hold)
    console.log(count);
    setReload(!reload)

  }

  const removeBoard = (serial) => {
    let filtered = count.filter((item) => {
      return item.serial !== serial;
    })

    console.log(filtered)
    setCount(filtered);
    //setReload(!reload);
  }


  const handleChange = (data) => {
    setWidth(data.width);
    setHeight(data.height);
    console.log(data)
  }
  return (
    <div className="App flexCol alignCenter justifyCenter">
      <h1>My Personal Board</h1>
      <Button style={{width:'150px'}} variant="contained" onClick={addBoard}>Add New Board</Button>
      {count?.map((item, index) => {
        return <CssDrag serial={item.serial} onClose={() => removeBoard(item.serial)} />
      })
      }
    </div>
  );
}

export default App;
