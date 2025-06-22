import Image from 'next/image'

interface DefinitionCompanyProps {
  imageUrl: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
}

const DefinitionCompany = ({
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
}: DefinitionCompanyProps) => {
  return (
    <div className='-mr-[2rem] relative'>
      <div className='drawler'>
        <svg
          width='732'
          height='126'
          viewBox='0 0 732 126'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          id='triangleSVG'
          className='w-[46.67963rem] h-[7.87013rem] ml-20 -mb-9 xsm:w-[18.5rem] xsm:h-[3.25rem] xsm:-mb-[0.85rem] xsm:ml-[2.875rem] xsm:mt-[0.875rem]'
        >
          <path
            d='M113.5 96C247.5 134.5 357.5 126.5 313 57C379 118 457 84 462.5 23C460.5 89 534 108 571.5 68.5C559.707 111.799 594.316 106.079 654.5 97'
            fill='none'
            stroke='#1550E5'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <path
            d='M479.726 36.5654C480.054 42.5475 480.906 55.2491 481.693 58.1992'
            fill='none'
            stroke='#1550E5'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <path
            d='M79.5 67C117.5 83 205.7 113.2 254.5 106'
            fill='none'
            stroke='#1550E5'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </svg>
      </div>
      {imageUrl && (
        <Image
          src={imageUrl}
          className='w-[54.20319rem] h-[25.10856rem] object-contain xsm:w-[23.22413rem] xsm:h-[10.75813rem]'
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
        />
      )}
    </div>
  )
}

export default DefinitionCompany
