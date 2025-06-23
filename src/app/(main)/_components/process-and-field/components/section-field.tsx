'use client'

import useIsMobile from '@/hooks/useIsMobile'
import {Commitment} from '@/types/workflow.interface'
import {gsap} from 'gsap'
import Image from 'next/image'
import {useEffect, useRef} from 'react'

export default function SectionField({commitment}: {commitment: Commitment}) {
  const isMobile = useIsMobile()
  const speeds = [1.5, 1, 2.75, 1, 2.5, 1.5, 1, 2.5, 1.5, 1.5, 1, 2.25]
  const count = speeds.length
  const pinSectionRef = useRef<HTMLDivElement>(null)
  const fieldOfActivityRef = useRef<HTMLDivElement>(null)
  const fieldOfActivityTitleRef = useRef<HTMLDivElement>(null)
  const fieldOfActivityListImageRef = useRef<HTMLDivElement>(null)
  const badge__labelTextRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (window.innerWidth < 639) {
      gsap.to(fieldOfActivityRef.current, {
        filter: 'blur(2px)',
        scrollTrigger: {
          trigger: pinSectionRef.current,
          start: 'top top',
          end: '120% top',
          pin: fieldOfActivityRef.current,
          pinSpacing: false,
          anticipatePin: 1,
          toggleActions: 'play reverse play reverse',
          // markers: true,
        },
      })
      // 2. Bỏ blur từng image trong danh sách khi vào view
      const images = document.querySelectorAll<HTMLImageElement>(
        '.fieldOfActivity_listImage-img',
      )
      images.forEach((image) => {
        gsap.to(image, {
          filter: 'blur(0px)',
          scrollTrigger: {
            trigger: image,
            start: 'top 80%',
            end: 'top top',
            toggleActions: 'play reverse play reverse',
            // markers: true,
          },
        })
      })
    } else {
      // Pin section
      gsap.to(fieldOfActivityRef.current, {
        scrollTrigger: {
          trigger: pinSectionRef.current,
          start: 'clamp(top top)',
          end: 'bottom bottom',
          pin: fieldOfActivityRef.current,
          scrub: true,
        },
      })

      // Blur title
      gsap.to(fieldOfActivityTitleRef.current, {
        scrollTrigger: {
          trigger: fieldOfActivityListImageRef.current,
          start: 'top 65%',
          end: 'bottom top',
          toggleActions: 'play reverse play reverse',
        },
        filter: 'blur(3.5px)',
      })

      // Random movement and blur for each image
      const images = document.querySelectorAll<HTMLImageElement>(
        '.fieldOfActivity_listImage-img',
      )
      images.forEach((image) => {
        const randomX = gsap.utils.random(-100, 100, 5, true)

        gsap.to(image, {
          x: randomX,
          scrollTrigger: {
            trigger: image,
            start: 'top 120%',
          },
        })

        gsap.to(image, {
          filter: 'blur(0px)',
          scrollTrigger: {
            trigger: image,
            start: 'top 65%',
            end: '50% 27.5%',
            toggleActions: 'play reverse play reverse',
          },
        })
      })

      // Badge animation 2
      if (badge__labelTextRef.current) {
        gsap.set(badge__labelTextRef.current, {width: '0%'})
        gsap.to(badge__labelTextRef.current, {
          width: '100%',
          opacity: 1,
          scrollTrigger: {
            trigger: fieldOfActivityTitleRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        })
      }
    }
  }, [])
  return (
    <div
      ref={pinSectionRef}
      className='xsm:bg-transparent bg-[#f4f4f4]'
    >
      <div className='xsm:h-[60vh] xsm:overflow-hidden sm:h-screen'>
        <div
          ref={fieldOfActivityRef}
          className='xsm:overflow-hidden absolute z-[11] h-screen w-full'
        >
          <div className='mt-[3.75rem] mb-4 hidden pl-[1.6rem]'>
            <div className='xsm:w-full relative flex h-[1.374rem] w-max items-center justify-center bg-[#1550e5] px-[0.21694rem] py-[0.07231rem]'>
              <p className='text-xs leading-[134%] font-normal text-white'>
                {commitment.tag ?? ''}
              </p>
            </div>
          </div>
          <Image
            className='xsm:hidden absolute bottom-0 left-[-4.81rem] z-[-1] h-[36.25rem] w-[75rem]'
            src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/foot-r-img-bg3.webp'
            alt=''
            width={750}
            height={362.5}
          />
          <Image
            className='xsm:block xsm:top-[0.25rem] xsm:left-0 xsm:w-full xsm:h-auto absolute top-[-0.37rem] left-[-8.44rem] hidden h-[24.125rem] w-[49.875rem]'
            src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/foot-r-img-bg3-mb.webp'
            alt=''
            width={498.75}
            height={241.25}
          />
          <Image
            className='xsm:hidden pointer-events-none absolute top-0 left-[-13.81rem] z-[-1] block h-[60.88781rem] w-[97.4205rem]'
            src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/Img_mask-group-scaled.webp'
            alt=''
            width={974.205}
            height={608.8781}
          />
          <div
            ref={fieldOfActivityTitleRef}
            className='xsm:w-[21.4375rem] xsm:text-[1.875rem] xsm:top-[14rem] xsm:left-[12rem] absolute top-1/2 left-1/2 z-[1] w-[56.90819rem] -translate-x-1/2 -translate-y-1/2 text-[2.875rem] leading-[1.39] font-normal text-[#9c9c9c]'
          >
            <div
              dangerouslySetInnerHTML={{
                __html: commitment.title,
              }}
            ></div>
            <div className='sm:hidden'>
              <div className='badge-lv absolute top-0 m-[0.625rem] flex w-max flex-col'>
                <p className='relative flex h-[3.04881rem] w-0 items-center justify-center overflow-hidden bg-[#1550e5] px-[0.48138rem] text-[1.625rem] leading-[134%] font-normal whitespace-nowrap text-white opacity-0 transition-all duration-[0.75s] ease-in-out'>
                  {commitment.tag ?? ''}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={fieldOfActivityListImageRef}
        className='xsm:my-0 xsm:grid-cols-5 xsm:gap-y-[5rem] relative z-[11] mt-20 grid grid-cols-3 gap-y-[25rem] p-4 pb-20'
      >
        {commitment?.img?.map((item, index: number) => {
          return (
            <div
              key={index}
              className='fieldOfActivity_listImage-img xsm:col-span-3 xsm:nth-[3n+2]:col-start-2 xsm:nth-[3n]:col-start-3 xsm:h-[10.99025rem] z-[-1] flex h-full w-full blur-[6.9px]'
              data-speed={isMobile ? '' : `clamp(${speeds[index % count]})`}
            >
              <Image
                src={item.url}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className='xsm:w-[15.25rem] xsm:h-[10.99025rem] mx-auto h-[15.875rem] w-[21.1875rem] rounded-[0.625rem] object-cover'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
