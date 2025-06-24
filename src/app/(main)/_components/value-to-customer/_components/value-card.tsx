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
        'xsm:p-0 xsm:px-[1.5475rem] xsm:pt-[1.475rem] relative flex items-start overflow-hidden rounded-[0.875rem] bg-white p-[1.87163rem_6.375rem_1.87163rem_1.875rem] shadow-[0px_-59.892px_74.865px_0px_rgba(3,33,7,0.04)] max-sm:flex-col sm:min-h-[20.07rem]',
        className,
      )}
    >
      <div className='xsm:hidden mr-[20.5625rem] inline-flex h-[3.05969rem] w-[3.05969rem] flex-shrink-0 items-center justify-center rounded-[0.6875rem] bg-[#fe7301] text-[1.2225rem] leading-[150%] font-bold text-white shadow-[0px_4px_15.2px_0px_rgba(255,115,0,0.25)]'>
        {number >= 10 ? number : '0' + number}
      </div>
      <div className='relative max-w-[33.1875rem] max-sm:mb-[6.3125rem] max-sm:self-stretch'>
        <div className='flex items-start'>
          <div className='mt-[0.59rem] mr-[0.3125rem]'>
            <Image
              src='/images/arrowV3.svg'
              alt=''
              className='h-[0.991rem] w-[0.67456rem] object-cover'
              width={10}
              height={15}
            />
          </div>
          <h3
            dangerouslySetInnerHTML={{
              __html: title ?? '',
            }}
            className='vtc__card-item__title-content xsm:mb-title-h5 flex-1 text-[1.75rem] leading-[139%] font-normal tracking-[-0.0175rem] text-[#081d1a]'
          ></h3>
        </div>
        <div className='xsm:my-[1rem] my-[1.6375rem] h-[0.0585rem] w-full rounded-[0.0585rem] bg-gradient-to-r from-[rgba(112,115,124,0.22)] from-[24.3%] to-[rgba(112,115,124,0)] to-[82.57%]'></div>
        <div
          dangerouslySetInnerHTML={{
            __html: content ?? '',
          }}
          className='vtc__card-item__desc-wrapper xsm:mb-body-14 text-[0.875rem] leading-[150%] font-normal text-[#666d80]'
        ></div>
      </div>
      <Image
        alt=''
        width={1000}
        height={1000}
        src='/our-value/bg-card.svg'
        className='absolute top-[6.65rem] right-0 z-0 h-auto w-full max-sm:hidden'
      />
      <Image
        alt=''
        width={1000}
        height={1000}
        src='/our-value/bg-card-mobile.svg'
        className='absolute bottom-0 left-0 z-0 h-auto w-full sm:hidden'
      />
      <Image
        alt=''
        width={1000}
        height={1000}
        src={image_url}
        className='absolute bottom-0 left-[63rem] z-[1] h-full w-auto max-sm:static max-sm:left-0 max-sm:h-auto max-sm:w-full max-sm:self-stretch'
      />
    </article>
  )
}
