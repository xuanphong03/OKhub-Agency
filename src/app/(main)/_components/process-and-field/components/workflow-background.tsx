import Image from 'next/image'

export const WorkflowBackground = () => {
  return (
    <div
      id='layer-background'
      className='relative h-screen overflow-hidden xsm:h-auto'
    >
      <Image
        src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/bg-mark.png'
        alt=''
        className='absolute right-[-18.67rem] top-0 w-[97.4205rem] h-[60.88781rem] object-contain xsm:hidden block'
        width={974.205}
        height={608.8781}
      />
      <Image
        src='https://seohub.okhub-tech.com/wp-content/uploads/2025/04/foot-r-img-bg-1.webp'
        alt=''
        className='absolute right-[17.81rem] bottom-[22.6875rem] w-[75rem] h-[36.25rem] object-contain z-[1] xsm:hidden block'
        width={750}
        height={362.5}
      />
      <div className='ovlay-mb'></div>
    </div>
  )
}
