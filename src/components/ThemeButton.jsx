import React from 'react'
import lightrope from '../assets/lightrope.png'
import { useState } from 'react'
const ThemeButton = (props) => {  
  return (
    
        <img  src={lightrope} onClick={props.handleLight} className=" fixed h-40 right-0 -top-5 active:-top-1 pointer-cursor duration-200 " alt="" />
  )
}

export default ThemeButton