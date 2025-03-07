import React from 'react'

const Comment = ({data}) => {
    const{name, text , replies} =data
  return (
    <div className='flex shadow-sm bg-gray-200 p-2 rounded-lg my-2'>
        <img 
        className='w-12 h-12'
        alt='user icon'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s'
        />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p className=''>{text}</p>
        </div>
        <p></p>
    </div>
  )
}

export default Comment