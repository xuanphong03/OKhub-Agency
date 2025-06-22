import Image from 'next/image'

interface DefinitionCardProps {
  title: string
  value: string
  unit: string
}

const DefinitionCard = ({title, value, unit}: DefinitionCardProps) => {
  return (
    <div className='relative w-[16.7455rem] h-[11.151rem] definition__card xsm:w-[10.75813rem] xsm:h-[7.1642rem]'>
      <div
        className='absolute inset-0 w-full h-full origin-center'
        id='cardImage'
      >
        <svg
          width='269'
          height='180'
          viewBox='0 0 269 180'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-full h-full'
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
      </div>
      <div
        className='absolute z-20 opacity-0 scale-0 -top-[1rem] right-[3.5rem]'
        id='sparkle1'
      >
        <Image
          src={'/images/sparkle-large.svg'}
          alt=''
          width={32}
          height={41}
        />
      </div>
      <div
        className='absolute z-20 opacity-0 scale-0 right-[2.5rem] top-[0.5rem]'
        id='sparkle2'
      >
        <Image
          src={'/images/sparkle.svg'}
          alt=''
          width={26}
          height={29}
        />
      </div>
      <div
        className='relative z-10 w-full h-full p-[1.95rem_1.23rem_1.21rem_1.42rem] origin-center'
        id='cardContent'
      >
        <div className='flex flex-col justify-center h-full'>
          <p
            className='relative text-[3.93488rem] font-bold leading-[3.66038rem] w-fit bg-gradient-to-b from-[#001cb3] to-[#548beb] bg-clip-text text-transparent xsm:text-[2.52681rem] xsm:leading-[2.3505rem]'
            id='cardNumber'
          >
            {unit}
            <span
              className='absolute -top-[1.25rem] -right-[1rem] text-[2.90363rem] leading-[2.70106rem] font-bold [-webkit-text-stroke:1.39px_#fff] bg-gradient-to-b from-[#ff7300] to-white bg-clip-text text-transparent xsm:text-[1.8625rem]'
              id='cardPlus'
            >
              {value}
            </span>
          </p>
          <hr
            className='border border-[#e2e2e2] my-[0.875rem] xsm:my-[0.5rem] xsm:border-[0.025rem]'
            id='cardLine'
          />
          <p
            className='text-base text-[#081d1a] xsm:text-[0.75rem] xsm:leading-[1.0425rem] xsm:w-[9.05rem]'
            id='cardText'
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DefinitionCard
