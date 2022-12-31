import React, { useState } from 'react'

function App() {




  const [state, setstate] = useState([
    { name: "nilu", id: "1" }
  ])
  const [text, settext] = useState("")
  const [edit, setEdit] = useState("")

  const addTodo = () => {
    settext("")
    setEdit("")
    if (edit) {
      const editTodo = state.map((item) => item.name === edit ? { ...item, name: text } : item)
      setstate(editTodo)
    } else {
      setstate([{ name: text, id: Math.random() }, ...state])
    }

  }


  const handleEdit = (item) => {
    settext(item)
    setEdit(item)
  }

  return (
    <div style={{
      backgroundColor: 'pink', width: "100%",
      height: "100%", display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: 12,
      border: "1px solid black"
    }}>
      <h1>TODO LIST</h1>
      <div style={{ display: 'flex' }}>
        <input type='text' value={text} style={{ height: 40, width: 200 }}
          onChange={(e) => settext(e.target.value)} placeholder='enter Todo' />
        <button onClick={() => addTodo()}>{edit ? "Edit" : "Add"}</button>
      </div>
      {
        state.map((item, index) => {
          return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h1>{item.name}</h1>
              <button style={{ height: 40, width: 100 }}
                onClick={() => handleEdit(item.name)}>edit</button>
              <button style={{ height: 40, width: 100 }}
                onClick={() => setstate(state.filter((ite, index) => ite.name !== item.name))}>delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default App