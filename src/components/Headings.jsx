import React from 'react'

const Headings = ({text="Default Heading",padding="0",margin="0"}) => {
  return (
          <h2 className={`p-${padding} font-semibold border-b-1 w-fit m-${margin} tracking-wider text-3xl`}>{text}</h2>

  )
}

export default Headings