import React from 'react'

const CategoryCom = ({name}) => {
  return (
    <main className='hover:bg-white/30 backdrop-blur-md rounded-sm text-semibold  
    p-1 px-2 opacity-75 hover:opacity-100 duration-150'>{name}</main>
  )
}

export default CategoryCom