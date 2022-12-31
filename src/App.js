import React, { useEffect, useState } from 'react'
import Appcopy from './Appcopy'

function App() {
  const first = {
    name: "nilu",
    phone: "55"
  }
  const settostorage = async () => {
    try {
      const set = localStorage.setItem("user", JSON.stringify(first))
    } catch (error) {
      console.log(error)
    }
  }
  const gettostorage = async () => {
    try {
      const set = JSON.parse(localStorage.getItem("user"))
      console.log({ set })
    } catch (error) {
      console.log(error)
    }
  }
  const deletestore = async () => {
    try {
      const set = localStorage.clear()
      console.log({ set })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    gettostorage()
  }, [])

  return (
    <div>
      <button onClick={() => settostorage()}>click</button>
      <button onClick={() => deletestore()}>delete</button>
      {/* <Appcopy/> */}
    </div>
  )
}

export default App