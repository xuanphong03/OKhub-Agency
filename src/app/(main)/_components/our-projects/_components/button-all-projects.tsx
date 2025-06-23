import React from 'react'

interface ButtonAllProjectsProps {
  color?: string
  borderColor?: string
  borderLine?: string
  children: React.ReactNode
}

const ButtonAllProjects: React.FC<ButtonAllProjectsProps> = ({
  color = '#0725b7',
  borderColor = '#ffffff',
  borderLine = 'rgba(255, 255, 255, 0.1)',
  children,
}) => {
  return (
    <div className='group relative inline-flex w-full cursor-pointer p-[0.1875rem] transition-all before:absolute before:top-0 before:left-0 before:block before:h-full before:w-full before:border before:border-solid before:border-[rgba(255,255,255,0.1)]'>
      <div
        className='absolute top-0 left-0 z-5 h-[3px] w-[3px]'
        style={{
          borderLeft: `1px solid ${borderColor}`,
          borderTop: `1px solid ${borderColor}`,
        }}
      />
      <div
        className='absolute top-0 right-0 z-5 h-[3px] w-[3px]'
        style={{
          borderRight: `1px solid ${borderColor}`,
          borderTop: `1px solid ${borderColor}`,
        }}
      />
      <div
        className='absolute bottom-0 left-0 z-5 h-[3px] w-[3px]'
        style={{
          borderLeft: `1px solid ${borderColor}`,
          borderBottom: `1px solid ${borderColor}`,
        }}
      />
      <div
        className='absolute right-0 bottom-0 z-5 h-[3px] w-[3px]'
        style={{
          borderRight: `1px solid ${borderColor}`,
          borderBottom: `1px solid ${borderColor}`,
        }}
      />

      {/* Border */}
      <div
        className='absolute top-0 left-0 h-full w-full'
        style={{border: `1px solid ${borderLine}`}}
      />

      {/* Inner Content */}
      <div
        className='relative flex h-full w-full items-center bg-white pr-[2.625rem]'
        style={{border: `1px solid ${borderColor}`}}
      >
        {/* Text Content */}
        <div className='xsm:whitespace-nowrap relative z-10 flex h-[2.625rem] w-full items-center justify-center px-[2.3125rem] text-[0.75rem] font-normal text-black uppercase transition-colors delay-100 duration-300 group-hover:text-white max-sm:px-[1.48525rem]'>
          {children}
        </div>

        {/* Background Layer */}
        <div
          className='absolute top-0 right-0 bottom-0 w-[2.625rem] transition-all duration-[600ms] ease-[cubic-bezier(0.67,0,0.05,1)] sm:group-hover:w-full'
          style={{backgroundColor: color}}
        />

        {/* Icon */}
        <div className='xsm:right-[1rem] absolute top-1/2 right-[0.65rem] flex -translate-y-1/2 items-center justify-center transition-all duration-[600ms] ease-[cubic-bezier(0.67,0,0.05,1)] sm:right-[0.98rem] sm:group-hover:right-[4.26rem]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-[0.68763rem] w-[0.46806rem] sm:h-[0.991rem] sm:w-[0.6745rem]'
            viewBox='0 0 12 16'
            fill='none'
          >
            <rect
              x='0.603882'
              y='12.9928'
              width='11.1117'
              height='4.15067'
              rx='2.07534'
              transform='rotate(-45 0.603882 12.9928)'
              fill='white'
              fillOpacity='0.62'
            />
            <rect
              x='3.5387'
              y='0.0720825'
              width='11.1117'
              height='4.15067'
              rx='2.07534'
              transform='rotate(45 3.5387 0.0720825)'
              fill='white'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ButtonAllProjects
