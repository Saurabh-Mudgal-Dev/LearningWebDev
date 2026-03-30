import React from 'react'
import Navbar from './Navbar'
import About from './Components/About'
import {add, subtract} from './Components/Math'

const App = () => {
  console.log(add(2,3));
  console.log(subtract(5,2));
  return (
    <>
      <Navbar />
      <div>This is app component</div>
      <About />
    </>
  )
}

export default App