'use client'

import type {ILink} from '@/types/header.interface'
import Link from 'next/link'

interface NavigationProps {
  menu: Array<{link: ILink}>
}

const Navigation = ({menu}: NavigationProps) => {
  return (
    <nav className='flex-shrink-0 inline-flex xsm:hidden'>
      <ul className='flex items-center'>
        {menu.map((menuItem: {link: ILink}, index: number) => (
          <li
            className='inline-flex py-[0.625rem] px-[1.25rem] justify-center items-center cursor-pointer relative'
            key={index}
          >
            <Link
              href={menuItem.link.url}
              className='text-[#666d80] text-[0.9375rem] font-medium leading-[1.75rem] tracking-[-0.00938rem] no-underline transition-colors duration-600 ease-[cubic-bezier(0.67,0,0.05,1)] cursor-pointer hover:text-[#1550e5] group'
            >
              {menuItem.link.title}
              <span className='absolute -bottom-[0.25rem] left-[55%] -translate-x-1/2 inline-block w-[4.33825rem]'>
                <span className='inline-block w-0 overflow-hidden transition-[width] duration-600 ease-[cubic-bezier(0.67,0,0.05,1)] group-hover:w-full'>
                  <svg
                    className='h-[0.43244rem] object-cover'
                    xmlns='http://www.w3.org/2000/svg'
                    width='72'
                    height='8'
                    viewBox='0 0 72 8'
                    fill='none'
                  >
                    <path
                      d='M1.29443 6.80782C17.7385 3.8037 54.895 0.261956 70.7061 1.90633'
                      stroke='#1550E5'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                    />
                  </svg>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
