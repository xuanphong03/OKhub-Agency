import type {Footer, SocialList} from '@/types/footer.interface'
import Image from 'next/image'
import Link from 'next/link'

interface FooterLogoProps {
  footer: Footer
  globalSocial: SocialList | null
}

const FooterLogo = ({footer, globalSocial}: FooterLogoProps) => {
  return (
    <div className='flex flex-col justify-between relative z-30'>
      <div className='flex flex-col xsm:flex-row xsm:items-center xsm:justify-between xsm:px-[0.625rem] xsm:py-[1.5rem] xsm:bg-[#F5F7F9] xsm:border-t xsm:border-b'>
        <Link
          href='/'
          className='mt-14 xsm:mt-0'
        >
          <Image
            src={footer.logo_footer.url}
            alt={footer.logo_footer.alt}
            width={16.80975}
            height={4.5}
            className='h-[4.5rem] w-[16.80975rem] xsm:h-[2.5rem] xsm:w-full'
          />
        </Link>
        <p className='mt-10 text-[#aaa] text-sm font-normal leading-[1.42188rem] w-[19.65265rem] xsm:w-[11rem] xsm:mt-0 xsm:text-[0.625rem] xsm:leading-[0.8225rem]'>
          {footer.desc}
        </p>
      </div>

      {globalSocial && (
        <div className='flex relative z-30 pb-7 xsm:hidden'>
          {globalSocial.map(
            (item, index: number) =>
              item.social_icon &&
              item.social_link &&
              item.social_link.url && (
                <Link
                  key={index}
                  href={item.social_link.url}
                  className='w-11 h-11 flex justify-center items-center rounded-full border border-[rgba(120,120,120,0.17)] mr-3'
                >
                  <Image
                    src={item.social_icon.url}
                    alt={item.social_icon.alt}
                    width={24}
                    height={24}
                    className='w-4 h-4 object-contain'
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
