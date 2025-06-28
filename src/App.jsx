import React from 'react'
import TopNav from './components/TopNav'
import Container from './components/Container'
import { useLocation } from 'react-router-dom'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white'>
      <Container/>

    </div>
  )
}

export default App