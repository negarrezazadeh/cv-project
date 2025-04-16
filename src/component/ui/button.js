import React from 'react'

export default function Button({className , children}) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
        <button className={`rounded-xl px-5 py-1 bg-gray200 dark:bg-darkGray200 dark:text-darkGray600 text-gray600 text-sm`}>{children}</button>
    </div>
  )
}
