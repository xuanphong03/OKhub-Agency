import type {Credential} from '@/types/footer.interface'
import Image from 'next/image'
import Link from 'next/link'

interface FooterCredentialProps {
  credential: Credential
}

const FooterCredential = ({credential}: FooterCredentialProps) => {
  if (!credential) return null

  return (
    <div className='xsm:justify-between xsm:border xsm:border-[#eee] xsm:rounded-[0.625rem] xsm:m-[0.625rem] xsm:overflow-hidden xsm:p-[1.125rem_1.5rem_0.0625rem_1.25rem] relative flex items-end border-b border-[#f1f1f1]'>
      <Image
        src={
          'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/footer-bg-1.png'
        }
        alt={credential.image?.alt || 'Footer background'}
        width={1000}
        height={1000}
        className='xsm:w-full absolute right-[-8rem] bottom-0 z-1 h-[10.1875rem] w-[36.8125rem]'
      />
      <Image
        src={credential?.image?.url || ''}
        alt={credential?.image?.alt || 'Credential image'}
        width={143}
        height={143}
        className='hidden'
      />

      <div className='xsm:p-0 xsm:pr-0 xsm:pb-0 xsm:pl-0 p-16 pr-[3.25rem] pb-[1.8575rem] pl-[2.06rem]'>
        <h4 className='xsm:mb-body-16 xsm:w-[10.25rem] xsm:mb-[0.3125rem] text-2xl leading-8 font-normal text-[#333]'>
          {credential?.title || ''}
        </h4>
        {credential?.desc && (
          <p
            className='xsm:hidden mt-[0.575rem] mb-[1.5125rem] w-[11.53772rem] text-sm leading-[1.125rem] font-normal text-[#666]'
            dangerouslySetInnerHTML={{
              __html: credential.desc ?? '',
            }}
          />
        )}

        {credential?.link_download?.url && (
          <Link
            target='_blank'
            href={credential?.link_download?.url ?? '#'}
            // rel='noopener noreferrer'
            className='group xsm:h-[2rem] xsm:w-[5rem] xsm:mb-[0.725rem] relative z-10 inline-flex h-[2.925rem] max-w-[47.22188rem] cursor-pointer border-none bg-[#293844] pr-[0.4375rem]'
          >
            <div className='xsm:pt-[0.625rem] m-0 flex w-fit flex-col overflow-hidden px-4 pt-[1.15rem] pb-[0.73rem] text-white'>
              <span className='text top xsm:text-[0.675rem] xsm:w-[2.875rem] transition-all duration-300 group-hover:-translate-y-[250%] group-hover:animate-[flashColor_0.4s_ease-out_forwards]'>
                {credential.link_download.title}
              </span>
              <span className='text bottom translate-y-full transition-all duration-300 group-hover:-translate-y-full'>
                {credential.link_download.title}
              </span>
            </div>
            <Image
              src={
                'https://seohub.okhub-tech.com/wp-content/uploads/2025/04/arrow-download.svg'
              }
              alt='Download arrow'
              width={241}
              height={241}
              className='relative z-10 mt-4 -ml-4 h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-600 group-hover:translate-x-[1.575rem] group-hover:opacity-100'
            />
            <div className='mt-[0.4375rem] h-[0.4rem] w-[0.4rem] rotate-0 transform bg-white transition-all duration-600 group-hover:h-[2.125rem] group-hover:w-[2.1875rem] group-hover:rotate-[-180deg]'></div>
          </Link>
        )}
      </div>

      {credential?.image?.url && (
        <div className='xsm:w-[7rem] xsm:h-[3.93rem] relative z-10 h-[8.69456rem] w-[15.45706rem] overflow-hidden'>
          <Image
            src={credential.image.url}
            alt={credential.image.alt || 'Credential image'}
            width={1000}
            height={1000}
            className='xsm:w-[7rem] xsm:h-[3.93rem] xsm:translate-y-0 translate-y-4 transform shadow-[0px_4px_24.8px_0px_rgba(0,0,0,0.27)] transition-transform duration-500 hover:translate-y-0'
          />
        </div>
      )}
    </div>
  )
}

export default FooterCredential
