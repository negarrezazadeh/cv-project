import React from 'react'
import CopyRight from '../../assets/icons/copy-right'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='flex bg-gray50 justify-center items-center py-6 px-2 text-gray600'>
        <CopyRight/>
        <p className='text-sm pl-1'>2024 | Designed and coded with ❤️️ by <span><Link href='https://github.com/negarrezazadeh'>Me</Link></span> 😊</p>
    </div>
  )
}
