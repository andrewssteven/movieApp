import React from 'react'

const Filter = ({onFilter}) => {
  return (
    <div className='flex gap-2 mx-3 flex-wrap md:gap-15 md:mx-5'>
        <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => onFilter(e.target.value, 'title')}
        className='border-2 border-blue-500 p-1 px-3 outline-none w-full md:w-[30%] '
      />
      <input
        type="number"
        placeholder="Filter by rating"
        onChange={(e) => onFilter(e.target.value, 'rating')}
        className='border-2 border-blue-500 p-1 px-3 outline-none w-full md:w-[30%]'
      />
    </div>
  )
}

export default Filter