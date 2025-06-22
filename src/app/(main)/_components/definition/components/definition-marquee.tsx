import {IMedia} from '@/types/media.interface'
import Image from 'next/image'

const DefinitionMarquee = ({
  definition_partner,
}: {
  definition_partner: IMedia[]
}) => {
  const duplicatedPartners = [
    ...(definition_partner || []),
    ...(definition_partner || []),
  ].sort(() => Math.random() - 0.5)

  return (
    <section
      id='trusted-brands'
      className='mt-8 overflow-hidden'
    >
      <p className='text-center text-[#092c4cb8] text-base mx-auto'>
        Được tin cậy bởi hơn <strong>150.000 thương hiệu</strong> thương mại
        điện tử toàn cầu
      </p>

      <div className='w-[85rem] overflow-hidden relative mt-5 mx-auto'>
        <div className='absolute top-0 left-0 w-[15%] z-10 h-full pointer-events-none bg-gradient-to-r from-white via-white/60 to-transparent xsm:hidden'></div>
        <div className='absolute top-0 right-0 w-[15%] z-10 h-full pointer-events-none bg-gradient-to-l from-white via-white/60 to-transparent xsm:hidden'></div>
        <div className='flex'>
          <ul className='inline-block whitespace-nowrap animate-marquee'>
            {duplicatedPartners.map((partner, index) => (
              <li
                className='min-w-40 px-4 list-none inline-block'
                key={index}
              >
                <Image
                  src={partner.url}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className='object-contain w-24 h-24'
                  draggable={false}
                />
              </li>
            ))}
          </ul>
          <ul className='inline-block whitespace-nowrap animate-marquee'>
            {duplicatedPartners.map((partner, index) => (
              <li
                className='min-w-40 px-4 list-none inline-block'
                key={index}
              >
                <Image
                  src={partner.url}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className='object-contain w-24 h-24'
                  draggable={false}
                />
              </li>
            ))}
          </ul>
        </div>

        <hr className='border border-[#f7f7f7] hidden' />
      </div>
    </section>
  )
}

export default DefinitionMarquee
