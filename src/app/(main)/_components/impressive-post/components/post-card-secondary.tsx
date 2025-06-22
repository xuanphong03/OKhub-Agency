import ImageFallback from '@/components/image/ImageFallback'
import clsx from 'clsx'
import React from 'react'

interface PostCardProps {
  postTitle: string
  postThumbnail: string
  postPublishDate: string
  className: string
}

export default function PostCardSecondary({
  postTitle,
  postThumbnail,
  postPublishDate,
  className,
}: PostCardProps) {
  return (
    <article
      className={clsx(
        'group relative cursor-pointer overflow-hidden rounded-[1.25rem] border border-solid border-[#E4E4E4] bg-white shadow-[0px_4px_24.4px_0px_rgba(0,0,0,0.04)] max-sm:rounded-none max-sm:border-none max-sm:shadow-none',
        className,
      )}
    >
      <ImageFallback
        alt=''
        width={358.6755}
        height={230.4141}
        src={postThumbnail}
        className='absolute top-0 left-0 z-0 h-full w-full object-cover transition-all duration-[600ms] ease-out max-sm:static max-sm:mb-[0.375rem] max-sm:h-[7.8295rem] max-sm:w-full max-sm:rounded-[0.41663rem] sm:opacity-0 lg:scale-125 lg:group-hover:scale-100 lg:group-hover:opacity-100'
      />
      <div className='absolute top-0 left-0 z-0 h-full w-full bg-[linear-gradient(0deg,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.40)_100%)] opacity-0 transition-all duration-[600ms] ease-out max-sm:h-auto lg:group-hover:opacity-100'></div>
      <div className='relative z-[1] flex h-full w-full flex-col justify-between p-[1.29rem_1.25rem_1.21rem] max-sm:block max-sm:h-auto max-sm:p-0'>
        <h3
          dangerouslySetInnerHTML={{__html: postTitle ?? ''}}
          className='line-clamp-3 h-[4.5rem] self-stretch text-[1.25rem] leading-[120%] text-[#081D1A] transition-all duration-[600ms] ease-out max-sm:mb-[0.44rem] max-sm:line-clamp-2 max-sm:h-[2.625rem] max-sm:text-[0.875rem] max-sm:leading-[150%] lg:group-hover:text-white'
        ></h3>
        <div className='flex items-end justify-between self-stretch border-t border-solid border-[#E8E8E8] max-sm:border-none max-sm:pt-0 sm:pt-[0.5625rem]'>
          <span className='inline-block h-[2.25rem] text-[1.875rem] leading-[120%] font-normal text-[#E6E8EA] capitalize max-sm:h-auto max-sm:text-[0.75rem] max-sm:leading-[97.214%] max-sm:text-[#666D80] lg:transition-all lg:duration-[600ms] lg:ease-out lg:group-hover:h-[1.1875rem] lg:group-hover:text-[1.25rem] lg:group-hover:text-white'>
            {postPublishDate}
          </span>
          <span className='text-[1rem] leading-[160%] font-normal text-[#1550E5] transition-all duration-[600ms] ease-out max-sm:hidden lg:group-hover:text-white'>
            Xem chi tiết
          </span>
        </div>
      </div>
    </article>
  )
}
