import React from 'react'

const Button = ({name,iconUrl,backgroundColor, borderColor, textColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 rounded-full border font-montserrat  
                       ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}`: "bg-coral-red text-white border-coral-red"  } `}> 
        {name}
        {iconUrl && <img src={iconUrl} alt="iconUrl" className='ml-5 rounded-full w-5 h-5' />}
    </button>
  )
}

export default Button