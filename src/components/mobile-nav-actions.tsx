'use client'
import MenuMobile from '@/components/mobile-nav-actions/menu-mobile'
import NavActions from '@/components/mobile-nav-actions/nav-actions'
import {cn} from '@/lib/utils'
import {AppContext} from '@/provider/AppProvider'
import {ILink} from '@/types/link.interface'
import {IMedia} from '@/types/media.interface'
import React, {useContext} from 'react'

interface MobileNavActionsProps {
  contactLink: ILink
  socialList: {social_icon: IMedia; social_link: ILink}[]
  credential: {
    title: string
    desc: string
    image: IMedia
    link_download: ILink
  }
  menu: {
    link: ILink
  }[]
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

export default function MobileNavActions({
  contactLink,
  credential,
  socialList,
  menu,
  ctaActions,
}: MobileNavActionsProps) {
  const context = useContext(AppContext)
  if (!context) throw new Error('AppContext must be used within AppProvider')
  const {openMenuMobile} = context

  return (
    <>
      <div className='fixed bottom-0 left-0 z-[500] w-full sm:hidden'>
        <NavActions ctaActions={ctaActions} />
      </div>
      <div
        className={cn(
          'fixed top-0 left-0 z-[499] h-full w-full translate-y-full bg-white transition-all duration-500 sm:hidden',
          {'translate-y-0': openMenuMobile},
        )}
      >
        <MenuMobile
          menu={menu}
          contactLink={contactLink}
          credential={credential}
          socialList={socialList}
        />
      </div>
    </>
  )
}
