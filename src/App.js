import React, { useState } from 'react'
import "./App.css";
function App() {

  const [state, setstate] = useState([
    "banana", "monn"
  ])
  const [text, settext] = useState("")
  const [edit, setedit] = useState("")
  const addtodo = () => {
    setedit("")
    settext("")
    if (edit) {
      const data = state.map((item, index) => item === edit ? item = text : item)
      setstate(data)
    } else {
      if (text) {
        setstate([...state, text])
      } else {
        alert("please enter some text")
      }
    }
  }

  const handleedit = (item) => {
    settext(item)
    setedit(item)
  }
  const deleteTodo = (item) => {
    const data = state.filter((items, index) => items !== item)
    setstate(data)
  }
  return (
    <div className="App">
      <div className="container">
        <h2>TODO LIST</h2>
        <div style={{
          display: 'flex', padding: 18, flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center'
        }}>
          <div className="todoForm" >
            <input type='text' value={text} 
              onChange={(e) => settext(e.target.value)} placeholder='enter Todo' />
            <button onClick={() => addtodo()}>{edit ? "edit" : "add"}</button>
          </div>
          <div className="allTodos">
            {
              state.map((item, index) => {
                return (
                  <li className="singleTodo">
                    <span className="todoText">{index + 1}.{item}</span>
                    <div>
                      <button onClick={() => handleedit(item)}>edit</button>
                      <button onClick={() => deleteTodo(item)}>delete</button>
                    </div>
                  </li>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App