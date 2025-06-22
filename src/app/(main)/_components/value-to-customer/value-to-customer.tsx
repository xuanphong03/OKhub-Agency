'use client'

import ValueCard from '@/app/(main)/_components/value-to-customer/_components/value-card'
import CustomBorderedButtonV1 from '@/components/bordered-button-v1'
import {IValueToCustomer} from '@/types/value.interface'
import clsx from 'clsx'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useEffect, useRef} from 'react'

const ValueToCustomer = ({
  valueToCustomer,
}: {
  valueToCustomer: IValueToCustomer
}) => {
  const vtcWrapperRef = useRef<HTMLDivElement>(null)
  const vtcHeaderRef = useRef<HTMLDivElement>(null)
  const vtcTitleRef = useRef<HTMLHeadingElement>(null)
  const vtcCardListRef = useRef<HTMLDivElement>(null)
  const triggerEndSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const vtcWrapperEl = vtcWrapperRef.current
    const vtcHeaderEl = vtcHeaderRef.current
    const vtcTitleEl = vtcTitleRef.current
    const vtcCardListEl = vtcCardListRef.current
    const triggerEndSectionEl = triggerEndSectionRef.current

    if (!vtcWrapperEl || !vtcHeaderEl || !vtcCardListEl) return

    if (window.innerHeight < 700 && window.innerWidth < 638) {
      const vtcCardItem = document.querySelectorAll('.vtc__card-item')
      vtcCardItem.forEach((e) => {
        const titleContent = e.querySelector(
          '.vtc__wrapper .vtc__card-item__title-content',
        ) as HTMLElement
        const titleDesc = e.querySelector(
          '.vtc__wrapper .vtc__card-item__desc-wrapper',
        ) as HTMLElement
        if (titleContent) {
          titleContent.style.fontSize = '1.05rem'
        }
        if (titleDesc) {
          titleDesc.style.fontSize = '0.775rem'
        }
      })
    }

    const isMobile = window.innerWidth < 640
    // Không dùng ScrollTrigger Pin trên mobile
    if (isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const onTopViewPort = entry.isIntersecting
            if (vtcTitleEl) {
              vtcTitleEl.style.opacity = onTopViewPort ? '0' : '1'
            }
          })
        },
        {
          threshold: 0.5,
        },
      )
      if (triggerEndSectionEl) {
        observer.observe(triggerEndSectionEl)
      }
      return
    }

    const handleScrollTriggerPinVtcHeaderEl = () => {
      const lastVtcCardItemEl = vtcCardListEl?.querySelector(
        '.vtc__card-item:last-child',
      )
      if (!lastVtcCardItemEl) return
      const offsetTop = isMobile ? 0 : 7.5
      ScrollTrigger.create({
        trigger: vtcHeaderEl,
        endTrigger: lastVtcCardItemEl,
        pin: true,
        start: `top ${offsetTop}%`,
        end: `top ${offsetTop}%`,
        pinSpacing: false,
        scrub: true,
      })
    }

    const handleScrollTriggerPinVtcCardItemEl = () => {
      const items = vtcCardListEl.querySelectorAll('.vtc__card-item')
      const lastItem = vtcCardListEl.querySelector('.vtc__card-item:last-child')
      if (!items || !items.length) return

      const defaultOffsetTop = isMobile ? 10 : 30 // Tính theo phần trăm 30 = 30%
      const spaceOffsetTop = isMobile ? 10 : 12.875
      items.forEach((item, index) => {
        const offsetTop = defaultOffsetTop + spaceOffsetTop * index
        const offsetTopEnd =
          defaultOffsetTop + spaceOffsetTop * (items.length - 1)
        ScrollTrigger.create({
          trigger: item,
          endTrigger: lastItem,
          pin: true,
          start: `top ${offsetTop}%`,
          end: `top ${offsetTopEnd}%`,
          pinSpacing: false,
          scrub: true,
          anticipatePin: 1,
        })
      })
    }

    handleScrollTriggerPinVtcHeaderEl()
    handleScrollTriggerPinVtcCardItemEl()

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, []) // Empty dependency array since we only want to run this once on mount

  return (
    <section
      id='vtc'
      className='vtc__wrapper relative z-10 mb-[-0.2rem] rounded-t-[3.125rem] bg-gradient-to-b from-[#001cb3] to-[#548beb] max-sm:mt-[-2.81rem]'
      ref={vtcWrapperRef}
    >
      <div className='mx-auto max-w-[93.5625rem] py-[3.13rem_0_5rem]'>
        <div
          className='xsm:justify-start vtc__header xsm:flex-col xsm:items-center xsm:pt-[2rem] xsm:sticky xsm:top-[-1rem] flex h-[10.25rem] w-full items-end justify-between px-0'
          ref={vtcHeaderRef}
        >
          <h2
            dangerouslySetInnerHTML={{__html: valueToCustomer?.title ?? ''}}
            className='vtc__title xsm:text-center xsm:mb-title-h3 text-left text-[2.875rem] leading-[4rem] font-normal text-white'
            ref={vtcTitleRef}
          ></h2>
          {valueToCustomer.contact && valueToCustomer.contact.url && (
            <a
              href={valueToCustomer.contact.url}
              className='xsm:hidden relative block cursor-pointer no-underline'
            >
              <CustomBorderedButtonV1 color='#00D3D0'>
                {valueToCustomer.contact.title ?? ''}
              </CustomBorderedButtonV1>
            </a>
          )}
        </div>

        <div
          className='xsm:px-[1.25rem] xsm:mt-[-2rem] vtc__card-list pointer-events-none relative mt-[11.24rem] flex flex-col'
          ref={vtcCardListRef}
        >
          {valueToCustomer.our_value.map((item, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  'vtc__card-item xsm:sticky xsm:top-[6.25rem] xsm:shrink-0 relative mb-[4.18rem] flex-shrink-0',
                  {
                    'xsm:pt-[3.3875rem]': index !== 0,
                  },
                )}
              >
                <ValueCard
                  number={index + 1}
                  title={item.title ?? ''}
                  content={item.value_content ?? ''}
                  image_url={item?.thumbnail?.url}
                />
              </div>
            )
          })}
        </div>
        <div
          className='trigger-end-section'
          ref={triggerEndSectionRef}
        ></div>
      </div>
    </section>
  )
}

export default ValueToCustomer
