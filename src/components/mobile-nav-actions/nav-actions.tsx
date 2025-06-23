'use client'
import ButtonMenu from '@/components/mobile-nav-actions/button-menu'
import {AppContext} from '@/provider/AppProvider'
import {ILink} from '@/types/link.interace'
import Image from 'next/image'
import Link from 'next/link'
import React, {useContext, useEffect} from 'react'
interface NavActionsProps {
  ctaActions: {
    cta_quote: {
      title: string
      desc: string
      link: ILink
    }
    link_facebook: ILink
    link_zalo: ILink
  }
}
export default function NavActions({ctaActions}: NavActionsProps) {
  const context = useContext(AppContext)
  if (!context) throw new Error('AppContext must be used within AppProvider')
  const {openMenuMobile, setOpenMenuMobile} = context

  const handleToggleMenu = () => {
    setOpenMenuMobile(!openMenuMobile)
  }
  useEffect(() => {
    if (openMenuMobile) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [openMenuMobile])
  return (
    <div className='relative z-[1] w-full bg-white'>
      <ul className='flex h-[4rem] items-center justify-between'>
        <li className='h-full flex-1'>
          {ctaActions?.cta_quote?.link?.url && (
            <Link
              target='_blank'
              href={ctaActions?.cta_quote?.link?.url}
              className='flex h-full w-full items-center justify-center py-[1rem]'
            >
              <Image
                alt=''
                width={28}
                height={28}
                src='/nav-actions/cta-icon-quote.svg'
                className='mr-[0.375rem] h-auto w-[1.75rem] shrink-0'
              />
              <div className='flex shrink-0 flex-col'>
                <p className='mb-[-0.12rem] self-stretch text-[0.75rem] leading-[150%] font-bold text-[#081D1A]'>
                  {ctaActions?.cta_quote?.title}
                </p>
                <span className='self-stretch text-[0.625rem] leading-[150%] font-normal text-[#666D80]'>
                  {ctaActions?.cta_quote?.desc}
                </span>
              </div>
            </Link>
          )}
        </li>
        <li className='h-full w-[4rem] shrink-0 border-l border-solid border-[#f4f4f4]'>
          {ctaActions?.link_facebook?.url && (
            <Link
              target='_blank'
              href={ctaActions?.link_facebook?.url}
              className='flex h-full w-full items-center justify-center'
            >
              <Image
                alt=''
                width={28}
                height={28}
                src='/nav-actions/cta-icon-messenger.svg'
                className='h-auto w-[1.75rem] shrink-0'
              />
            </Link>
          )}
        </li>

        <li className='h-full w-[4.3125rem] shrink-0 border-x border-solid border-[#f4f4f4]'>
          {ctaActions?.link_zalo?.url && (
            <Link
              target='_blank'
              href={ctaActions?.link_zalo?.url}
              className='flex h-full w-full shrink-0 items-center justify-center'
            >
              <Image
                alt=''
                width={28}
                height={28}
                src='/nav-actions/cta-icon-zalo.svg'
                className='h-auto w-[2.36875rem] shrink-0'
              />
            </Link>
          )}
        </li>

        <li className='h-full w-[4.5625rem] shrink-0 bg-[#1550E5]'>
          <ButtonMenu
            isOpen={openMenuMobile}
            onToggle={handleToggleMenu}
          />
        </li>
      </ul>
    </div>
  )
}
