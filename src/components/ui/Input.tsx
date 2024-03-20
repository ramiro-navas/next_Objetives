import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{}


export function Input(props : Props) {
  return (
    <input 
    className='w-full h-5 font-bold bg-transparent placeholder:font-bold placeholder:text-placeholder placeholder:text-20 outline-none pr-5'
    style={{borderBottom: "1px solid ",borderImage: 'linear-gradient(to right, rgba(186,172,221,1) 0%, rgba(135,229,211,1) 50%, rgba(255,255,255,0) 100%) 1'}}
    {...props}
    />
    
  )
}

