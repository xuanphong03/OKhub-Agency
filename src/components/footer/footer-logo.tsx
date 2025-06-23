import type {Footer, SocialList} from '@/types/footer.interface'
import Image from 'next/image'
import Link from 'next/link'

interface FooterLogoProps {
  footer: Footer
  globalSocial: SocialList | null
}

const FooterLogo = ({footer, globalSocial}: FooterLogoProps) => {
  return (
    <div className='relative z-30 flex flex-col justify-between'>
      <div className='xsm:flex-row xsm:items-center xsm:justify-between xsm:px-[0.625rem] xsm:py-[1.5rem] xsm:bg-[#F5F7F9] xsm:border-t xsm:border-b flex flex-col'>
        <Link
          href='/'
          className='xsm:mt-0 mt-14'
        >
          <Image
            src={footer.logo_footer.url}
            alt={footer.logo_footer.alt}
            width={200}
            height={50}
            className='xsm:h-[1.875rem] h-[3.19925rem] w-auto'
          />
        </Link>
        <p className='xsm:w-[11rem] xsm:mt-0 xsm:text-[0.625rem] xsm:leading-[0.8225rem] mt-10 w-[19.65265rem] text-sm leading-[1.42188rem] font-normal text-[#aaa]'>
          {footer.desc}
        </p>
      </div>

      {globalSocial && (
        <div className='xsm:hidden relative z-30 flex pb-7'>
          {globalSocial.map(
            (item, index: number) =>
              item.social_icon &&
              item.social_link &&
              item.social_link.url && (
                <Link
                  key={index}
                  href={item.social_link.url}
                  className='mr-3 flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(120,120,120,0.17)]'
                >
                  <Image
                    src={item.social_icon.url}
                    alt={item.social_icon.alt}
                    width={24}
                    height={24}
                    className='h-4 w-4 object-contain'
                  />
                </Link>
              ),
          )}
        </div>
      )}
    </div>
  )
}

export default FooterLogo
