import ImageFallback from '@/components/image/ImageFallback'
import clsx from 'clsx'
import React from 'react'
interface PostCardPrimaryProps {
  postTitle: string
  postExcerpt: string
  postThumbnail: string
  postDate: string
  className?: string
}

function ContentWrapperSvgPc(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={710}
      height={162}
      viewBox='0 0 710 162'
      fill='none'
      {...props}
    >
      <path
        d='M709.281 78.0933C709.281 86.3776 702.565 93.0933 694.281 93.0933H525.761C520.353 93.0933 515.363 96.005 512.702 100.714L482.512 154.138C479.852 158.847 474.862 161.759 469.453 161.759L15.8862 161.758C7.60193 161.758 0.88623 155.043 0.88623 146.758V15.3755C0.88623 7.09123 7.60199 0.375488 15.8862 0.375488H694.281C702.565 0.375488 709.281 7.09122 709.281 15.3755V78.0933Z'
        fill='white'
      />
    </svg>
  )
}
function ContentWrapperSvgMb(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={337}
      height={93}
      viewBox='0 0 337 93'
      fill='none'
      {...props}
    >
      <path
        d='M336.759 55.8004C336.759 59.7338 333.57 62.9225 329.637 62.9225L266.119 62.9225C263.645 62.9225 261.349 64.2058 260.053 66.3123L245.801 89.4754C244.505 91.582 242.208 92.8652 239.735 92.8652L7.52997 92.8652C3.59653 92.8652 0.407837 89.6765 0.407837 85.7431V7.83994C0.407837 3.90651 3.59653 0.717842 7.52994 0.717842H329.637C333.57 0.717842 336.759 3.90652 336.759 7.83995L336.759 55.8004Z'
        fill='white'
      />
    </svg>
  )
}
function DetailWrapperSvgPC(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={217}
      height={61}
      viewBox='0 0 217 61'
      fill='none'
      {...props}
    >
      <path
        d='M216.61 45.758V15.7285C216.61 7.44424 209.894 0.728516 201.61 0.728516H41.8474C36.4773 0.728516 31.5169 3.59929 28.8415 8.25551L1.25685 56.2634C0.107682 58.2634 1.55139 60.758 3.85802 60.758H201.61C209.894 60.758 216.61 54.0423 216.61 45.758Z'
        fill='#00D3D0'
      />
    </svg>
  )
}

function DetailWrapperSvgMb(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={88}
      height={27}
      viewBox='0 0 88 27'
      fill='none'
      {...props}
    >
      <path
        d='M87.8592 19.7432V8.01371C87.8592 4.08028 84.6705 0.891602 80.7371 0.891602H19.3595C16.8883 0.891602 14.5938 2.17253 13.297 4.27603L0.709183 24.6934C0.124092 25.6424 0.806802 26.8653 1.92168 26.8653H80.7371C84.6705 26.8653 87.8592 23.6766 87.8592 19.7432Z'
        fill='#00D3D0'
      />
    </svg>
  )
}

export default function PostCardPrimary({
  postTitle,
  postExcerpt,
  postThumbnail,
  postDate,
  className,
}: PostCardPrimaryProps) {
  return (
    <article
      className={clsx(
        'relative cursor-pointer overflow-hidden rounded-[1.25rem] max-sm:rounded-[0.42219rem]',
        className,
      )}
    >
      <div className='absolute top-0 left-0 z-0 h-full w-full overflow-hidden'>
        <ImageFallback
          alt=''
          width={752}
          height={471}
          src={postThumbnail}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='absolute bottom-0 left-0 h-[18.04831rem] w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.54)_100%)] max-sm:hidden'></div>
      <div className='absolute right-[1.67rem] bottom-[1.67rem] left-[1.67rem] z-[1] max-sm:right-[0.5rem] max-sm:bottom-[0.5rem] max-sm:left-[0.5rem]'>
        <ContentWrapperSvgPc className='h-[10.08644rem] w-full max-sm:hidden' />
        <ContentWrapperSvgMb className='h-[5.75919rem] w-full sm:hidden' />
      </div>
      <div className='absolute right-[1.67rem] bottom-[1.75rem] z-[1] max-sm:right-[0.5rem] max-sm:bottom-[0.5rem]'>
        <DetailWrapperSvgPC className='h-[3.75rem] w-[13.125em] max-sm:hidden' />
        <DetailWrapperSvgMb className='h-[1.62338rem] w-[5.53056rem] sm:hidden' />
      </div>
      <div className='absolute top-[19.04rem] right-[3.73rem] left-[2.52rem] z-[2] max-sm:top-[9.9rem] max-sm:right-[1.67rem] max-sm:left-[1.04rem]'>
        <h3
          dangerouslySetInnerHTML={{__html: postTitle}}
          className='mb-[0.3125rem] line-clamp-1 h-[1.8125rem] w-full text-[1.5rem] leading-[120%] font-normal text-[#081D1A] capitalize max-sm:mb-[1.26rem] max-sm:line-clamp-2 max-sm:h-[2.5625rem] max-sm:text-[1rem]'
        ></h3>
        <p
          dangerouslySetInnerHTML={{__html: postExcerpt}}
          className='mb-[2rem] line-clamp-1 h-[1.5625rem] w-full text-[1.125rem] leading-[140%] text-[#666D80] max-sm:hidden'
        ></p>
        <div className='flex w-full items-center'>
          <span className='mr-[25.75rem] inline-block text-[2rem] leading-[120%] font-normal text-[#E6E8EA] capitalize max-sm:mr-[12.67rem] max-sm:text-[0.934rem] max-sm:leading-[87.5%] max-sm:text-[#666D80]'>
            {postDate}
          </span>
          <span className='inline-block text-[1.125rem] leading-[120%] font-bold whitespace-nowrap text-white max-sm:text-[0.75rem] max-sm:font-normal'>
            Xem chi tiết
          </span>
        </div>
      </div>
    </article>
  )
}
