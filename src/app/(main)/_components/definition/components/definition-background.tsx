import Image from 'next/image'

const DefinitionBackground = () => {
  return (
    <>
      <div className='absolute left-0 top-0 z-10 bg-no-repeat'>
        <Image
          width={2181}
          height={1110}
          src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/definition-bg-1.png'
          alt=''
          className='w-[75rem] h-[36.25rem] opacity-50 bg-contain xsm:hidden block'
          draggable='false'
        />
      </div>
      <div className='absolute right-0 bottom-0 z-10 bg-no-repeat'>
        <Image
          src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/definition-bg-2.png'
          alt=''
          className='w-[75rem] h-[36.25rem] opacity-40'
          draggable='false'
          width={1891}
          height={1122}
        />
      </div>
      <Image
        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xsm:hidden block h-[42.28856rem] w-[67.66169rem] opacity-80 bg-no-repeat bg-cover z-20'
        src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/bg-mark.png'
        alt=''
        draggable='false'
        width={2166}
        height={1354}
      />
    </>
  )
}

export default DefinitionBackground
