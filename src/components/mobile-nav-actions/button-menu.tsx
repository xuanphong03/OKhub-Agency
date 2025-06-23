import {cn} from '@/lib/utils'
import React from 'react'

interface ButtonMenuProps {
  isOpen: boolean
  onToggle: () => void
}

export default function ButtonMenu({isOpen, onToggle}: ButtonMenuProps) {
  const handleClickButton = () => {
    if (!onToggle) return
    onToggle()
  }
  return (
    <button
      onClick={handleClickButton}
      className='flex h-full w-full items-center justify-center'
    >
      <div className='relative flex h-[1.5125rem] w-[1.75rem] flex-col items-center justify-center'>
        <div
          className={cn(
            'absolute top-1/4 left-1/2 h-[0.19669rem] w-full origin-center -translate-x-1/2 -translate-y-1/2 self-stretch rounded-[1.08413rem] bg-white transition-all duration-500',
            {'top-1/2 rotate-[-45deg]': isOpen},
          )}
        ></div>
        <div
          className={cn(
            'absolute top-1/2 left-1/2 h-[0.19669rem] w-full origin-center -translate-x-1/2 -translate-y-1/2 self-stretch rounded-[1.08413rem] bg-white transition-all duration-500',
            {'top-1/2 rotate-[45deg]': isOpen},
          )}
        ></div>
        <div
          className={cn(
            'absolute top-3/4 left-1/2 h-[0.19669rem] w-full origin-center -translate-x-1/2 -translate-y-1/2 self-stretch rounded-[1.08413rem] bg-white transition-all duration-500',
            {'top-1/2 rotate-[-45deg]': isOpen},
          )}
        ></div>
      </div>
    </button>
  )
}
