
const Pills = ({text}) => {
  return (
    <div className='group h-8 relative overflow-hidden text-nowrap px-5 rounded-full border-2'>
        <div className='duration-300 group-hover:-translate-y-[100%] capitalize' >{text}</div>
        <div className='duration-300 group-hover:-translate-y-[100%] capitalize' >{text}</div>
    </div>
  )
}

export default Pills