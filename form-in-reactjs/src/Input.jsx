import React from 'react'

export const Input = ({firstName, onChange, placeholder, name, type, label, ...props}) => {
  return (
    <>
      <label for="firstname" className='text-[15px] block w-full mt-2 mb-1 text-left text-[#555] font-bold'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={firstName}
        onChange={onChange}
        placeholder={placeholder}
        className='block w-full p-2 box-border border-2 border-[#ddd] border-solid rounded text-[12px]'
        {...props}
      />
    </>
  )
}
