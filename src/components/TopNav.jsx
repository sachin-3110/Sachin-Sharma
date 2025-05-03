import React, { useEffect, useState } from 'react'

const TopNav = () => {
    const [date, setDate]=useState([])
    useEffect(()=>{
        var initDate= Date()
        var newDate=initDate.split(" ")
        console.log(newDate)
        const onlyDate=newDate.slice(1,4)
        console.log("date",onlyDate)
        setDate(onlyDate)
    },[])
  return (
    <div className='w-full bg-amber-400 m-4 rounded-2xl min-h-[8vh] md:h-[10vh] md:my-5'>
    <h1 className='text-2xl'>Sachin Sharma</h1>
    <h1 className='text-2xl'>{date}</h1>
    </div>

  )
}

export default TopNav