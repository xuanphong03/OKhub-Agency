import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface ValueCardProps {
  number: number
  title: string
  content: string
  image_url: string
  className?: string
}

export default function ValueCard({
  number,
  title,
  content,
  image_url,
  className,
}: ValueCardProps) {
  return (
    <article
      className={clsx(
        'relative p-[1.87163rem_6.375rem_1.87163rem_1.875rem] xsm:p-0 min-h-[20.07rem] xsm:min-h-[38.3125rem]  flex items-start rounded-[0.875rem] bg-white shadow-[0px_-59.892px_74.865px_0px_rgba(3,33,7,0.04)] overflow-hidden xsm:px-[1.5475rem] xsm:pt-[1.475rem]',
        className,
      )}
    >
      <div className='flex-shrink-0 mr-[20.5625rem] inline-flex w-[3.05969rem] h-[3.05969rem] justify-center items-center rounded-[0.6875rem] bg-[#fe7301] shadow-[0px_4px_15.2px_0px_rgba(255,115,0,0.25)] text-white text-[1.2225rem] font-bold leading-[150%] xsm:hidden'>
        {number >= 10 ? number : '0' + number}
      </div>
      <div className='relative w-[33.1875rem]'>
        <div className='flex items-start'>
          <div className='mt-[0.59rem] mr-[0.3125rem]'>
            <Image
              src='/images/arrowV3.svg'
              alt=''
              className='w-[0.67456rem] h-[0.991rem] object-cover'
              width={10}
              height={15}
            />
          </div>
          <h3
            dangerouslySetInnerHTML={{
              __html: title ?? '',
            }}
            className='flex-1 text-[#081d1a] text-[1.75rem] font-normal leading-[139%] tracking-[-0.0175rem] vtc__card-item__title-content xsm:mb-title-h5'
          ></h3>
        </div>
        <div className='my-[1.6375rem] xsm:my-[1rem] w-full h-[0.0585rem] rounded-[0.0585rem] bg-gradient-to-r from-[rgba(112,115,124,0.22)] from-[24.3%] to-[rgba(112,115,124,0)] to-[82.57%]'></div>
        <div
          dangerouslySetInnerHTML={{
            __html: content ?? '',
          }}
          className='text-[#666d80] text-[0.875rem] font-normal leading-[150%] vtc__card-item__desc-wrapper xsm:mb-body-14'
        ></div>
      </div>
      <Image
        alt=''
        width={1000}
        height={1000}
        src='/our-value/bg-card.svg'
        className='max-sm:hidden absolute right-0 top-[6.65rem] w-full h-auto z-0'
      />
      <Image
        alt=''
        width={1000}
        height={1000}
        src='/our-value/bg-card-mobile.svg'
        className='sm:hidden absolute bottom-0 left-0 w-full h-auto z-0'
      />
      <Image
        alt=''
        width={1000}
        height={1000}
        src={image_url}
        className='absolute bottom-0 left-[63rem] h-full w-auto z-[1] max-sm:left-0 max-sm:w-full max-sm:h-auto'
      />
    </article>
  )
}
