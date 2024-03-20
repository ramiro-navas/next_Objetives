import React from 'react'
import { BiPlus, BiUser } from 'react-icons/bi'

function Options() {
  return (
    <div className='w-76 h-166 bg-back rounded-16 grid justify-center'>
      <button>
        <BiPlus className='text-titles text-60'/>
      </button>
      <button>
        <BiUser className='text-titles text-60'/>
      </button>
    </div>
  )
}

export default Options
