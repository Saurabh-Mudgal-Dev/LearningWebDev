import React from 'react'
import Navbar from './Navbar'
import About from './Components/About'
import {add, subtract} from './Components/Math'
import Parent from './propsPassing/Parent'
import Ternary from './ConceptComp/Ternary'
import UseStateOne from './Hooks/UseStateOne'
import MultiCounter from './Hooks/MultiCounter'
import DarkLightToggle from './Hooks/DarkLightToggle'
import FormInputHandle from './Hooks/FormInputHandle'
import ShowHidePsw from './Hooks/ShowHidePsw'
import ToDoList from './Hooks/ToDoList'
import LikeButton from './Hooks/LikeButton'
import AddToWishlist from './Hooks/AddToWishlist'
import NotifCounter from './Hooks/NotifCounter'
import DataFetching from './Hooks/DataFetching'

const App = () => {
  console.log(add(2,3));
  console.log(subtract(5,2));
  return (
    <>
      <Navbar />
      <div>This is app component</div>
      <About />
      <Parent />
      <Ternary />
      <UseStateOne />
      <MultiCounter />
      <DarkLightToggle/>
      <FormInputHandle/>
      <br />
      <ShowHidePsw/>
      <br />
      <ToDoList/>
      <br />
      <AddToWishlist/>
      <br />
      <LikeButton/>
      <br />
      <NotifCounter/>
      <br />
      <DataFetching />
    </>
  )
}

export default App