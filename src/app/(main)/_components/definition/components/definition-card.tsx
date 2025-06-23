import clsx from 'clsx'
import React from 'react'

interface DefinitionCardProps {
  title: string
  value: string
  unit: string
  className?: string
}

function BackgroundCardDefault(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='269'
      height='180'
      viewBox='0 0 269 180'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <defs>
        <linearGradient
          id='blueGradient'
          x1='134.5'
          y1='0'
          x2='134.5'
          y2='180'
          gradientUnits='userSpaceOnUse'
        >
          <stop
            offset='0%'
            stopColor='#001CB3'
          ></stop>
          <stop
            offset='88.7%'
            stopColor='#548BEB'
          ></stop>
        </linearGradient>
      </defs>

      <path
        id='svgPath'
        d='M0.537598 162.891V16.5414C0.537598 7.6863 7.71608 0.507812 16.5712 0.507812H217.578C221.815 0.507812 225.88 2.18509 228.884 5.17311L263.738 39.838C266.764 42.8473 268.465 46.9388 268.465 51.2063V162.891C268.465 171.746 261.287 178.924 252.432 178.924H16.5712C7.71608 178.924 0.537598 171.746 0.537598 162.891Z'
        fill='white'
        stroke='#E2E2E2'
      ></path>
    </svg>
  )
}
function BackgroundCardActive(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='269'
      height='180'
      viewBox='0 0 269 180'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <defs>
        <linearGradient
          id='blueGradient'
          x1='134.5'
          y1='0'
          x2='134.5'
          y2='180'
          gradientUnits='userSpaceOnUse'
        >
          <stop
            offset='0%'
            stopColor='#001CB3'
          ></stop>
          <stop
            offset='88.7%'
            stopColor='#548BEB'
          ></stop>
        </linearGradient>
      </defs>

      <path
        id='svgPath'
        d='M0.537598 162.891V16.5414C0.537598 7.6863 7.71608 0.507812 16.5712 0.507812H217.578C221.815 0.507812 225.88 2.18509 228.884 5.17311L263.738 39.838C266.764 42.8473 268.465 46.9388 268.465 51.2063V162.891C268.465 171.746 261.287 178.924 252.432 178.924H16.5712C7.71608 178.924 0.537598 171.746 0.537598 162.891Z'
        fill='url(#blueGradient)'
        stroke='#E2E2E2'
      ></path>
    </svg>
  )
}
function DecorTopCard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={53}
      height={58}
      viewBox='0 0 53 58'
      fill='none'
      {...props}
    >
      <path
        d='M16.3468 1.9949C16.5069 3.22089 15.7815 9.87181 15.6434 11.0663C15.4508 12.7322 15.3892 14.6866 14.5986 16.2171C14.1643 17.0576 13.6448 17.9877 12.9687 18.6579C10.1882 21.4136 7.04601 24.0883 3.61038 26.0051C3.02602 26.3311 2.32606 26.5763 1.6485 26.5181C0.427918 26.4132 2.9091 26.6225 3.03654 26.6257C5.93281 26.6988 8.78309 25.6784 11.682 26.0136C15.1481 26.4144 15.4831 28.4678 16.901 31.2678C17.9037 33.2479 19.0438 35.0607 19.8808 37.1483C19.9457 37.3101 20.3666 38.1874 20.0725 38.3464C19.3942 38.7131 19.6987 35.8668 19.7222 35.6634C20.0622 32.7231 20.2357 29.8295 22.1128 27.4444C23.7 25.4277 26.011 24.6096 28.5238 24.4467C29.7921 24.3645 31.1445 24.7491 29.3806 23.436C28.03 22.4306 27.1181 21.0583 26.0502 19.7875C24.5081 17.9523 21.8223 17.0508 20.9814 14.816C20.0611 12.3701 18.6528 12.9216 18.8182 10.3359C18.8727 9.48393 17.9406 6.92217 18.6637 1.84038'
        stroke='#FF7300'
        strokeWidth='3.54066'
        strokeLinecap='round'
      />
      <path
        d='M37.5663 32.232C36.6728 36.1003 35.6463 44.984 30.3477 45.9474C29.7694 46.0525 27.9513 46.3179 29.639 46.5117C32.0636 46.7902 34.4632 46.8792 36.897 46.8792C38.0929 46.8792 38.6639 47.2947 39.3513 48.1786C39.8516 48.8217 40.1418 50.1913 40.4013 51.0004C40.6727 51.8466 41.0118 53.0829 41.11 53.9666C41.1854 54.6448 41.8742 55.1645 42.0419 55.7515C42.1098 55.9892 41.6661 54.1667 41.635 53.7828C41.5418 52.6328 41.5825 51.4708 41.5825 50.3179C41.5825 47.0423 42.8983 45.3419 45.7431 43.5718C47.0446 42.7619 48.471 42.3477 49.8511 41.7343C50.1052 41.6214 50.743 41.723 50.0217 41.4456C49.4251 41.2161 48.8235 41.2093 48.1974 41.2093C47.1244 41.2093 45.9584 40.6199 44.9031 40.3825C43.7387 40.1205 42.5225 39.8131 41.6875 38.9781C40.7142 38.0048 40.6493 36.8078 40.2175 35.4607C39.7634 34.0438 39.1926 32.5121 38.9838 31.0508'
        stroke='#FF7300'
        strokeWidth='3.54066'
        strokeLinecap='round'
      />
    </svg>
  )
}

export default function DefinitionCard({
  title,
  value,
  unit,
  className,
}: DefinitionCardProps) {
  return (
    <article className={clsx('group/card relative', className)}>
      <DecorTopCard className='ease-[cubic-bezier(0.76, 0, 0.29, 1)] absolute top-[-0.93rem] right-[2.04rem] z-[1] hidden h-auto w-[3.13463rem] opacity-0 transition-all duration-500 lg:block lg:group-hover/card:opacity-100' />
      <div className='ease-[cubic-bezier(0.76, 0, 0.29, 1)] relative z-0 h-full w-full transition-all duration-500 lg:group-hover/card:rotate-[-3.993deg] lg:group-hover/card:shadow-[0px_4px_25.6px_0px_rgba(0,0,0,0.00)]'>
        <div className='absolute top-0 left-0 z-0 h-full w-full'>
          <BackgroundCardDefault className='h-full w-full fill-white object-cover' />
        </div>
        <div className='ease-[cubic-bezier(0.76, 0, 0.29, 1)] absolute top-0 left-0 z-[1] hidden h-full w-full opacity-0 transition-all duration-500 lg:block lg:group-hover/card:opacity-100'>
          <BackgroundCardActive className='h-full w-full object-cover' />
        </div>

        <div className='relative z-[1] p-[0.64rem_1.42rem_1.21rem_1.23rem] max-sm:p-[0.41rem_0.91rem_0.42rem_0.79rem]'>
          <div className='relative mt-[1.31rem] w-fit max-sm:mt-[0.84rem]'>
            <div className='absolute top-[-1.12rem] right-[-0.76rem] z-[1] text-[2.90363rem] leading-[2.70106rem] font-bold max-sm:top-[-0.72rem] max-sm:right-[-0.43rem] max-sm:text-[1.86463rem] max-sm:leading-[93.023%]'>
              <span className='text-linear-orange relative z-0'>{unit}</span>
              <span className='ease-[cubic-bezier(0.76, 0, 0.29, 1)] absolute top-0 left-0 hidden text-white opacity-0 transition-all duration-500 lg:block lg:group-hover/card:opacity-100'>
                {unit}
              </span>
            </div>
            <p className='relative z-0 text-[3.93488rem] leading-[3.66038rem] font-bold max-sm:text-[2.52681rem] max-sm:leading-[93.023%]'>
              <span className='text-linear-deep-blue relative z-0'>
                {value}
              </span>
              <span className='ease-[cubic-bezier(0.76, 0, 0.29, 1)] absolute top-0 left-0 z-0 hidden text-white opacity-0 transition-all duration-500 lg:inline-block lg:group-hover/card:opacity-100'>
                {value}
              </span>
            </p>
          </div>
          <div className='lg:group-hover/card:rgba(226, 226, 226, 0.10) mt-[0.67rem] mb-[0.88rem] h-[0.03856rem] w-full bg-[#E2E2E2] max-sm:mt-[0.43rem] max-sm:mb-[0.56rem]'></div>
          <h3 className='text-[1rem] leading-[139%] font-normal text-[#081D1A] max-sm:text-[0.75rem] lg:group-hover/card:text-[rgba(255,255,255,0.8)]'>
            {title}
          </h3>
        </div>
      </div>
    </article>
  )
}
