'use client'
import CustomBorderedButtonV1 from '@/components/bordered-button-v1'
import {AppContext} from '@/provider/AppProvider'
import {ILink} from '@/types/link.interace'
import {IMedia} from '@/types/media.interface'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import React, {useContext, useRef, useState} from 'react'

interface MenuMobileProps {
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
}

export default function MenuMobile({
  socialList,
  menu,
  contactLink,
  credential,
}: MenuMobileProps) {
  const context = useContext(AppContext)
  if (!context) throw new Error('AppContext must be used within AppProvider')
  const {openMenuMobile, setOpenMenuMobile} = context
  const containerRef = useRef<HTMLDivElement>(null)
  const menuMobileRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState<boolean>(false)

  const handleClickLinkItem = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.currentTarget.target === '_self') {
      setOpenMenuMobile(false)
    }
  }

  useGSAP(
    () => {
      if (openMenuMobile && !hasAnimated) {
        const ctx = gsap.context(() => {
          const items = gsap.utils.toArray<HTMLElement>('.fade-in-menu-item')
          if (!items) return
          const delays = [0.6, 0.75, 0.975, 0.975]

          const tl = gsap.timeline()

          items.forEach((item, index) => {
            tl.from(
              item,
              {
                opacity: 0,
                y: 50,
                duration: 0.75,
                ease: 'power2.inOut',
                delay: delays[index] ?? 0,
              },
              0,
            ) // Tất cả bắt đầu từ mốc 0, dùng delay riêng
          })
        }, menuMobileRef)

        setHasAnimated(true)
        return () => ctx.revert()
      }
    },
    {
      scope: containerRef,
      dependencies: [openMenuMobile, hasAnimated],
    },
  )

  return (
    <div
      ref={containerRef}
      className='relative h-screen w-full'
    >
      <div className='absolute top-0 left-0 z-0 h-full w-full'>
        <Image
          alt=''
          width={376}
          height={812}
          src='/nav-actions/bg-nav-actions.png'
          className='h-auto w-full object-cover'
        />
      </div>
      <div
        ref={menuMobileRef}
        className='relative z-[1] flex h-full flex-col justify-between p-[5.0625rem_1.16875rem_4.0625rem]'
      >
        <div className='fade-in-menu-item w-full self-stretch'>
          <p className='mb-[0.5625rem] text-[0.75rem] leading-[139%] text-[#C8C7C2]'>
            Theo dõi chúng tôi
          </p>
          <div className='flex items-center space-x-[0.26rem]'>
            {socialList &&
              Array.isArray(socialList) &&
              socialList.map((social, index) => {
                return (
                  <Link
                    key={index}
                    target='_blank'
                    href={social?.social_link?.url ?? '#'}
                    className='inline-flex h-[2.46819rem] w-[2.46819rem] items-center justify-center rounded-full border-[0.823px] border-solid border-[rgba(120,120,120,0.17)]'
                  >
                    <Image
                      alt=''
                      width={10}
                      height={12}
                      src={social?.social_icon?.url}
                      className='h-[0.7713rem] w-auto shrink-0'
                    />
                  </Link>
                )
              })}
          </div>
        </div>

        <nav className='fade-in-menu-item w-full self-stretch'>
          {menu &&
            Array.isArray(menu) &&
            menu.map((menuItem, index) => {
              return (
                <Link
                  key={index}
                  href={menuItem?.link?.url ?? '#'}
                  target={menuItem?.link?.target ?? '_self'}
                  className='flex h-[2.6875rem] items-center'
                  onClick={(e) => handleClickLinkItem(e)}
                >
                  <span className='text-[1.5rem] leading-[166.213%] font-normal text-[#081D1A]'>
                    {menuItem?.link?.title ?? ''}
                  </span>
                </Link>
              )
            })}
        </nav>

        <div className='fade-in-menu-item w-full self-stretch'>
          <p className='mb-[0.5rem] text-[0.75rem] leading-[139%] font-normal text-[#C8C7C2]'>
            Kết nối với chúng tôi ngay bây giờ
          </p>
          {contactLink && contactLink?.url && (
            <Link
              href={contactLink?.url ?? '#'}
              target={contactLink?.target ?? '_self'}
              className='relative inline-block'
              onClick={handleClickLinkItem}
            >
              <CustomBorderedButtonV1
                color='#00D3D0'
                borderLine='#F5F5F5'
                borderColor='#1550E5'
                backgroundColor='#F5F5F5'
              >
                {contactLink?.title}
              </CustomBorderedButtonV1>
            </Link>
          )}
        </div>

        <div className='fade-in-menu-item w-full self-stretch py-[0.625rem]'>
          <div className='relative flex w-full justify-between overflow-hidden rounded-[0.46875rem] border border-solid border-[#eee] p-[1.125rem_1.5rem_0.0625rem_1.25rem]'>
            <Image
              alt=''
              width={355}
              height={71.384}
              src='/nav-actions/bg-credential-card.svg'
              className='absolute bottom-[-1px] left-0 z-0 h-full w-full object-cover'
            />
            <div className='relative z-[1] shrink-0'>
              <p className='text-[1rem] leading-[150%] font-normal text-[#081D1A]'>
                {credential?.title}
              </p>
              <Link
                target='_blank'
                href={credential?.link_download?.url ?? '#'}
                className='relative inline-flex bg-[#293844] p-[0.54rem_0.96rem_0.36rem_0.46rem]'
              >
                <span className='relative z-[1] text-[0.46769rem] leading-[120%] font-normal text-white'>
                  {credential?.link_download?.title}
                </span>
                <span className='absolute top-[0.2rem] right-[0.2rem] z-[1] h-[0.2rem] w-[0.2rem] bg-white'></span>
              </Link>
            </div>
            <div className='mb-[-1px] h-[3.93394rem] shrink-0'>
              <Image
                alt={credential?.image?.alt ?? ''}
                width={111.8984}
                height={62.9429}
                src={credential?.image?.url}
                className='h-full w-auto shadow-[0px_4px_24.8px_0px_rgba(0,0,0,0.27)]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
