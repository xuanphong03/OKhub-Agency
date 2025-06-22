import Image from 'next/image'
import type {Footer} from '@/types/footer.interface'

interface FooterHotlineProps {
  footer: Footer
}

const FooterHotline = ({footer}: FooterHotlineProps) => {
  if (!footer?.hotline) return null

  return (
    <div className='flex items-center justify-between h-[9.675rem] pl-[2.125rem] xsm:hidden'>
      <div className='flex flex-col'>
        <p className='text-[#999] text-sm font-normal leading-6'>
          {footer.hotline.title || ''}
        </p>
        <div
          className='text-[#333] text-[1.75rem] font-normal leading-[2.33313rem]'
          dangerouslySetInnerHTML={{
            __html: footer.hotline.phone_number || '',
          }}
        />
        {footer.hotline.mail && (
          <div
            className='text-[#999] text-sm font-normal leading-6'
            dangerouslySetInnerHTML={{
              __html: footer.hotline.mail,
            }}
          />
        )}
      </div>

      <div className='flex items-center'>
        <p className='text-[#999] text-sm font-normal leading-6'>
          {footer.hotline.advise || ''}
        </p>
        {footer.hotline.image_advise && footer.hotline.qr_advise && (
          <div className='relative mr-5 cursor-pointer group'>
            <Image
              src={footer.hotline.image_advise.url}
              alt={footer.hotline.image_advise.alt || ''}
              width={3.3}
              height={3.3}
              className='w-[3.3rem] h-[3.3rem] px-[0.42975rem] py-0 flex justify-center items-center rounded-full border border-[#f1f1f1] ml-[0.95rem]'
            />
            <span className="w-[5.91625rem] h-[6.5rem] absolute z-30 opacity-0 transition-all duration-300 -top-[6.75rem] -right-[4.3rem] transform -translate-x-1/2 translate-y-[30%] scale-80 bg-[url('/images/tooltip.svg')] bg-no-repeat bg-center bg-cover filter drop-shadow-[0px_4px_20.9px_rgba(0,0,0,0.12)] flex justify-center items-center pb-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-auto">
              <Image
                src={footer.hotline.qr_advise.url}
                alt={footer.hotline.qr_advise.alt || ''}
                width={100}
                height={100}
                className='w-[5.15994rem] h-[5.15994rem]'
              />
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default FooterHotline
