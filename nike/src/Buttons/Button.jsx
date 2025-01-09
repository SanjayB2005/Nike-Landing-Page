import React from 'react'

const Button = ({name,iconUrl}) => {
  return (
    <button className='flex justify-center items-center gap-2 bg-coral-red text-white px-4 py-2 rounded-full border font-montserrat border-coral-red'> 
        {name}
        <img src={iconUrl} alt="iconUrl" className='ml-5 rounded-full w-5 h-5' />
    </button>
  )
}

export default Button