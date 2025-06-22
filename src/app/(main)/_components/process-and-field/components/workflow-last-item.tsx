import CustomBorderedButtonV1 from '@/components/bordered-button-v1'
import {Workflow} from '@/types/workflow.interface'
import Link from 'next/link'

interface WorkflowLastItemProps {
  workflow: Workflow
}

export const WorkflowLastItem = ({workflow}: WorkflowLastItemProps) => {
  return (
    <div
      data-speed='1'
      className='item-snapping last-item relative flex h-[22.6875rem] w-full flex-row justify-start bg-gradient-to-b from-[#548beb] to-[#0059f1] p-5 pl-[1.875rem] sm:border-l sm:border-[#e6e8ea]'
    >
      <div className='xsm:justify-start flex h-full flex-col justify-between'>
        <div
          className='xsm:text-[1.9375rem] xsm:w-[19.5625rem] xsm:text-center xsm:leading-[2.7rem] mt-[1.72rem] w-[24.12613rem] text-[3.625rem] leading-[1.19] font-normal text-white'
          dangerouslySetInnerHTML={{
            __html: workflow.subtitle ?? '',
          }}
        ></div>
        <div
          className='xsm:w-[19.5625rem] xsm:mb-body-16 xsm:text-center xsm:mt-[0.75rem] w-[33.42481rem] text-xl leading-[150%] font-normal text-white opacity-70'
          dangerouslySetInnerHTML={{
            __html: workflow.description ?? '',
          }}
        ></div>

        <Link
          href='/'
          className='vtc__link-detail xsm:block xsm:mt-[1.4375rem] mx-auto hidden'
        >
          <CustomBorderedButtonV1 color='#00CEC8'>
            {workflow?.contact?.contact_on_mobile?.title}
          </CustomBorderedButtonV1>
        </Link>
      </div>
      <div className='last-item__btn xsm:hidden flex w-[15.6rem] flex-col'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='110'
          height='111'
          viewBox='0 0 110 111'
          fill='none'
          className='ml-auto h-[6.86181rem] w-[6.86181rem]'
        >
          <rect
            x='0.201172'
            y='0.25'
            width='109.789'
            height='109.789'
            fill='#1550E5'
          />
          <path
            d='M35.6387 71.7737L70.26 37.1523'
            stroke='white'
            strokeWidth='5'
            strokeLinecap='square'
            strokeLinejoin='round'
          />
          <path
            d='M44.6621 35.6602H71.7486V62.7466'
            stroke='white'
            strokeWidth='5'
            strokeLinecap='square'
            strokeLinejoin='round'
          />
        </svg>
        <Link
          href='/'
          className='relative flex h-[2.52613rem] w-[8.75744rem] cursor-pointer items-center justify-center bg-[#00d3d0] text-[1.17306rem] leading-[1.39931rem] font-normal tracking-[-0.02544rem] text-white no-underline'
        >
          <div className='absolute top-0 right-0 bottom-0 z-0 w-0 bg-[rgb(21,80,229)] transition-all duration-[0.5s] ease-in-out group-hover:right-auto group-hover:left-0 group-hover:w-full'></div>
          <p className='z-[1]'>{workflow?.contact?.contact_on_pc?.title}</p>
        </Link>
      </div>
    </div>
  )
}
