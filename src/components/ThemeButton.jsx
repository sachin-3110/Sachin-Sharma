import React from 'react'
import lightrope from '../assets/lightrope.png'
const ThemeButton = () => {
    let newAnimation="group-hover:-translate-y-10"
  return (
    
    <div>
        <div className="absolute right-20 h-auto overflow-hidden top-25">
        <img src={lightrope} className=" h-40 right-20 duration-200 -translate-y-10 active:translate-y-0" alt="" />
      </div>
    </div>
  )
}

export default ThemeButton