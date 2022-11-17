import React, { useState } from 'react'
import './css/App.css'
import Record from './Components/Record'

function App() {
  const [count, setCount] = useState(0)
  const [countList, setCountList] = useState([])

  function setRecord() {
    setCountList(countList.concat(<Record name={document.getElementById('name_input').value} count={count} />))
    clearAll()
  }

  function clearAll() {
    setCount(0)
    document.getElementById('name_input').value = ""
  }
  return (
    <div className="app">
      <div className='app_wrapper'>
        <div className='heading'>
          Simple Clicker: {count}
        </div>

        <div className='input'>
          <input id='name_input' placeholder='Enter Name'/>
        </div>

        <div className='buttons'>
          <button className='add' onClick={() => setCount(count + 1)}>+</button>
          <button className='sub' onClick={() => setCount(count - 1)}>-</button>
          <button className='clear' onClick={() => clearAll()}>Clear</button>
          <button className='set' onClick={() => setRecord()}>Record</button>
          <button className='reset' onClick={() => setCountList([])}>Reset List</button>
        </div>
        <div className='record_container'>
          <span className='record_title'>List: </span>
            {countList}
        </div>
      </div>
    </div>
  )
}

export default App
