import React, { useEffect, useState } from 'react'

const TopNav = () => {
    const [date, setDate]=useState([])
    const [Time, setTime]=useState([])
    useEffect(()=>{
        const updateDateTime=()=>{
             var onlyDate=new Date().toLocaleString().split("/")
             var onlyTime = new Intl.DateTimeFormat('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
              }).format(new Date());
              setDate(onlyDate)

            // setDate(onlyDate.toLocaleString().split("/").slice(0,3))
            setTime(onlyTime.split(":"))
            
        }
        updateDateTime()
        const interval=setInterval(updateDateTime,1000)
        return ()=>clearInterval(interval);
    },[])
  return (
    <div className='w-full bg-amber-400 m-4 rounded-2xl min-h-[8vh] md:h-[10vh] md:my-5'>
    <h1 className='text-2xl'>Sachin Sharma</h1>
    <div className='text-2xl flex gap-1'>
        <h1>{date[0]}/</h1>
        <h1>{date[1]}/</h1>
        <h1>{date[2]?.split(",")[0]}</h1>

    </div>
    <div className='flex gap-1'>
        <h1>{Time[0]}</h1>:
        <h1>{Time[1]}</h1>:
        <h1 className=''>{Time[2]?.split("").slice(0,2).join("")}</h1>
        <h1 className='uppercase'>{Time[2]?.split("").slice(2,5).join("")}</h1>
    </div>
    
    </div>


  )
}

export default TopNav